'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    var result = arr.reduce((x, y) => x + y, base);
    return result;
  },

  someObjsContainProp: (arr, prop) => {
    var filtered = arr.filter(function(e) {
      return e.hasOwnProperty(prop);
    });
    if (filtered.length > 0) {
      return true;
    }
    return false;
  },

  convertNameArrayToObject: (arr) => {
    var results = arr.map(function(e) {
      return {
        "first": e[0],
        "last": e[1]
      };
    });
    return results;
  },

  objContainsProp: (arr, prop) => {
    var result = arr.filter(function(value) {
      return value.hasOwnProperty(prop);
    });
    if (result.length < arr.length) {
      return false;
    }
    return true;
  },

  stringMatch: (arr, str) => {
    var contains = arr.filter(function(value) {
      if (value.includes(str)) {
        return value;
      }
    })
    return contains;
  },
};
