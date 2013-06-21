function sleepsort(array, callback) {
    'use strict';

    var i,
        result = [];

    if (!array || array.length === 0) {
        return process.nextTick(function () {
            callback(result);
        });
    }

    function appendResult(n) {
        return function () {
            result.push(n);
            if (array.length === result.length) {
                callback(result);
            }
        };
    }

    for (i = 0; i < array.length; i++) {
        setTimeout(appendResult(array[i]), array[i]);
    }
}

module.exports = sleepsort;
