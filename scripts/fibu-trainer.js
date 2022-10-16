:(AufgabeInit "")
:(require "fibu-trainer")

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
let SollSumme = 0,
    HabenSumme = 0,
    index = 0,
    kr = false,
    MenuAktiv = "mStart",
    mMenuAktiv = "mmBelege",
    abschnitt = "belege",
    Jahr = 2021,
    ZahlMonate = 3,
    ErsterMonat = 5;


   var MaxPunkte = new Array ();
       MaxPunkte[0] = 19; 
       MaxPunkte[1] = new Array (); 
       MaxPunkte[2] = new Array (); 
       MaxPunkte[3] = new Array (); 
       MaxPunkte[1]["belege"] = 21; 
       MaxPunkte[1]["kasse"] = 7; 
       MaxPunkte[1]["bank1"] = 9; 
       MaxPunkte[1]["bank2"] = 3; 
       MaxPunkte[1]["summe"] = MaxPunkte[1]["belege"] + MaxPunkte[1]["kasse"] + MaxPunkte[1]["bank1"] + MaxPunkte[1]["bank2"];
       MaxPunkte[2]["belege"] = 14;
       MaxPunkte[2]["kasse"] = 6;
       MaxPunkte[2]["bank1"] = 18;
       MaxPunkte[2]["bank2"] = 7;
       MaxPunkte[2]["summe"] = MaxPunkte[2]["belege"] + MaxPunkte[2]["kasse"] + MaxPunkte[2]["bank1"] + MaxPunkte[2]["bank2"];
       MaxPunkte[3]["belege"] = 11;
       MaxPunkte[3]["kasse"] = 8;
       MaxPunkte[3]["bank1"] = 11;
       MaxPunkte[3]["bank2"] = 6;
       MaxPunkte[3]["summe"] = MaxPunkte[3]["belege"] + MaxPunkte[3]["kasse"] + MaxPunkte[3]["bank1"] + MaxPunkte[3]["bank2"];

       MaxSumme = MaxPunkte[0] + MaxPunkte[1]["summe"] + MaxPunkte[2]["summe"] + MaxPunkte[3]["summe"];


   var ErreichtePunkte = new Array ();
       ErreichtePunkte[0] = 0;

       ErreichteSumme = 0;

   var AnzahlZeilen = 10,
       AnzahlSpalten = 3;

   let BelegIdx = new Array (),
       AnzahlBelege = new Array ();


// **}


//================== Funktionen ========================================================================================= {**

function init () { // {**
	// Variable vorbelegen
	for (j=1; j<= ZahlMonate; j++) {
		ErreichtePunkte[j] = new Array ();
		ErreichtePunkte[j]["belege"] = 0;
		ErreichtePunkte[j]["kasse"] = 0;
		ErreichtePunkte[j]["bank1"] = 0;
		ErreichtePunkte[j]["bank2"] = 0;
	}
	// Kontenrahmen zeigen/nicht zeigen
	let kr = false;
	// Hauptmenü einrichten
	document.getElementById("mStart").addEventListener("click", mStart);
	document.getElementById("mFirma").addEventListener("click", mFirma);
	document.getElementById("mVortrag").addEventListener("click", mVortrag);
	// eventlistener für die einzelnen Monate
//	$(MakeEventListener "")
	document.getElementById("mErgebnis").addEventListener("click", mErgebnis);
	document.getElementById("mImpressum").addEventListener("click", mImpressum);
        document.getElementById("mHelp").addEventListener("click", KontenrahmenEinAus);
	// [x]-Button über dem Kontenrahmen
        document.getElementById("HideKr").addEventListener("click", KontenrahmenEinAus);
	//Buttons in den Formularen
	document.getElementById("VortraegeReset").addEventListener("click", VortraegeReset);
	document.getElementById("pruefen").addEventListener("click", Pruefen);
	document.getElementById("loeschen").addEventListener("click", Reset);
	document.getElementById("zurueck").addEventListener("click", zurueck);
	document.getElementById("weiter").addEventListener("click", weiter);
	// Untermenüs
        document.getElementById("mmBelege").addEventListener("click", mmBelege);
        document.getElementById("mmKasse").addEventListener("click", mmKasse);
        document.getElementById("mmBank1").addEventListener("click", mmBank1);
        document.getElementById("mmBank2").addEventListener("click", mmBank2);
	mMenuAktiv = "mmBelege";
	mStart();
       }
   // **}

   function zurueck() {// {**
       BelegIdx[abschnitt]--;
       if (BelegIdx[abschnitt] < 1) {
	       BelegIdx[abschnitt] = 1;
       }
       console.log("bilder/" + Jahr + "-m" + monat + "-" + abschnitt + "-" + BelegIdx[abschnitt] + ".pdf");
       BelegFrame.setAttribute("src", "bilder/" + Jahr + "-m" + monat + "-" + abschnitt + "-" + BelegIdx[abschnitt] + ".pdf");
       Reset();
   }
