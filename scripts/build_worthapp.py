#!../venv/bin/python

"""
This script reads tree.json and builds index.html in the worthapp/
directory based on that data.
"""

from bs4 import BeautifulSoup
import json
from os.path import join


BASEPATH = '../worthapp/'
SESSION_TITLES = [
    'Beginning the Journey',
    'Taking in the View',
    'Planning for Safety',
    'Staying Strong',
    'Keeping it Going',
]


def get_page_path(s_idx, p_idx):
    return '#s{:02}{:02}'.format(s_idx + 1, p_idx + 1)


def make_nav(soup, tree):
    """Make the table of contents + nav table of contents."""

    toc = soup.find_all('ol', class_='toc')[0]
    nav_toc = soup.find_all('ol', class_='nav-toc')[0]

    for s_idx, session in enumerate(tree):

        li = soup.new_tag('li')
        li.append('Session {}: {}'.format(s_idx + 1, SESSION_TITLES[s_idx]))

        nav_li = soup.new_tag('li')
        nav_li.append(
            'Session {}: {}'.format(s_idx + 1, SESSION_TITLES[s_idx]))

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


def render_page(page, page_num, session_num, session_title, session_length):
    """Render page data with its template.

    Returns a BeautifulSoup object.
    """
    if page.get('template'):
        name = page.get('template')
        page_t = open('templates/{}.html'.format(name)).read()
    elif page.get('video'):
        page_t = open('templates/video.html').read()
        page_t = page_t.replace('VIDFILE', page.get('video'))
    else:
        page_t = open('templates/page.html').read()

    long_session_title = 'Session {}: {}'.format(session_num, session_title)

    page_out = page_t.replace('{% SESSIONTITLE %}', long_session_title)
    page_out = page_out.replace('{% PAGENUM %}', str(page_num))
    page_out = page_out.replace('{% SESSIONLENGTH %}', str(session_length))
    page_out = page_out.replace('{% TITLE %}', page.get('title'))
    page_out = page_out.replace('{% SUBTITLE %}', page.get('subtitle') or '')
    page_out = page_out.replace('{% PARAGRAPH %}', page.get('paragraph') or '')
    page_out = page_out.replace('{% VIDPOSTER %}',
                                page.get('poster') or 'lucia')

    if page.get('image'):
        img_tag = '<img class="worth-icon" src="img/{}">'.format(
            page.get('image'))
        page_out = page_out.replace('{% IMG %}', img_tag)
    else:
        page_out = page_out.replace('{% IMG %}', '')

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
            slide.append(
                render_page(page, p_idx + 1, s_idx + 1,
                            SESSION_TITLES[s_idx],
                            session_lengths[s_idx]))
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
