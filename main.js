$( document ).ready(function() {
    setTimeout(main,100);
});



function __doPostBack(eventTarget, eventArgument, theForm) {
    if (!theForm.onsubmit || (theForm.onsubmit() !== false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}

function main () {
    var theForm = document.forms['form1'];
    if (!theForm) {
        theForm = document.form1;
    }
    
    idText = document.getElementById('txtBusquedaAvanzada');
    id = parseInt(idText.value, 10);
    idText.value = id + 1;
    if (id < 20000){
        __doPostBack('ctl00$menu$lnkBuscarCodigo','', theForm);
        download(id);
    }
}


function download (id) {
    try {
        pdf = document.getElementsByClassName('x_content');
        pdf = pdf[0].childNodes[1].src;
    }catch(err){
        return;
    }
    let file = document.createElement('a');
    file.href = pdf;
    file.download = id;
    file.target = '_blank';
    file.click();
    
}