// **}
    
    function weiter() {// {**
       BelegIdx[abschnitt]++;
       if (BelegIdx[abschnitt] > AnzahlBelege[abschnitt]) {
	       BelegIdx[abschnitt] = AnzahlBelege[abschnitt];
       }
       console.log("bilder/" + Jahr + "-m" + monat + "-" + abschnitt + "-" + BelegIdx[abschnitt] + ".pdf");
       BelegFrame.setAttribute("src",  "bilder/" + Jahr + "-m" + monat + "-" + abschnitt + "-" + BelegIdx[abschnitt] + ".pdf");
       Reset();
    }
// **}
   
function ResetAll () { // {**

       ErreichtePunkte[0] = 0;
       ErreichtePunkte[1]["belege"] = 0; 
       ErreichtePunkte[1]["kasse"] = 0; 
       ErreichtePunkte[1]["bank1"] = 0; 
       ErreichtePunkte[1]["bank2"] = 0; 
       ErreichtePunkte[1]["summe"] = 0; 
       ErreichtePunkte[2]["belege"] = 0; 
       ErreichtePunkte[2]["kasse"] = 0; 
       ErreichtePunkte[2]["bank1"] = 0; 
       ErreichtePunkte[2]["bank2"] = 0; 
       ErreichtePunkte[2]["summe"] = 0; 
       ErreichtePunkte[3]["belege"] = 0; 
       ErreichtePunkte[3]["kasse"] = 0; 
       ErreichtePunkte[3]["bank1"] = 0; 
       ErreichtePunkte[3]["bank2"] = 0; 
       ErreichtePunkte[3]["summe"] = 0; 
       VortraegeReset();
       BelegeReset();
       FinanzReset();
   }
// **}

function KontenrahmenEinAus () {// {**
   if (kr) {
      document.getElementById("kontenrahmen").style.display="none";
      kr = false;
      }
   else {
      document.getElementById("kontenrahmen").style.display="block";
      kr = true;
      }
      document.getElementById("mHelp").classList.toggle("mAktiv");
   }// **}

function VortraegeReset() {// {**
	let fname = "fVortraege",
	    zeilen = 19;
     
       for (z = 1; z <= zeilen; z++) {
	       document.getElementById('VortraegeZeile' + z).classList.remove('AuswertungFalsch');
	       document.getElementById('VortraegeZeile' + z).classList.remove('AuswertungRichtig');
	       document.getElementById('VortraegeZeile' + z).classList.add('AuswertungStart');
       }
       document.forms[fname].reset();
       ErreichteSumme = ErreichteSumme - ErreichtePunkte[0];
       ErreichtePunkte[0] = 0;
}
// **}

function BelegeReset() {// {**

   let zeilen = 10,
       spalten = 3,
       startwert = 5,
       erster = 4,
       fname ="fBelege";

       document.getElementById("BelegeZeile").classList.remove('AuswertungRichtig');
       document.getElementById("BelegeZeile").classList.remove('AuswertungFalsch');
       document.getElementById("BelegeZeile").classList.add('AuswertungStart');
       // Auswertung der Buchungen löschen	
     for (z = 0; z <= zeilen; z++) {
       document.getElementById("BelegeZeile" + z).classList.remove('AuswertungRichtig');
       document.getElementById("BelegeZeile" + z).classList.remove('AuswertungFalsch');
       document.getElementById("BelegeZeile" + z).classList.add('AuswertungStart');
       }
       document.forms[fname].reset();
   }
