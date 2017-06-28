VE ?= ./ve
PIP ?= $(VE)/bin/pip
PY_SENTINAL ?= $(VE)/sentinal

JS_ROOT=worthapp
JS_FILES=worthapp/js/src/*.js worthapp/js/tests/*.js

include *.mk

$(PY_SENTINAL):
	rm -rf $(VE)
	pyvenv $(VE)
	$(PIP) install -r requirements.txt
	touch $@

build: $(PY_SENTINAL)
	cd scripts && ../$(VE)/bin/python ./build_worthapp.py

clean:
	rm -rf $(VE)

.PHONY: clean
