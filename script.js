document.addEventListener("DOMContentLoaded", () => {
    const productos = document.querySelectorAll('.producto');

    // Mostrar productos con retraso de 3 segundos entre cada uno
    productos.forEach((producto, index) => {
        producto.classList.remove('visible'); // Asegura estado inicial

        setTimeout(() => {
            producto.classList.add('visible');
        }, index * 1000); // 1 segundos por tarjeta
    });

    // Funcionalidad de mostrar/ocultar infoBox
    const toggleButtons = document.querySelectorAll('.toggleInfo');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const infoBox = document.querySelector(`.infoBox[data-info="${btn.dataset.info}"]`);

            const isOpen = infoBox.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', isOpen);
            btn.textContent = isOpen ? 'Ocultar' : 'Haz clic aquí';
        });
    });

    // Cerrar todos los infoBox al presionar Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.infoBox.is-open').forEach(infoBox => {
                infoBox.classList.remove('is-open');

                const btn = document.querySelector(`.toggleInfo[data-info="${infoBox.dataset.info}"]`);
                if (btn) {
                    btn.setAttribute('aria-expanded', false);
                    btn.textContent = 'Haz clic aquí';
                    btn.focus();
                }
            });
        }
    });
});