// **}

function FinanzReset() {// {**

   let zeilen = 10,
       spalten = 3,
       startwert = 2,
       erster = 1,
       fname ="fFinanz";

   max = zeilen * spalten + startwert;
	for (z = 0; z<= zeilen; z++) {
		document.getElementById("FinanzenZeile" + z).classList.remove('AuswertungRichtig');
		document.getElementById("FinanzenZeile" + z).classList.remove('AuswertungFalsch');
		document.getElementById("FinanzenZeile" + z).classList.add('AuswertungStart');
	}

        document.forms[fname].reset();
     }// **}

function Reset() {//{**

	if (abschnitt == "belege") {
		BelegeReset();
	} else {
		FinanzReset();
	}
}
// **}

//================== Hauptmenü ======================================== {**
function mStart (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mStart").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="block";
       document.getElementById("start").style.display ="block";
       document.getElementById("firma").style.display ="none";
       document.getElementById("bilanz").style.display ="none";
       document.getElementById("belege").style.display ="none";
       document.getElementById("BelegFrame").style.display ="none";
       document.getElementById("vortraege").style.display ="none";
       document.getElementById("ergebnis").style.display ="none";
       document.getElementById("impressum").style.display ="none";
       MenuAktiv = "mStart";
       ResetAll();
       }
// **}

    function mFirma (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mFirma").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="block";
       document.getElementById("start").style.display ="none";
       document.getElementById("firma").style.display ="block";
       document.getElementById("bilanz").style.display ="none";
       document.getElementById("belege").style.display ="none";
       document.getElementById("BelegFrame").style.display ="none";
       document.getElementById("vortraege").style.display ="none";
       document.getElementById("ergebnis").style.display ="none";
       document.getElementById("impressum").style.display ="none";
       MenuAktiv = "mFirma";
       }
// **}

    function mVortrag (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mVortrag").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="none";
       document.getElementById("start").style.display ="none";
       document.getElementById("firma").style.display ="none";
       document.getElementById("bilanz").style.display ="block";
       document.getElementById("belege").style.display ="none";
       document.getElementById("BelegFrame").style.display ="none";
       document.getElementById("vortraege").style.display ="block";
       document.getElementById("ergebnis").style.display ="none";
       document.getElementById("impressum").style.display ="none";
       MenuAktiv = "mVortrag";
       }
// **}

    function mBelege (){// {**
       document.getElementById("titelbild").style.display ="none";
       document.getElementById("start").style.display ="none";
       document.getElementById("firma").style.display ="none";
       document.getElementById("bilanz").style.display ="none";
       document.getElementById("belege").style.display ="block";
       document.getElementById("BelegFrame").style.display ="block";
       document.getElementById("vortraege").style.display ="none";
       document.getElementById("ergebnis").style.display ="none";
       document.getElementById("impressum").style.display ="none";
       }
// **}

    function mImpressum (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mImpressum").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="block";
       document.getElementById("start").style.display ="none";
       document.getElementById("firma").style.display ="none";
       document.getElementById("bilanz").style.display ="none";
       document.getElementById("belege").style.display ="none";
       document.getElementById("BelegFrame").style.display ="none";
       document.getElementById("vortraege").style.display ="none";
       document.getElementById("ergebnis").style.display ="none";
       document.getElementById("impressum").style.display ="block";
       MenuAktiv = "mImpressum";
       }
// **}

