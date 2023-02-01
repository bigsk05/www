/*!
 * Image Modal
 * Copyright 2022 Bigsk (Ian Xia)
 * Licensed under MIT
 */
let modal = document.getElementById('modal')
let modal_img = document.getElementById("modal_img")
let caption = document.getElementById("caption")

function show_modal(obj){
    modal.style.display = "block"
    modal_img.src = obj.src
    caption.innerHTML = obj.alt
}

let span = document.getElementById("close");

span.onclick = function(){
    modal.style.display = "none";
}