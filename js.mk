# VERSION=1.0.0
# expect JS_FILES to be set from the main Makefile, but default
# to everything in media/js otherwise.
JS_FILES ?= media/js

# JS_ROOT is the directory that contains package.json
JS_ROOT ?= .
NODE_MODULES ?= $(JS_ROOT)/node_modules
JS_SENTINAL ?= $(NODE_MODULES)/sentinal
ESLINT ?= $(NODE_MODULES)/.bin/eslint

$(JS_SENTINAL): $(JS_ROOT)/package.json
	cd $(JS_ROOT) && rm -rf $(NODE_MODULES)
	cd $(JS_ROOT) && npm install
	touch $(JS_SENTINAL)

eslint: $(JS_SENTINAL)
	$(ESLINT) $(JS_FILES)

jstest: $(JS_SENTINAL)
	cd $(JS_ROOT) && npm test

.PHONY: eslint jstest
