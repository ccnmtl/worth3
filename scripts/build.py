#!../venv/bin/python

"""
This script reads tree.json and builds index.html in the worthapp/
directory based on that data.
"""

from bs4 import BeautifulSoup
import json
from os.path import join


BASEPATH = '../worthapp/'


def get_page_path(s_idx, p_idx):
    return '#s{:02}{:02}'.format(s_idx + 1, p_idx + 1)


def make_nav(soup, tree):
    """Make the ePub's nav.xhtml based on the tree."""

    toc = soup.find_all('ol', class_='toc')[0]

    for s_idx, session in enumerate(tree):

        li = soup.new_tag('li')
        li.append('Session {}'.format(s_idx + 1))

        toc.append(li)

        session_ol = soup.new_tag('ol')
        li.append(session_ol)

        for p_idx, page in enumerate(session['pages']):
            page_li = soup.new_tag('li')
            session_ol.append(page_li)

            page_a = soup.new_tag('a', href=get_page_path(s_idx, p_idx))
            page_li.append(page_a)
            page_a.string = page['title']


def render_page(page):
    """Render page data with its template.

    Returns a BeautifulSoup object.
    """
    if page.get('interactive'):
        name = page.get('interactive')
        page_t = open('templates/{}.html'.format(name)).read()
    elif page.get('video'):
        page_t = open('templates/video.html').read()
        page_t = page_t.replace('VIDFILE', page.get('video'))
    else:
        page_t = open('templates/page.html').read()

    page = page_t.replace('TITLE', page['title'])
    return BeautifulSoup(page, 'html.parser')


def main():
    tree = json.loads(open('tree.json').read())

    soup = BeautifulSoup(open('templates/index.html'), 'html.parser')

    make_nav(soup, tree)

    swiper_wrapper = soup.find_all('div', class_='swiper-wrapper')[0]
    for s_idx, session in enumerate(tree):
        for p_idx, page in enumerate(session['pages']):
            slide = soup.new_tag('div')
            slide['class'] = 'swiper-slide'
            slide.append(render_page(page))
            swiper_wrapper.append(slide)

    f = open(join(BASEPATH, 'index.html'), 'w')
    f.write(soup.prettify())


if __name__ == '__main__':
    main()
