(function(){
    "use strict"
    
    const close = document.querySelector(".cls");
    const slide = document.querySelector("#menu");
    const open = document.querySelector(".drp");

    close.addEventListener("click", () => {
        slide.style.right = "-270px";
    });
    open.addEventListener("click", () => {
        slide.style.right = "0";
    });
})();