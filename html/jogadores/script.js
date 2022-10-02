// Pegando tags p com os valores e já convertendo para int

var forcP = parseInt(document.getElementById("for").textContent);
var desP = parseInt(document.getElementById("des").textContent);
var conP = parseInt(document.getElementById("con").textContent);
var intP = parseInt(document.getElementById("int").textContent);
var sabP = parseInt(document.getElementById("sab").textContent);
var carP = parseInt(document.getElementById("car").textContent);

// Pegando tags p referentes aos modificadores

var forcMP = document.getElementById("forM");
var desMP = document.getElementById("desM");
var conMP = document.getElementById("conM");
var intMP = document.getElementById("intM");
var sabMP = document.getElementById("sabM");
var carMP = document.getElementById("carM");

// Fazendo calculo do modificador

var forcM = ((forcP - 10) / 2) / 2;
var desM = ((desP - 10) / 2) / 2;
var conM = ((conP - 10) / 2) / 2;
var intM = ((intP - 10) / 2) / 2;
var sabM = ((sabP - 10) / 2) / 2;
var carM = ((carP - 10) / 2) / 2;


// Arredondando para baixo

forcM = Math.floor(forcM)
desM = Math.floor(desM)
conM = Math.floor(conM)
intM = Math.floor(intM)
sabM = Math.floor(sabM)
carM = Math.floor(carM)

// Exibindo valores formatados com base nos dados

forcMP.innerHTML = (forcM >= 0 ? "<span style='color: green;'>+" : "<span style='color: red;'>") + forcM + "</span>"
desMP.innerHTML = (desM >= 0 ? "<span style='color: green;'>+" : "<span style='color: red;'>") + desM + "</span>"
conMP.innerHTML = (conM >= 0 ? "<span style='color: green;'>+" : "<span style='color: red;'>") + conM + "</span>"
intMP.innerHTML = (intM >= 0 ? "<span style='color: green;'>+" : "<span style='color: red;'>") + intM + "</span>"
sabMP.innerHTML = (sabM >= 0 ? "<span style='color: green;'>+" : "<span style='color: red;'>") + sabM + "</span>"
carMP.innerHTML = (conM >= 0 ? "<span style='color: green;'>+" : "<span style='color: red;'>") + carM + "</span>"