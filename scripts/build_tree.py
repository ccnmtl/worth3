#!/usr/bin/env python3

"""
This script reads tree.json and builds the following ePub files based
on that data:

  - nav.xhtml  (The table of contents)
  - toc.ncx (The table of contents, necessary for EPUB 2
    compatibility)
  - An xhtml file for each node in the tree, with names like
    "sXXNN.xhtml", where XX is the session number, NN is the page
    number within that session.

These files are put in the worthbook/EPUB/ directory.
"""

import json
from os.path import join
from xml.etree import ElementTree


BASEPATH = '../worthbook/EPUB/'


def get_page_path(s_idx, p_idx):
    return 's{:02}{:02}.xhtml'.format(s_idx + 1, p_idx + 1)


def make_nav(tree):
    """Make the ePub's nav.xhtml based on the tree."""
    ns = 'http://www.w3.org/1999/xhtml'
    ElementTree.register_namespace('', ns)
    xml_tree = ElementTree.parse('templates/nav.xhtml')
    root = xml_tree.getroot()

    # TODO: figure out how to avoid having to specify the
    # xml namespace for each element.
    ol = root.find('{http://www.w3.org/1999/xhtml}body//'
                   '{http://www.w3.org/1999/xhtml}nav//'
                   '{http://www.w3.org/1999/xhtml}ol')

    for s_idx, session in enumerate(tree):
        li = ElementTree.SubElement(ol, 'li')
        span = ElementTree.SubElement(li, 'span')
        span.text = 'Session {}'.format(s_idx + 1)

        session_ol = ElementTree.SubElement(li, 'ol')

        for p_idx, page in enumerate(session['pages']):
            page_li = ElementTree.SubElement(session_ol, 'li')
            page_a = ElementTree.SubElement(
                page_li, 'a',
                {'href': get_page_path(s_idx, p_idx)})
            page_a.text = page['title']

    xml_tree.write(join(BASEPATH, 'nav.xhtml'),
                   encoding='utf-8',
                   method='xml')


def render_page(page):
    """Render page data with its template.

    Returns a DOM string.
    """
    if page.get('interactive'):
        name = page.get('interactive')
        page_t = open('templates/{}.xhtml'.format(name)).read()
    elif page.get('video'):
        page_t = open('templates/video.xhtml').read()
        page_t = page_t.replace('VIDFILE', page.get('video'))
    else:
        page_t = open('templates/page.xhtml').read()

    return page_t.replace('TITLE', page['title'])


def make_page(s_idx, p_idx, page):
    """Write the page file."""
    page_path = join(BASEPATH, get_page_path(s_idx, p_idx))
    print('Creating {}...'.format(page_path))
    newpage = open(page_path, 'w')
    newpage.write(render_page(page))
    newpage.close()


def main():
    tree = json.loads(open('tree.json').read())

    print('Creating {} sessions\n   ---'.format(len(tree)))

    make_nav(tree)

    for s_idx, session in enumerate(tree):
        print('Generating "{}"...'.format(session['title']))

        for p_idx, page in enumerate(session['pages']):
            make_page(s_idx, p_idx, page)


if __name__ == '__main__':
    main()
