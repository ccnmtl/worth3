JS_ROOT=worthapp
JS_FILES=worthapp/js/src/*.js worthapp/js/tests/*.js

include *.mk

build:
	cd scripts && ./build_worthapp.py
