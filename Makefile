JS_ROOT=worthapp
JS_FILES=worthapp/js

include *.mk

build:
	cd scripts && ./build_worthapp.py
