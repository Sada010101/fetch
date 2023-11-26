document.getElementById("btn").addEventListener("click", function() {
    var osnovsumma = parseFloat(document.getElementById("credit").value);
    var godovayaprocentnaya = parseFloat(document.getElementById("procent").value);
    var kolvomes = parseInt(document.getElementById("month").value);
    
    var mesprocentstavka =  godovayaprocentnaya/ 100 / 12;
   
    var ezhemplat = (osnovsumma * mesprocentstavka) / (1 - Math.pow(1 + mesprocentstavka, -kolvomes));

    var obshsum = ezhemplat * kolvomes;

    document.getElementById("monthlyPayment").textContent = ezhemplat.toFixed(2) + " сом.";
    document.getElementById("totalPayment").textContent = obshsum.toFixed(2) + " сом.";
  });
  

var inputField = document.getElementById("myInput");
var clearButton = document.getElementById("clearInput");

clearButton.addEventListener("click", function() {
    inputField.value = "";
});

