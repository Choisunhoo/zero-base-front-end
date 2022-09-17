/**
 * Promise
 */


const promiseResolve = Promise.resolve('성공');
const promiseReject = Promise.reject('실패');

promiseResolve.then((resolve) => console.log(resolve));  // 성공

promiseResolve
    .then((resolve) => {
        console.log('1회' + resolve);   // 1회성공
        return promiseResolve;   
    })
    .then((resolve) => {
        console.log('2회' + resolve);   // 2회성공
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('3회' + resolve);   // 3회성공
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('4회' + resolve);   // 4회성공
        return promiseResolve;
    })

