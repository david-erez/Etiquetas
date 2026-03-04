
    const Interruptor= document.getElementById("modo");

    if (localStorage.getItem("modo") === "dark") {
        document.body.classList.add("dark");
        Interruptor.checked = true;
    }
    Interruptor.addEventListener("change", () => {
        alert("¡Modo oscuro activado!");
        if (Interruptor.checked) {
            document.body.classList.add("dark");
            localStorage.setItem("modo", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("modo", "light");
        }
    });

    function copiarCodigo(id) {
        const codigo = document.getElementById(id).textContent;
        navigator.clipboard.writeText(codigo);
        alert("Código copiado al portapapeles");
    }
