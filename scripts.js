
// az eltalálandó szám meghatározása
let eltalalandoSzam = Math.round(Math.random() * 100);
let proba = 0;

// ellenőrző függvény
function szam(tipp) {

    if(tipp < 0 || tipp > 100) {
            document.getElementById("demo").innerHTML = "A megadott szám nem lehet kisebb 0-nál és nagyobb 100-nál!";
            document.getElementById("demo").style.color = "red";
            return;
    }
    else {
    
        if(tipp > eltalalandoSzam) {
            document.getElementById("demo").innerHTML = "Kisebb számra gondoltam!";
            document.getElementById("demo").style.color = "red";
            proba += 1;
            return false;
        }
        else if(tipp < eltalalandoSzam) {
            document.getElementById("demo").innerHTML = "Nagyobb számra gondoltam!";
            document.getElementById("demo").style.color = "red";
            proba += 1;
            return false;
        }
        else if(tipp == eltalalandoSzam) {
            document.getElementById("demo").innerHTML = "Eltalátad a számot!";
            document.getElementById("demo").style.color = "lime";
            return true;
        }

    }
}

// gombnyomásra kiíratja hogy hanyadik próbálkozásra sikerült eltalálni a számot
document.getElementById("button").addEventListener("click", function() {

    const inputTipp = document.getElementById("tipp").value;

        if(szam(inputTipp) == false) {
            console.log("nem talált");
            document.getElementById("proba").innerHTML = "Találgatások száma: " + proba;
        }
        else{
            console.log("talált");
            document.getElementById("proba").innerHTML = "Találgatások száma: " + proba;
        }
    
});


document.getElementById("proba").innerHTML = "Hányadikra sikerül eltalálni?";
