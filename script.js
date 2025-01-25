function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}
function clearDisplay() {
    const clear = document.getElementById("display");
    clear.value = '';
}
function deleteLast() {
    const remove = document.getElementById("display");
    remove.value = remove.value.slice(0, -1);
}
function calculateResult() {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}