$(MakeJsFunction "")

    function mErgebnis (){// {**
       document.getElementById(MenuAktiv).classList.toggle("mAktiv");
       document.getElementById("mErgebnis").classList.toggle("mAktiv");
       document.getElementById("titelbild").style.display ="none";
       // document.getElementById("start").style.display ="none";
       // document.getElementById("firma").style.display ="none";
       // document.getElementById("bilanz").style.display ="none";
       document.getElementById("belege").style.display ="none";
       // document.getElementById("BelegFrame").style.display ="block";
       document.getElementById("vortraege").style.display ="none";
       for (j=1; j<= ZahlMonate; j++) {
	       ErreichtePunkte[j]["summe"] = ErreichtePunkte[j]["belege"] + ErreichtePunkte[j]["kasse"] + ErreichtePunkte[j]["bank1"] + ErreichtePunkte[j]["bank2"];
	       ErreichteSumme = ErreichteSumme + ErreichtePunkte[j]["summe"];
       }
       ErreichteSumme = ErreichteSumme + ErreichtePunkte[0];
       document.getElementById('ErgebnisGesamt').innerHTML = "Sie haben " + ErreichteSumme + " Punkte von " + MaxSumme  + " Punkten erreicht.";
       // Tabellenkopf
       ErgebnisTabelle = '<tr><th>Monat</th><th>Belege</th><th>Kasse</th><th>Bank1</th><th>Bank2</th><th>Summe</th></tr>';
       // Ergebnis Vorträge
       ErgebnisTabelle = ErgebnisTabelle + '<tr><td>Vorträge</td><td></td><td></td><td></td><td></td><td>' + ErreichtePunkte[0] + '</td></tr>';
       // Ergebnis Monate
       for (j=1; j<= ZahlMonate; j++) {
	       ErgebnisTabelle = ErgebnisTabelle + '<tr><td>' + Monat[ErsterMonat+j-1]["MMMM"] + '</td><td>' + ErreichtePunkte[j]["belege"] + '</td><td>' +
		       ErreichtePunkte[j]["kasse"] + '</td><td>' + ErreichtePunkte[j]["bank1"] + '</td><td>' + ErreichtePunkte[j]["bank2"] +
		       '</td><td>' + ErreichtePunkte[j]["summe"] + '</td></tr>';
       }
       document.getElementById("tabErgebnis").innerHTML = ErgebnisTabelle;
       document.getElementById("ergebnis").style.display ="block";
       MenuAktiv = "mErgebnis";
       }
// **}
// **} Hauptmenü

//================== Untermenü ======================================== {**

  function mmBelege() {// {**
     BelegeReset();
     document.getElementById("ergebnis").style.display ="none";
     document.getElementById("EgBelege").style.display ="block";
     document.getElementById("EgFinanz").style.display ="none";
     document.getElementById(mMenuAktiv).classList.toggle("mmAktiv");
     document.getElementById("mmBelege").classList.toggle("mmAktiv");
     mMenuAktiv="mmBelege";
     abschnitt = "belege";
     BelegFrame.setAttribute("src", "bilder/" + Jahr + "-m" + monat + "-" + BelegIdx[abschnitt] + ".pdf");
     }
// **}

  function mmKasse() {// {**
     FinanzReset();
     document.getElementById("ergebnis").style.display ="none";
     document.getElementById("EgBelege").style.display ="none";
     document.getElementById("EgFinanz").style.display ="block";
     document.getElementById(mMenuAktiv).classList.toggle("mmAktiv");
     document.getElementById("mmKasse").classList.toggle("mmAktiv");
     mMenuAktiv="mmKasse";
     abschnitt = "kasse";
     FinanzKonto = 'kasse';
     BelegFrame.setAttribute('src', "bilder/" + Jahr + "-m" + monat + "-kasse-" + BelegIdx[abschnitt] + ".pdf");
     }
// **}

  function mmBank1() {// {**
     FinanzReset();
     document.getElementById("ergebnis").style.display ="none";
     document.getElementById("EgBelege").style.display ="none";
     document.getElementById("EgFinanz").style.display ="block";
     document.getElementById(mMenuAktiv).classList.toggle("mmAktiv");
     document.getElementById("mmBank1").classList.toggle("mmAktiv");
     mMenuAktiv="mmBank1";
     abschnitt = "bank1";
     FinanzKonto = 'bank1';
     BelegFrame.setAttribute('src', "bilder/" + Jahr + "-m" + monat + "-bank1-" + BelegIdx[abschnitt] + ".pdf");
     }
