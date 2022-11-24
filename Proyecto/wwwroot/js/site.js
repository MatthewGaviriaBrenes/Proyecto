// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*
En caso de usar esto se tiene que llamar en el numinform como un onchange
function toggleButton() {
    var nombre = document.getElementById('numinform').value;

    if (nombre) {
        document.getElementById('Download').disabled = false;
    } else {
        document.getElementById('Download').disabled = true;
    }
}*/

/*function descargar(value) {
    var backup = document.body.innerHTML;
    var content = document.getElementById(value).innerHTML;
    var titulo = document.title;
    var nombre = document.getElementById("numinform").value;

    if (numinform == null) {

        alert("Por favor complete los campos");
    }
    else
    {
        document.getElementById("txtresul").style.display = "block";
        document.title = nombre;
        document.body.innerHTML = content;
        window.print();
        document.body.innerHTML = backup;
        document.getElementById("txtresul").style.display = "none";
        document.getElementById("txtresul").innerHTML = null;
        document.title = titulo;
    }     
}
/*document.getElementById("Download").onclick = function () {
    var numinform = document.getElementById("numinform").value;
    var ejtxt = document.getElementById("ejtxt").value;

    if (numinform == "" && ejtxt == "") {
        alert("Por favor complete los campos");
    }
    else {
        var nombre = numinform;

        console.log("El número de informe es: ", numinform);

        exportar(ejtxt, nombre);

        alert("Sus datos fueron enviados");
    }
}

function exportar(data, filename) {
    var a = document.createElement("a");
    var contenido = data,
        blob = new Blob([contenido], { type: "application/pdf" })
        console.log(blob)
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename + ".pdf";
    a.click();
    window.URL.revokeObjectURL(url);
}*/

function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}