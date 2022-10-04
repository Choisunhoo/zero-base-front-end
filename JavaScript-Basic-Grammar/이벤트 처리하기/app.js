const buttonEl = document.querySelector("button");
// buttonEl.onclick = function (event) {
//     // alert(this.textContent);
//     alert(event.target.textContent)
// }
// buttonEl.onclick = null;

buttonEl.addEventListener("click", function(event) {
    alert(this.textContent);
})


const inputEl = document.querySelector("input");
// inputEl.onchange = (event) => console.log(event.target.value);
// inputEl.onchange = null;

inputEl.addEventListener("change", event => console.log(event.target.value));

function logEvent(event) {
    console.log({
        type: event.type,
        name: event.target.name,
        value: event.target.value,
    })
}

inputEl.addEventListener("change", logEvent);

inputEl.removeEventListener("change", logEvent);