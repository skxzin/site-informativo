document.addEventListener('DOMContentLoaded', function () {
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');

    let tamanhoFonte = 1; // 1rem = padrão

    aumentarFonteBtn.addEventListener('click', function () {
        if (tamanhoFonte < 2) {
            tamanhoFonte += 0.1;
            document.body.style.fontSize = `${tamanhoFonte}rem`;
        }
    });

    diminuirFonteBtn.addEventListener('click', function () {
        if (tamanhoFonte > 0.8) {
            tamanhoFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoFonte}rem`;
        }
    });
});
