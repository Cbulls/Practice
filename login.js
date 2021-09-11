document.getElementById('submit').onclick = function() {
    var ID = document.getElementById('id').value;
    var pass = document.getElementById('pw').value;
    if (ID === "1234" && pass === "1234") {
        alert("Welcome!")
    }
    else {
        alert("Try Again!");
    }
}
