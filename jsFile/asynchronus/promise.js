"use strict";
function appendAndReadPromise(path, data) {
    return appendPromise(path, data)
        .then(() => readPromise(path))
        .catch(error => console.error(error));
}
function appendAndRead(path, data, cb) {
    //appendFile(path, data, error => {
    //  if (error) {
    // return cb(error, null)
    //   }
    //  readFile(path, (error, result) => {
    //   if (error) {
    //   //       return cb(error, null)
    //      }
    //       cb(null, result)
    //    })
    // })
    //}
    function readFilePromise(path) {
        return new Promise((resolve, reject) => {
            readFile(path, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    // resolve(result)
                }
            });
        });
    }
    function readFile(path, callback) { }
}
