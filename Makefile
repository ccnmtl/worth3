JS_ROOT=worthapp
JS_FILES="worthapp/js/src worthapp/js/tests"

include *.mk

build:
	cd scripts && ./build_worthapp.py
