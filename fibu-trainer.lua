function MakeMainMenu ()
	local MainMenu = ""
	for j=1, ZahlMonate, 1 do
		i = StartMonat + j - 1
		MainMenu = MainMenu .. '<li id = "mM' .. j .. '">' ..  Monat[i].MMM .. '</li>\n'
	end
	if abschluss then
		MainMenu = MainMenu .. '<li id = "mAbschluss"> Abschluß </li>'
	end
	return MainMenu
end


function MakeSections ()
	local Sections = ''
	for j=1, ZahlMonate, 1 do
		i = StartMonat + j - 1
		Sections = Sections .. '<section id="m'.. j .. '" style="display: none"><h1>' .. Monat[i].MMM .. '</h1></section>\n'
	end
	return Sections
end

function MakeEventListener ()
	local EventListener = ''
	for j=1, ZahlMonate, 1 do
		EventListener = EventListener .. 'document.getElementById("mM' .. j .. '").addEventListener("click", mM' .. j .. ');\n'
	end
	if abschluss then
		EventListener = EventListener .. 'document.getElementById("mAbschluss").addEventListener("click", mAbschluss);\n'
	end
	return EventListener
end

function HideSections ()
	local Sections = ''
	for j=1, ZahlMonate, 1 do
		Sections = Sections .. 'document.getElementById("m' .. j .. '").style.display ="none";\n'
	end
	return Sections
end


function MakeJsFunction ()
	local funktionen = ''
	local m = 0
	for i=1, ZahlMonate, 1 do
		m = StartMonat + i - 1
		funktionen = funktionen .. 'function mM' .. i .. ' () {\n'
		funktionen = funktionen .. 'monat = ' .. i .. ';\n';
		funktionen = funktionen .. 'BelegIdx["belege"] = 1;\n'
		funktionen = funktionen .. 'BelegIdx["kasse"] = 1;\n'
		funktionen = funktionen .. 'BelegIdx["bank1"] = 1;\n'
		funktionen = funktionen .. 'BelegIdx["bank2"] = 1;\n'
		funktionen = funktionen .. 'AnzahlBelege["belege"] = AnzahlBelege = loesung.MONAT[monat-1].belege.length;\n'
		funktionen = funktionen .. 'AnzahlBelege["kasse"] = AnzahlBelege = loesung.MONAT[monat-1].kasse.geschaeftsfall.length;\n'
		funktionen = funktionen .. 'AnzahlBelege["bank1"] = AnzahlBelege = loesung.MONAT[monat-1].bank1.geschaeftsfall.length;\n'
		funktionen = funktionen .. 'AnzahlBelege["bank2"] = AnzahlBelege = loesung.MONAT[monat-1].bank2.geschaeftsfall.length;\n'
		funktionen = funktionen .. 'document.getElementById(MenuAktiv).classList.toggle("mAktiv");\n'
       		funktionen = funktionen .. 'document.getElementById("mM' .. i .. '").classList.toggle("mAktiv");\n'
       		funktionen = funktionen .. 'document.getElementById("ueberschrift").innerHTML = "' .. Monat[m].MMMM .. ' ' .. Jahr .. '";\n'
       		funktionen = funktionen .. 'document.getElementById("EgBelege").style.display ="block";\n'
		funktionen = funktionen .. 'BelegFrame.setAttribute("src",  "bilder/' .. Jahr .. '-m' .. i .. '-1.pdf");\n'
		funktionen = funktionen .. 'MenuAktiv = "mM' .. i ..'";\n'
		funktionen = funktionen .. 'mBelege();\n}\n\n'
	end
	return funktionen
end


