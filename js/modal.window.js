function modal_window() {
    document.getElementById("ask-question").style.display="block";
    document.getElementById("ask-question").classList.add('modal--open');
}

function modal_close(){
    document.getElementById("ask-question").style.display="none";
    document.getElementById("ask-question").classList.delete('modal--open');
}