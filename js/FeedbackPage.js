function cambiaColore() {
    let rate = document.querySelectorAll(".rate div > i");
    let indice = 0;

    for (let x = 0; x < rate.length; x++) {
        rate[x].addEventListener("click", () => {
            indice = x;

            for (let y = 0; y < rate.length; y++) {
                if (y <= indice) {
                    rate[y].classList.add("colore");
                } else {
                    rate[y].classList.remove("colore");
                }
            }
        });
    }
}

cambiaColore();