# Telefonbuchaufgabe
Entwicklung eines durchsuchbaren Telefonbuchs mit Hilfe von JavaScript und React

## Details zur Aufgabe:
* Suche schon während des Tippens
* Groß- und Kleinschreibung sind irrelevant
* Ansprechendes UI
* Responsive UI

## Online Ausprobieren!
Die Demo wird online über GitHub Pages gehostet - einfach [hier](https://vinccenttt.github.io/phone-book/) klicken.

## Details

# Wie funktioniert die Suche? 
Der eingegebene Suchtext wird anhand von Bindestrichen und Leerzeichen in einzelne Wörter aufgeteilt. Ein Name wird gematcht, wenn jedes Suchwort als Präfix im Namen vorhanden ist. Dabei werden Vorname, Nachname oder Doppelnamen getrennt betrachtet.

**Beispiel**\
Suche nach Peter-Hans Fischer:\
Suchbegriff mit Match: Pet, P Hans, Fischer, Peter-Hans-Fischer, hAnS, ...\
Suchbegriff ohne Match: eter, peterhans, max

Weiteres: Der Algorithmus iteriert einfach durch den kompletten Datensatz durch. Dies ist notwendig, da die Daten unsortiert vorliegen. Weiterhin findet keine Priorisierung / Ranking der Matches statt.

# Styling
Für das Styling habe ich Tailwind CSS benutzt, da mir das am vertrautesten ist - hoffe das passt.