// **}

  function mmBank2() {// {**
     FinanzReset();
     document.getElementById("ergebnis").style.display ="none";
     document.getElementById("EgBelege").style.display ="none";
     document.getElementById("EgFinanz").style.display ="block";
     document.getElementById(mMenuAktiv).classList.toggle("mmAktiv");
     document.getElementById("mmBank2").classList.toggle("mmAktiv");
     mMenuAktiv="mmBank2";
     abschnitt = "bank2";
     FinanzKonto = 'bank2';
     BelegFrame.setAttribute('src', "bilder/" + Jahr + "-m" + monat + "-bank2-" + BelegIdx[abschnitt] + ".pdf");
     }
// **}

// **} Untermenü

  function makeNumber(n) {// {**
     let s = "" + n;
     let i = s.indexOf(",");
     if (i != -1) {
       g = s.substring(0,i)
       d = s.substring(i+1,s.length);
       if (d.length > 2) {
          d = d.substr(0,2);
          }
       g = g.replace(/\./g, "");
       s = g + "." + d;
       }
     return s*1;
     }
// **}

  function AddiereVortraege(formular, zeilen) {// {**

     var opts = { minimumFractionDigits: 2 },
	 spalten = 3,	  
         start = 0;

     summe = 0;
     feld = 0;
     max=zeilen * spalten
     for (z = start; z < max; z=z + spalten ) {
	     if (document.forms[formular].elements[z].value != "") {
		     feld = makeNumber(document.forms[formular].elements[z+2].value);
		     summe = summe + feld;
		     document.forms[formular].elements[z+2].value = feld.toLocaleString("de-DE", opts);
		     document.forms[formular].SummeVortraege.value = summe.toLocaleString("de-DE", opts);
	     }
     }
  }
// **}

  function AddiereBeleg(formular, zeilen, spalten, start) {// {**
     var opts = { minimumFractionDigits: 2 };
     
    
     sSumme = 0;
     hSumme = 0;
     sFeld = 0;
     hFeld = 0;
     idx = zeilen * spalten + start-1;
     for (z = start; z < idx; z = z + spalten) {
        if (document.forms[formular].elements[z].value !== "") {
           if (document.forms[formular].elements[z+1].value !== "") {
              sFeld = makeNumber(document.forms[formular].elements[z+1].value);
              sSumme = sSumme + sFeld;
              document.forms[formular].elements[z+1].value = sFeld.toLocaleString("de-DE", opts);
              document.forms[formular].SollSumme.value = sSumme.toLocaleString("de-DE", opts);
              }
           if (document.forms[formular].elements[z+2].value != "") {
              hFeld = makeNumber(document.forms[formular].elements[z+2].value);
              hSumme = hSumme + hFeld;
              document.forms[formular].elements[z+2].value = hFeld.toLocaleString("de-DE", opts);
              document.forms[formular].HabenSumme.value = hSumme.toLocaleString("de-DE", opts);
              }
           }
        }
     }
// **}

  function TesteVortraege(formular, zeilen) {// {**

     let spalten = 3;

     ErreichtePunkte[0] = 0;
     for (z = 1; z <= zeilen; z++) {
	     document.getElementById('VortraegeZeile' + z).classList.remove('AuswertungStart');
	     document.getElementById('VortraegeZeile' + z).classList.add('AuswertungFalsch');
	     j = (z-1) * spalten;
	     if (document.forms[formular].elements[j].value != 0) {
		     for (zz = 0; zz < zeilen; zz++) {
			     if (document.forms[formular].elements[j].value == loesung.VORTRAG.buchung[zz].soll) {
				     if (document.forms[formular].elements[j+1].value == loesung.VORTRAG.buchung[zz].haben) {
					     if (makeNumber(document.forms[formular].elements[j+2].value) == loesung.VORTRAG.buchung[zz].betrag) {
						     document.getElementById('VortraegeZeile' + z).classList.remove('AuswertungFalsch');
						     document.getElementById('VortraegeZeile' + z).classList.add('AuswertungRichtig');
						     ErreichtePunkte[0]++;
					     }
				     }
			     }
		     }
	     }
     }
  }
// **}

function Pruefen () {// {**

	alert("abschnitt = " + abschnitt)

	if (abschnitt == "belege") {
		TesteEingabe('fBelege');
	} else {
		TesteFinanz('fFinanz');
	}
}
// **}

