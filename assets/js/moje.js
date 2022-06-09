function toggleDiv() {
    var x = document.getElementById("toggleDiv");
    var y = document.getElementById("toggleButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.innerHTML === "Pokaż") {
        y.innerHTML = "Schowaj"
    } else {
        y.innerHTML = "Pokaż"
    }
    ;
  } 