
    const Interruptor = document.getElementById("modo");

    if (Interruptor) {
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
    }

    function copiarCodigo(id) {
        const el = document.getElementById(id);
        if (!el) {
            alert('No se encontró el código a copiar.');
            return;
        }
        const codigo = el.textContent;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(codigo).then(() => {
                alert("Código copiado al portapapeles");
            }).catch(() => {
                fallbackCopy(codigo);
            });
        } else {
            fallbackCopy(codigo);
        }
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('Código copiado al portapapeles');
            } else {
                alert('No se pudo copiar automáticamente. Selecciona y copia manualmente.');
            }
        } catch (e) {
            alert('No se pudo copiar automáticamente. Selecciona y copia manualmente.');
        }
        document.body.removeChild(textarea);
    }
