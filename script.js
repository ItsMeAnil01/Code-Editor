function run(){
    let htmlcode = document.getElementById("htmlcode");
    let csscode = document.getElementById("csscode");
    let jscode = document.getElementById("jscode");

    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlcode.value + "<style>" + csscode.value +"</style>";

    output.contentWindow.eval(jscode.value);
}