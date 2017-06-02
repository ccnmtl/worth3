#!../venv/bin/python

"""
This script reads tree.json and builds index.html in the worthapp/
directory based on that data.
"""

from bs4 import BeautifulSoup
import json
from os.path import join


BASEPATH = '../worthapp/'
SUBTITLES = [
    'Beginning the Journey',
    'Taking in the view while deciding direction ',
    'Planning for my safety and the safety of others',
    'Staying strong and focused',
    'Keeping the journey going: I am WORTH it!',
]


def get_page_path(s_idx, p_idx):
    return '#s{:02}{:02}'.format(s_idx + 1, p_idx + 1)


def make_nav(soup, tree):
    """Make the table of contents + nav table of contents."""

    toc = soup.find_all('ol', class_='toc')[0]
    nav_toc = soup.find_all('ol', class_='nav-toc')[0]

    for s_idx, session in enumerate(tree):

        li = soup.new_tag('li')
        li.append('Session {}: {}'.format(s_idx + 1, SUBTITLES[s_idx]))

        nav_li = soup.new_tag('li')
        nav_li.append('Session {}'.format(s_idx + 1))

        toc.append(li)
        nav_toc.append(nav_li)

        session_ol = soup.new_tag('ol')
        li.append(session_ol)

        nav_session_ol = soup.new_tag('ol')
        nav_li.append(nav_session_ol)

        for p_idx, page in enumerate(session['pages']):
            page_li = soup.new_tag('li')
            session_ol.append(page_li)
            nav_page_li = soup.new_tag('li')
            nav_session_ol.append(nav_page_li)

            page_a = soup.new_tag('a', href=get_page_path(s_idx, p_idx))
            page_li.append(page_a)
            page_a.string = page['title']

            nav_page_a = soup.new_tag('a', href=get_page_path(s_idx, p_idx))
            nav_page_li.append(nav_page_a)
            nav_page_a.string = '{}.{} {}'.format(
                s_idx + 1, p_idx + 1, page['title'])


def render_page(page):
    """Render page data with its template.

    Returns a BeautifulSoup object.
    """
    if page.get('template'):
        name = page.get('template')
        page_t = open('templates/{}.html'.format(name)).read()
    elif page.get('video'):
        page_t = open('templates/video.html').read()
        page_t = page_t.replace('VIDFILE', page.get('video'))
        if page.get('poster'):
            page_t = page_t.replace('lucia.png', page.get('poster'))
    else:
        page_t = open('templates/page.html').read()

    page_out = page_t.replace('{% TITLE %}', page.get('title'))
    page_out = page_out.replace('{% SUBTITLE %}', page.get('subtitle') or '')

    return BeautifulSoup(page_out, 'html.parser')


def main():
    tree = json.loads(open('tree.json').read())

    soup = BeautifulSoup(open('templates/index.html'), 'html.parser')

    make_nav(soup, tree)

    swiper_wrapper = soup.find_all('div', class_='swiper-wrapper')[0]
    session_lengths = []
    for s_idx, session in enumerate(tree):
        session_lengths.append(len(session['pages']))
        for p_idx, page in enumerate(session['pages']):
            slide = soup.new_tag('div')
            slide['class'] = 'swiper-slide'
            slide.append(render_page(page))
            swiper_wrapper.append(slide)

    f = open(join(BASEPATH, 'index.html'), 'w')

    rendered = soup.prettify()
    for i in range(5):
        rendered = rendered.replace(
            'S{}LENGTH'.format(i + 1),
            str(session_lengths[i]))

    f.write(rendered)
    print('Wrote to {}'.format(join(BASEPATH, 'index.html')))


if __name__ == '__main__':
    main()
