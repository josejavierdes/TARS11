let firstname = "Jorge";
let age = 36;
let LEGALAGE = 18;
let isMarried = true;

let message = "Mi nombre es " + firstname + " y tengo " + age + " años";



document.getElementById("text").textContent=message;

if (age>=LEGALAGE){
    document.getElementById("text2").textContent="Soy mayor de edad";
}
else{
    document.getElementById("text2").textContent="Soy menor de edad";
}

if (isMarried){
    document.getElementById("text3").textContent="Casado";
}
else{
    document.getElementById("text3").textContent="Soltero"
}

