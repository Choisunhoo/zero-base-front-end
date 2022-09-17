/**
 * Promise reject
 */


const promiseResolve = Promise.resolve('성공');
const promiseReject = Promise.reject('실패');

promiseResolve.then((resolve) => console.log(resolve));  // 성공

//promise resolve
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



//promise reject

promiseResolve
    .then((resolve) => {
        console.log('1회' + resolve);   // 1회성공
        return promiseResolve;   
    })
    .then((resolve) => {
        console.log('2회' + resolve);   // 2회성공
        return promiseReject;
    })
    .then((resolve) => {
        console.log('3회' + resolve);  
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('4회' + resolve);   
        retu
    })


promiseResolve
    .then((resolve) => {
        console.log('1회' + resolve);   // 1회성공
        return promiseResolve;   
    })
    .then((resolve) => {
        console.log('2회' + resolve);   // 2회성공
        return promiseReject;
    })
    .catch((reject) => {
        console.log('3회' + reject);   // 3회 실패
        return promiseResolve;
    })
    .then((resolve) => {
        console.log('4회' + resolve);   // 4회 성공
        return promiseResolve;
    })