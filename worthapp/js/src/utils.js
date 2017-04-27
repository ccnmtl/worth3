/* eslint-env node */

var utils = {};

(function() {
    /**
     * Takes a page id, like s0407, and returns the index.
     */
    var id2idx = function(id, sLengths) {
        var loc = id.substr(id.length - 4);

        var session = parseInt(loc.substr(0, 2));
        var slide = parseInt(loc.substr(2, 4));

        var idx = 0;
        for (var i = 1; i < session; i++) {
            idx += sLengths[i - 1];
        }

        idx += slide;

        return idx;
    };

    /**
     * Prepends a '0' to the number if needed and returns a string.
     */
    var formatField = function(n) {
        if (n < 10) {
            return '0' + n.toString();
        } else {
            return n.toString();
        }
    };

    /**
     * Takes a page index and returns a page id, like s0407.
     */
    var idx2id = function(idx, sLengths) {
        for (var i = 0; i < sLengths.length; i++) {
            if (idx <= sLengths[i]) {
                break;
            } else {
                idx -= sLengths[i];
            }
        }

        return 's' + formatField(i + 1) + formatField(idx);
    };

    utils.id2idx = id2idx;
    utils.idx2id = idx2id;
})();


if (typeof module !== 'undefined') {
    module.exports = { utils: utils };
}