function TesteEingabe(n) {// {**
    b = BelegIdx[abschnitt]-1;
    r = true;

    if (loesung.MONAT[monat-1].belege[b].buchen) { //Buchen ist erforderlich
	
	if (document.getElementById('buchen_e').checked) { // {**
	    document.getElementById("BelegeZeile").classList.remove('AuswertungStart');
	    document.getElementById("BelegeZeile").classList.remove('AuswertungFalsch');
	    document.getElementById("BelegeZeile").classList.add('AuswertungRichtig');
	} else {
	    document.getElementById("BelegeZeile").classList.remove('AuswertungStart');
	    document.getElementById("BelegeZeile").classList.remove('AuswertungRichtung');
	    document.getElementById("BelegeZeile").classList.add('AuswertungFalsch');
	    r = false;
	} // **}

	if (document.forms[n].elements[3].value == loesung.MONAT[monat-1].belege[b].umsatzsteuer)  { // {**
	    document.getElementById("BelegeZeile0").classList.remove('AuswertungStart');
	    document.getElementById("BelegeZeile0").classList.remove('AuswertungFalsch');
	    document.getElementById("BelegeZeile0").classList.add('AuswertungRichtig');
	} else {
	    document.getElementById("BelegeZeile0").classList.remove('AuswertungStart');
	    document.getElementById("BelegeZeile0").classList.remove('AuswertungRichtig');
	    document.getElementById("BelegeZeile0").classList.add('AuswertungFalsch');
	    r = false;
	} // **}

	for (z = 1; z<= AnzahlZeilen; z++) { // {**
	    let e = (z-1)*AnzahlSpalten + 4; // ElementNr berechnen
	    //Prüfen auf leere Zelle
	    if (document.forms[n].elements[e].value != 0) {
		document.forms[n].elements[e].classList.add('falsch');
		document.forms[n].elements[e+1].classList.add('falsch');
		document.forms[n].elements[e+2].classList.add('falsch');

		for (let i in loesung.MONAT[monat-1].belege[b].buchung) { // {**
		    if (document.forms[n].elements[e].value == loesung.MONAT[monat-1].belege[b].buchung[i].konto) { // {**
			document.forms[n].elements[e].classList.remove('falsch');
			document.forms[n].elements[e].classList.add('richtig');

			if (loesung.MONAT[monat-1].belege[b].buchung[i].seite == "S") { // {**
			    
			    if (document.forms[n].elements[e+2].value == "") { // {**
				document.forms[n].elements[e+2].classList.remove('falsch');
				document.forms[n].elements[e+2].classList.add('richtig');
			    } // **}

			    if (makeNumber(document.forms[n].elements[e+1].value) == loesung.MONAT[monat-1].belege[b].buchung[i].betrag) { // {**
				document.forms[n].elements[e+1].classList.remove('falsch');
				document.forms[n].elements[e+1].classList.add('richtig');
			    } else {
				r = false;
			    } // **}

			} else { // Seite = "Haben"

			    if (document.forms[n].elements[e+1].value == "") { // {**
				document.forms[n].elements[e+1].classList.remove('falsch');
				document.forms[n].elements[e+1].classList.add('richtig');
			    } // **}

			    if (makeNumber(document.forms[n].elements[e+2].value) == loesung.MONAT[monat-1].belege[b].buchung[i].betrag) { // {**
				document.forms[n].elements[e+2].classList.remove('falsch');
				document.forms[n].elements[e+2].classList.add('richtig');
			    } else {
				r = false;
			    } // **}

			} // **}

		    } // **}

		} // for i in **}
	    }
	} // for z=1 **}

    } else { // Buchen nicht erforderlich
	if (document.getElementById('buchen_ne').checked) { // {**
	    document.getElementById("BelegeZeile").classList.remove('AuswertungStart');
	    document.getElementById("BelegeZeile").classList.remove('AuswertungFalsch');
	    document.getElementById("BelegeZeile").classList.add('AuswertungRichtig');
	} else {
	    document.getElementById("BelegeZeile").classList.remove('AuswertungStart');
	    document.getElementById("BelegeZeile").classList.remove('AuswertungRichtung');
	    document.getElementById("BelegeZeile").classList.add('AuswertungFalsch');
	    r = false;
	} // **}

    }
    if (r) {
	ErreichtePunkte[monat]["belege"]++;
    }

}
// end function **}

  function TesteFinanz(n, a) {// {**

     b = BelegIdx[a]-1;

     max = AnzahlZeilen * AnzahlSpalten;
    
     if (document.forms[n].SollSumme.value != document.forms[n].HabenSumme.value) {
        alert("Soll <> Haben");
        return;
        }
     switch (f) {
        case "kasse":
           TesteKasse(n, b, max);
           break;
        case "bank1":
           TesteBank1(n, b, max);
           break;
        case "bank2":    
           TesteBank2(n, b, max);
           break;
        }
   }
