
// az eltalálandó szám meghatározása ~ 221104 módosítás
let eltalalandoSzam;
let proba;

// tippgomb eltüntetése ~ 221104
document.getElementById("button").style.display = "none";

// tipp mező disabled/ readonly
//document.getElementById("tipp").readOnly = true;
document.getElementById("tipp").disabled = true;

// játék indítása ~ 221104
document.getElementById("newGame").addEventListener("click", function() {
    eltalalandoSzam = Math.round(Math.random() * 100);
    proba = 0;
    document.getElementById("button").style.display = "inline-block";
    this.style.display = "none";
    // játék utáni új játék
    document.getElementById("proba").innerHTML = "Hányadikra sikerül eltalálni?";
    document.getElementById("demo").innerHTML = "<br>";
    //document.getElementById("tipp").readOnly = false;
    document.getElementById("tipp").disabled = false;
})

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
            proba += 1;
            // tipp gomb eltűntetése és új gomb megjelenítése ~ 221104
            document.getElementById("newGame").style.display = "inline-block";
            document.getElementById("button").style.display = "none";
            //document.getElementById("tipp").readOnly = true;
            document.getElementById("tipp").disabled = true;
            document.getElementById("tipp").value = "";
            return true;
        }

    }
}

// gombnyomásra kiíratja hogy hanyadik próbálkozásra sikerült eltalálni a számot
document.getElementById("button").addEventListener("click", function() {

    const inputTipp = document.getElementById("tipp").value;

        if(szam(inputTipp) == false) {
            document.getElementById("proba").innerHTML = "Találgatások száma: " + proba;
        }
        else{
            document.getElementById("proba").innerHTML = "Találgatások száma: " + proba;
        }
    
});


document.getElementById("proba").innerHTML = "Hányadikra sikerül eltalálni?";
