/**
 * Falsy
 */

if (false) {

} else {
   console.log(false);
}

if (null) {

} else {
    console.log(false);
}

if (undefined) {

} else {
    console.log(false);
}

const emptyString = ''

if (emptyString.length === 0) {
    console.log('문자열이 비어있음');
}

if (!emptyString.length) {
    console.log('문자열이 비어있음');
}


if (false) { } else { console.log('실행')}
if (null) { } else { console.log('실행')}
if (undefined) { } else { console.log('실행')}
if (0) { } else { console.log('실행')}
if (-0) { } else { console.log('실행')}
if (0n) { } else { console.log('실행')}
if (NaN) { } else { console.log('실행')}
if ("") { } else { console.log('실행')}