// **}

   function TesteKasse(formular, bIndex, max) { // {**

     r = false;

     if (document.forms[formular].elements[0].value == loesung.MONAT[monat-1].kasse.geschaeftsfall[bIndex].ust)  {
        document.forms[formular].elements[1].classList.remove('AuswertungStart');
        document.forms[formular].elements[1].classList.remove('AuswertungFalsch');
        document.forms[formular].elements[1].classList.add('AuswertungRichtig');
        r = true;
        }
     else {
        document.forms[formular].elements[1].classList.remove('AuswertungStart');
        document.forms[formular].elements[1].classList.remove('AuswertungRichtig');
        document.forms[formular].elements[1].classList.add('AuswertungFalsch');
        }
     
     for (j = 2; j < max; j=j+AnzahlSpalten) {
        if (document.forms[formular].elements[j].value != 0) {
           document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
           document.forms[formular].elements[j+3].classList.remove('AuswertungRichtig');
           document.forms[formular].elements[j+3].classList.add('AuswertungFalsch');
           r = !r;
           for (z in loesung.MONAT[monat-1].kasse.geschaeftsfall[b].buchung) {
              if (document.forms[formular].elements[j].value == loesung.MONAT[monat-1].kasse.geschaeftsfall[b].buchung[z].konto) {
                 if (loesung.MONAT[monat-1].kasse.geschaeftsfall[b].buchung[z].seite == "S") {
                    if (makeNumber(document.forms[formular].elements[j+1].value) == loesung.MONAT[monat-1].kasse.geschaeftsfall[b].buchung[z].betrag) {
                       document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
                       document.forms[formular].elements[j+3].classList.remove('AuswertungFalsch');
                       document.forms[formular].elements[j+3].classList.add('AuswertungRichtig');
                       r = !r;
                       }
                    }
                 if (loesung.MONAT[monat-1].kasse.geschaeftsfall[b].buchung[z].seite == "H") {
                    if (makeNumber(document.forms[formular].elements[j+2].value) == loesung.MONAT[monat-1].kasse.geschaeftsfall[b].buchung[z].betrag) {
                       document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
                       document.forms[formular].elements[j+3].classList.remove('AuswertungFalsch');
                       document.forms[formular].elements[j+3].classList.add('AuswertungRichtig');
                       r = !r;
                       }
                    }
                 }
              }
           }
        }
        if (r) {
           ErreichtePunkte['monat' + monat]["kasse"]++;
           }  
     }// **}

   function TesteBank1(formular, bIndex, max) { /* {** */

     r = false;

     if (document.forms[formular].elements[0].value == loesung.MONAT[monat-1].bank1.geschaeftsfall[bIndex].ust)  {
        document.forms[formular].elements[1].classList.remove('AuswertungStart');
        document.forms[formular].elements[1].classList.remove('AuswertungFalsch');
        document.forms[formular].elements[1].classList.add('AuswertungRichtig');
        r = true;
        }
     else {
        document.forms[formular].elements[1].classList.remove('AuswertungStart');
        document.forms[formular].elements[1].classList.remove('AuswertungRichtig');
        document.forms[formular].elements[1].classList.add('AuswertungFalsch');
        }
     
     for (j = 2; j < max; j=j+AnzahlSpalten) {
        if (document.forms[formular].elements[j].value != 0) {
           document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
           document.forms[formular].elements[j+3].classList.remove('AuswertungRichtig');
           document.forms[formular].elements[j+3].classList.add('AuswertungFalsch');
           r = !r;
           for (z in loesung.MONAT[monat-1].bank1.geschaeftsfall[b].buchung) {
              if (document.forms[formular].elements[j].value == loesung.MONAT[monat-1].bank1.geschaeftsfall[b].buchung[z].konto) {
                 if (loesung.MONAT[monat-1].bank1.geschaeftsfall[b].buchung[z].seite == "S") {
                    if (makeNumber(document.forms[formular].elements[j+1].value) == loesung.MONAT[monat-1].bank1.geschaeftsfall[b].buchung[z].betrag) {
                       document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
                       document.forms[formular].elements[j+3].classList.remove('AuswertungFalsch');
                       document.forms[formular].elements[j+3].classList.add('AuswertungRichtig');
                       r = !r;
                       }
                    }
                 if (loesung.MONAT[monat-1].bank1.geschaeftsfall[b].buchung[z].seite == "H") {
                    if (makeNumber(document.forms[formular].elements[j+2].value) == loesung.MONAT[monat-1].bank1.geschaeftsfall[b].buchung[z].betrag) {
                       document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
                       document.forms[formular].elements[j+3].classList.remove('AuswertungFalsch');
                       document.forms[formular].elements[j+3].classList.add('AuswertungRichtig');
                       r = !r;
                       }
                    }
                 }
              }
           }
        }
        if (r) {
           ErreichtePunkte['monat' + monat]["bank1"]++;
           }  
     }/***}*/

   function TesteBank2(formular, bIndex, max) { /* {** */

     r= false;

     if (document.forms[formular].elements[0].value == loesung.MONAT[monat-1].bank2.geschaeftsfall[bIndex].ust)  {
        document.forms[formular].elements[1].classList.remove('AuswertungStart');
        document.forms[formular].elements[1].classList.remove('AuswertungFalsch');
        document.forms[formular].elements[1].classList.add('AuswertungRichtig');
        r = true;
        }
     else {
        document.forms[formular].elements[1].classList.remove('AuswertungStart');
        document.forms[formular].elements[1].classList.remove('AuswertungRichtig');
        document.forms[formular].elements[1].classList.add('AuswertungFalsch');
        }
     
     for (j = 2; j < max; j=j+AnzahlSpalten) {
        if (document.forms[formular].elements[j].value != 0) {
           document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
           document.forms[formular].elements[j+3].classList.remove('AuswertungRichtig');
           document.forms[formular].elements[j+3].classList.add('AuswertungFalsch');
           r = !r;
           for (z in loesung.MONAT[monat-1].bank2.geschaeftsfall[b].buchung) {
              if (document.forms[formular].elements[j].value == loesung.MONAT[monat-1].bank2.geschaeftsfall[b].buchung[z].konto) {
                 if (loesung.MONAT[monat-1].bank2.geschaeftsfall[b].buchung[z].seite == "S") {
                    if (makeNumber(document.forms[formular].elements[j+1].value) == loesung.MONAT[monat-1].bank2.geschaeftsfall[b].buchung[z].betrag) {
                       document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
                       document.forms[formular].elements[j+3].classList.remove('AuswertungFalsch');
                       document.forms[formular].elements[j+3].classList.add('AuswertungRichtig');
                       r = !r;
                       }
                    }
                 if (loesung.MONAT[monat-1].bank2.geschaeftsfall[b].buchung[z].seite == "H") {
                    if (makeNumber(document.forms[formular].elements[j+2].value) == loesung.MONAT[monat-1].bank2.geschaeftsfall[b].buchung[z].betrag) {
                       document.forms[formular].elements[j+3].classList.remove('AuswertungStart');
                       document.forms[formular].elements[j+3].classList.remove('AuswertungFalsch');
                       document.forms[formular].elements[j+3].classList.add('AuswertungRichtig');
                       r = !r;
                       }
                    }
                 }
              }
           }
        }
        if (r) {
           ErreichtePunkte['monat' + monat]["bank2"]++;
           }  
     }/***}*/


// **}

document.addEventListener('DOMContentLoaded', init)
