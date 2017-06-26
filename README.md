# worth3
WORTH prototypes as an EPUB and offline HTML5 app.

## Development Notes
Here I'll outline some basics on how to make changes to the WORTH
HTML5 app. I'll start with a tour of some of the important files and
directories in this repository.

### `Makefile`
This project's makefile is set up for eslint/mocha, and notably, the
`make build` command runs the `scripts/build_worthapp.py` script that
I'll get to.

### `scripts/build_worthapp.py`
This is a central script that compiles the HTML templates together
into the giant `index.html` that will be used for the single-page
WORTH js app. As input, this script looks at `tree.json`, and the
templates in `/templates/`. This script generates the
`/worthapp/index.html` as output, which I've been generating and
committing to git each time I make a change to `tree.json` or anything
in `/templates/`.

This script automates the task of creating the DOM elements for the
nav sidebar menu and table of contents for WORTH, based on
`tree.json` - see the `make_nav()` function. Note that the
`SESSION_TITLES` array is duplicating the session names that are also
defined in `tree.json`. This could be cleaned up, but I just
hard-coded these in here because there are so few of them and it was
simple.

Look at the `render_page()` function to see my simple-as-possible
templating solution: I've been adding new template keywords here on an
as-needed basis.

In `main()` you can see how I'm opening `/templates/index.html` (the
base template), and then populating it with a "slide" for each page,
based on the contents of `tree.json`.

### `tree.json`
I'm using this file to define the rough structure of the entire
application. There are five sessions, each containing somewhere around
10 to 25 pages. The "activity" parts of this application each consist
of a single page with a custom template (defined with the "template"
attribute here in `tree.json`), that contains multiple "panels". Open
`templates/ssnm.html` for an example of this. This is the way that
Marc and I have decided to develop complex multi-page interactives
within this ebook-like experience. Users navigate within the activity
with OK and Back buttons (to navigate between 'panels'), while still
retaining the overarching swiping functionality to navigate between
'pages' (or 'slides', in Swiper.js terminology).

You'll notice that sometimes there's actually some content in this
file: search for items that have a "paragraph" attribute. These are
cases where the content calls for just a static page with nothing else
going on - here it's simple enough to just use the
`templates/page.html` template. But if the requirements call for
anything more than just a paragraph and/or image, you'll need to
create a custom template, even if there's no interactive elements to
that page. Look at `templates/summing-it-up-1.html` for an example of
that.

### `templates/index.html`
Just a standard `index.html` base template - new javascript files are
added here. The `build_worthapp.py` script empties and re-populates
the `.swiper-wrapper` element, where all the content is inserted.

### `worthapp/video/`
This is where I'm storing all the video files. This app is expected to
work offline, so we need to distribute these files along with
everything else. I've been fetching these files with
the [youtube-dl](https://rg3.github.io/youtube-dl/) utility - see `worthapp/video/README` for the
exact command.

### `worthapp/js/src/`
This directory contains all custom javascript that's used by the
interactive parts of the app, as well as the swiper.js setup (in
`worthapp/js/src/swiper-setup.js`.

Many activities contain common functionality, e.g., the OK/Back button
navigation between panels, and the progress bar. That's all defined in
the `initActivityPanels()` function in `common.js`.
