"use strict";
function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
createDate(554356800);
// Ok
createDate(7, 27, 1987);
// Ok
function format(data, needle, haystack) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
