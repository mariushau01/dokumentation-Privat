---
date: 2024-09-13
author: Marius Hau
---
 
# Dokumente
 
In einem **Lastenheft** formuliert der Kunde seine Probleme und Sichtweisen inklusiv Anforderungen an die Software. Weiters besteht die Möglichkeit, dass der Kunde bestehende Formulare, Berichte, Fehlerprotokolle an die Entwickler weiter reicht. Für einen guten Überblick sorgen die Kenntnisse von Schwachstellen und optimalfunktionierenden Bereichen von bestehenden Systemen.
 
![Lastenheft](/static/images/Lastenheft.png)[^1]
 
[^1]: **Peterjohann**, Horst. Lastenheft und Pflichtenheft. Unterscheidungen und Einsatz.
Url: <https://www.peterjohann-consulting.de/lastenheft-und-pflichtenheft/>, Datum: 23.Sep.2024
 
---
date: 2024-09-13
authors:
  - name: David Moser
    email: damoser@schueler.hakzell.at
tags:
  - requirementsanalysis
icon: project
order: 80000    
---
 
# Anforderungsanalyse
 
## Allgemeines
 
Bei der Softwareentwicklung müssen die Anforderungen des Kunden umgesetzt werden. Es muss versucht werden die Kundenwünsche zu verstehen.
 
!!! Note
Unter  einer **Anforderung** versteht man eine geforderte Leistung bzw. Eigenschaft eines Softwareproduktes.
!!!
 
Anforderungen können durch Brainstorming, Fragebögen, Gespräche, Marktforschung etc. ermittelt werden.
 
## Schritte
 
 - Ermitteln: Gespräche mit zukünftigen Anwendern führen - Papierdokumente in digitale Prozesse überführen.
 - Analysieren: Anforderungen Inhaltlich analysieren - aktives Zuhören
 - Spezifizieren: exakter aufbau der Daten - Modelle entwerfen (Klassendiagramme, ER-Diagramme); Sprachlich exakt (Sprache des Kunden)
 - Validieren: Prozess nochmals kontrollieren; eventuell schriftliche Wiederholung
 
Es müssen die organisatorischen Zuständigkeiten festgelegt werden. (Ansprechpartner definieren)
Der Workflow der Software muss den logischen Abläufen entsprechen. Es muss eine Balance zwischen Kosten und Anforderungen entstehen. Unterschiedliche Personen vertreten unterschiedliche Interessen und Personengruppen.
 
## Kategorisieren
 
Anforderungen können folgendermaßen kategorisiert werden:
 
 - funktionale Anforderungen (unterstützte Features)
 - technische Anforderungen (Hardware)
 - Anforderungen an die Benutzerschnittstelle (Touch-Eingabe, Maus, Tastatur)
 - Anforderungen an die Dienstqualität (Verfügbarkeit, Ausfallsystem)
 - Anforderungen an die Lieferbestandteile (Migration der Daten)
 - rechtliche und vertragliche Anforderungen
 
!!! Danger
**Wichtige Punkte** sind schriftlich festzuhalten. Abweichende Ergebnisse von einem zu erwartenden Normalzustand müssen festgehalten werden.
!!!
 
## Priorisieren
 
Die Anforderungen an das Softwareprojekt müssen priorisiert werden, da die Ressourcen begrenzt sind. Die Umsetzung muss sich daher auf die Kernelemente der Software begrenzen.
 
!!! Tip
**Alle Absprachen** sind verbindlich, schriftlich zu fixieren. Als Basis kann ein Pflichtenheft verwendet werden.
!!!
 
Bei den Formulierungen muss zwischen Pflicht, Wunsch, Absicht, Kommentar und Vorschlag unterschieden werden.
 
### Moscow-Methode
 
![Moscow-Methode](/static/images/moscow.jpeg)
 
 - M = Must have; Elemente, die für den Erfolg des Projektes unerlässlich sind - Bsp.: Homepage einer Website
 - S = Should have; Elemente, die im Laufe der Zeit implementiert werden - Bsp.: Die Implementierung einer Suchfunktion auf einer Website
 - C = Could have; Elemente, die Wünschenswert und noch implementiert werden können - Bsp.:
 - W = Won't have; Grenzumfang muss definiert werden
 
Die Kommunikation ist entscheidend um den Kunden langfristig zu binden. Man wird einen Mittelweg finden müssen und keinen Rechtstreit anvisieren.
 
### 2-Kretieren-Methode ()
 
1. Dringend und wichtig: Diese Aufgaben müssen sofort erledigt werden und können nicht delegiert werden
2. Nicht dringend, aber wichtig: Diese Aufgaben können später erledigt und eventuell delegiert werden
3. Dringend, aber unwichtig: Diese Aufgaben müssen sofort erledigt werden und können aber delegiert werden
4. Weder dringend noch wichtig: Diese Aufgaben werden nicht weiter betrachtet und unmittelbar eliminiert [^1]
 
### Kano-Modell
 
Das Kano-Modell kann zur Einteilung von Merkmalen verwendet werden. Der Zusammenhang aus Basisanforderungen, Leistungsanforderungen und Begeisterungsanforderungen lässt sich folgenden Diagramm entnehmen
 
![Kano-Modell](/static/images/kano-modell.png)
 
Im Kano-Diagramm wird der Erfüllungsgrad der (Kunden-)Anforderungen der Kundenzufriedenheit gegenübergestellt. Selbst wenn die Basisanforderungen (rote Linie) immer vollständig erfüllt sind, führt dies nicht zur Erhöhung der Kundenzufriedenheit. Anders die Leistungsanforderungen (blaue Linie): Werden diese im Produkt umgesetzt, so können sie zur Erhöhung der Kundenzufriedenheit beitragen. Allerdings führt die unvollständige Umsetzung dieser Anforderungen zur Unzufriedenheit beim Kunden. Die Begeisterungsanforderungen (grüne Linie) hingegen tragen unmittelbar zur Kundenzufriedenheit bei, selbst wenn sie nur unzureichend umgesetzt wurden.[^2]
 
[^2]: **Peterjohann**, Horst. Das Kano-Modell. Kundenwünsche ermitteln und einordnen.
Url: <https://www.peterjohann-consulting.de/kano-modell/>, Datum: 20.Sep.2024
 
[^1]: **Peterjohann**, Horst. Das Eisenhower-Prinzip. Einteilen von Aufgaben nach Dringlichkeit und Wichtigkeit.
Url: <https://www.peterjohann-consulting.de/eisenhower-prinzip/>, Datum: 20.Sep.2024
Das Kano-Modell - Peterjohann Consulting
Das Kano-Modell dient zur Klassifikation von Kundenwünschen, um so zu verdeutlichen, welche Eigenschaften ein Produkt haben sollte.
 