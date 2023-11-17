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
