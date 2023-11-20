document.addEventListener('DOMContentLoaded', function () {
    var check = document.querySelector('input[type="checkbox"]');
    var btnProceed = document.getElementById('proceed');
    btnProceed.disabled = true;

    check.addEventListener('change', function () {
        if (this.checked) {
            btnProceed.disabled = false;
            btnProceed.classList.add('customActive');
        } else {
            btnProceed.disabled = true;
            btnProceed.classList.remove('customActive');
        }
    });

    btnProceed.addEventListener('click', function () {
        if (!this.disabled) {
            window.location.href = 'BenchmarkPage.html';
        }
    });
});

let select = document.querySelector("#difficoltà");
let size = document.querySelector("#size");

console.log(size.value);
let difficulty = "";
let indice = 0;

function getValue2(){
    indice = size.value;
    console.log(indice);
    localStorage.setItem("indice", indice);

}
  getValue2();
function getValue(){
    difficulty = select.value;
    console.log(difficulty);
    localStorage.setItem('scelta', difficulty);
}
  getValue();