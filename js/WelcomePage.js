document.addEventListener('DOMContentLoaded', function () {
    var check = document.querySelector('input[type="checkbox"]');
    var btnProceed = document.getElementById('proceed');
    check.checked = false;
    btnProceed.disabled = true;
    check.addEventListener('click', function () {
        btnProceed.classList.toggle('customActive', this.checked);
        btnProceed.disabled = !this.checked;
    });
});