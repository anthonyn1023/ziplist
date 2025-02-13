"use strict";
function zipList(list1, list2) {
    const zippedList = [];
    for (let i = 0; i < list1.length; i++) {
        zippedList.push(list1[i]);
        zippedList.push(list2[i]);
    }
    return zippedList;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
