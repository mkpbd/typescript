// function appendAndReadPromise(path: string, data: string): Promise<string> {
//     return appendPromise(path, data)
//         .then(() => readPromise(path))
//         .catch(error => console.error(error))
// }

// function appendAndRead(
//     path: string,
//     data: string,
//     cb: (error: Error | null, result: string | null) => void
// ) {
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

    // function readFilePromise(path: string): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         readFile(path, (error, result) => {
    //             if (error) {
    //                 reject(error)
    //             } else {
    //                 // resolve(result)
    //             }
    //         })
    //     })
    // }

    // function readFile(
    //     path: string,

    //     callback: (err: Error | null, data: string | null | number | PromiseLike<string>) => void
    // ): void { }

