function change() {
    let initial = document.getElementById('number').value;
    let first = Math.max(0,Math.floor(initial/500));
    document.getElementById('po500').value = first;
    initial = initial % 500;
    let second = Math.max(0, Math.floor(initial/100));
    document.getElementById('po100').value = second;
    initial = initial % 100;
    let third = Math.max(0, Math.floor(initial/10));
    document.getElementById('po10').value = third;
    initial = initial % 10;
    let fourth = Math.max(0, Math.floor(initial/2));
    document.getElementById('po2').value = fourth;
    initial = initial % 2;
    initial = Math.max(0, initial);
    document.getElementById('ost').value = initial;
    console.log(initial);
}

function send() {
    var question = document.getElementById("question").value;
    var number = document.getElementById("number").value;
    var po500 = document.getElementById("po500").value;
    var po100 = document.getElementById("po100").value;
    var po10 = document.getElementById("po10").value;
    var po2 = document.getElementById("po2").value;
    var ost = document.getElementById("ost").value;
    var actionURL = "https://www.yandex.ru/search?question=" + question + "&number=" + number + "&po500=" + po500 + "&po100=" + po100 + "&po10=" + po10 + "&po2=" + po2 + "&ost=" + ost;
    document.forms[0].action = actionURL;
}