/**
 * Closure (활용 사례)
 */

buttonElement.addEventListener( 
    'click',
    debounce(handleClick, 500),
);

function debounce(func, timeout = 300) {
    let timer;

    retunr (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {func.apply(this, args); },)
    };
}
