function copiar() {
    var copyText = document.getElementById("comando");
    copyText.select(); 
    document.execCommand("copy");
    console.log(copyText.value);
}