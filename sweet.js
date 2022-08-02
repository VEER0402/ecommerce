var span = document.createElement("span");
span.innerHTML = "Testno  sporocilo za objekt <b>test</b>";

swal({
    title: "" + txt + "", 
    content: span,
    confirmButtonText: "V redu", 
    allowOutsideClick: "true" 
});