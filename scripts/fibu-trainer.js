// Konstanten ========================================================================================= {**
//
var	Tag = [];
	Tag[1] = [];
	Tag[1]["dd"] = "Montag";
	Tag[1]["d"] = "Mo";
	Tag[2] = [];
	Tag[2]["dd"] = "Dienstag";
	Tag[2]["d"] = "Di";
	Tag[3] = [];
	Tag[3]["dd"] = "Mittwoch";
	Tag[3]["d"] = "Mi";
	Tag[4] = [];
	Tag[4]["dd"] = "Donnerstag";
	Tag[4]["d"] = "Do";
	Tag[5] = [];
	Tag[5]["dd"] = "Freitag";
	Tag[5]["d"] = "Fr";
	Tag[6] = [];
	Tag[6]["dd"] = "Samstag";
	Tag[6]["d"] = "Sa";
	Tag[7] = [];
	Tag[7]["dd"] = "Sonntag";
	Tag[7]["d"] = "So";

	Monat = [];

	Monat[1] = [];
	Monat[1]["MMMM"] = "Januar";
	Monat[1]["MMM"] = "Jan";
	Monat[1]["MM"] = "01";
	Monat[1]["Q"] = "I";
	
	Monat[2] = [];
	Monat[2]["MMMM"] = "Februar";
	Monat[2]["MMM"] = "Feb";
	Monat[2]["MM"] = "02";
	Monat[2]["Q"] = "I";
	
	Monat[3] = [];
	Monat[3]["MMMM"] = "März";
	Monat[3]["MMM"] = "Mrz";
	Monat[3]["MM"] = "03";
	Monat[3]["Q"] = "I";
	
	Monat[4] = [];
	Monat[4]["MMMM"] = "April";
	Monat[4]["MMM"] = "Apr";
	Monat[4]["MM"] = "04";
	Monat[4]["Q"] = "II";
	
	Monat[5] = [];
	Monat[5]["MMMM"] = "Mai";
	Monat[5]["MMM"] = "Mai";
	Monat[5]["MM"] = "05";
	Monat[5]["Q"] = "II";
	
	Monat[6] = [];
	Monat[6]["MMMM"] = "Juni";
	Monat[6]["MMM"] = "Jun";
	Monat[6]["MM"] = "06";
	Monat[6]["Q"] = "II";
	
	Monat[7] = [];
	Monat[7]["MMMM"] = "Juli";
	Monat[7]["MMM"] = "Jul";
	Monat[7]["MM"] = "07";
	Monat[7]["Q"] = "III";
	
	Monat[8] = [];
	Monat[8]["MMMM"] = "August";
	Monat[8]["MMM"] = "Aug";
	Monat[8]["MM"] = "08";
	Monat[8]["Q"] = "III";
	
	Monat[9] = [];
	Monat[9]["MMMM"] = "September";
	Monat[9]["MMM"] = "Sep";
	Monat[9]["MM"] = "09";
	Monat[9]["Q"] = "III";
	
	Monat[10] = [];
	Monat[10]["MMMM"] = "Oktober";
	Monat[10]["MMM"] = "Okt";
	Monat[10]["MM"] = "10";
	Monat[10]["Q"] = "IV";
	
	Monat[11] = [];
	Monat[11]["MMMM"] = "November";
	Monat[11]["MMM"] = "Nov";
	Monat[11]["MM"] = "11";
	Monat[11]["Q"] = "IV";
	
	Monat[12] = [];
	Monat[12]["MMMM"] = "Dezember";
	Monat[12]["MMM"] = "Dev";
	Monat[12]["MM"] = "12";
	Monat[12]["Q"] = "IV";
	

// **}


//================== Variablen ========================================================================================== {**
//
   let MenuAktiv = "mStart",
       kr = false;


// **}


//================== Funktionen ========================================================================================= {**

function init () { // {**
	// Hauptmenü einrichten
	document.getElementById("mStart").addEventListener("click", mStart);
	document.getElementById("mImpressum").addEventListener("click", mImpressum);
	document.getElementById("mListe").addEventListener("click", mListe);
//        document.getElementById("mHelp").addEventListener("click", KontenrahmenEinAus);
	// [x]-Button über dem Kontenrahmen
//        document.getElementById("HideKr").addEventListener("click", KontenrahmenEinAus);
	// eventlistener für die einzelnen Monate
//	document.getElementById("mErgebnis").addEventListener("click", mErgebnis);
        // MenuAktiv = "mStart";
    }
// **}

//================== Hauptmenü ======================================== {**
function mStart (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mStart").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="block";
       document.getElementById("start").style.display ="block";
       document.getElementById("impressum").style.display ="none";
       document.getElementById("liste").style.display ="none";
       MenuAktiv = "mStart";
//       ResetAll();
       }
// **}

    function mImpressum (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mImpressum").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="block";
       document.getElementById("start").style.display ="none";
       document.getElementById("impressum").style.display ="block";
       document.getElementById("liste").style.display ="none";
       MenuAktiv = "mImpressum";
       }
// **}

    function mListe (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mListe").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="block";
       document.getElementById("start").style.display ="none";
       document.getElementById("impressum").style.display ="none";
       document.getElementById("liste").style.display ="block";
       MenuAktiv = "mListe";
       }
// **}
// **} Hauptmenü

document.addEventListener('DOMContentLoaded', init)
