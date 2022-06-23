// проверка поддержки webp, добавление класса webp или no-webp для html

export function isWebp() {
    // проверка поддержки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // добавление класса _webp или _no-webp для html
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

// Modal
export function showModal(options) {
    const cons = document.querySelector('#cons')
    const overlay = document.querySelector('.overlay')
    const closePopup = document.querySelector('.popup__close')
    const btn = document.querySelector(".form__btn")
    const popup = document.querySelector(".popup")
    const thanks = document.querySelector("#thanks")
    const closeThanks = document.querySelector(".thanks__close")

    btn.addEventListener("click", function () { thanks.style.display = 'block'; })

    // closeThanks.addEventListener("click", function () { thanks.style.display = 'none'; })


    cons.addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closePopup.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
}
// mask

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}
export function mask(event) {
    var matrix = "+7 (___) ___ - __ - __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
var input = document.querySelector("#phone");
input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);
// sayHello
