---
date: 2023-12-11
author: Marius Hau
---

# Projekt mit XML und C#

## Elfmeterschiessen zweier Mannschaften

In meiner Applikation wird der Benutzer zwei Teamnamen eingeben (die gegeneinander Elfmeterschiessen), in welcher Liga die Teams spielen und das Datum an dem sie gegeneinander antreten. Es werden jeweils 5 Spieler schiessen. Der Benutzer entscheidet ob der Torwart den Ball hält oder der Spieler trifft.
Im Hintergrund wird gespeichert wie viele Spieler von 5 Schüssen getroffen haben. Das Team, bei dem mehr Spieler getroffen haben, gewinnt. Sobald beide Teams gleich viele Schüsse treffen geht es unentschieden aus.

## SMART-Ziele für das Fußballsimulation-Projekt

### Spezifisch:

- **Ziel:** Ich möchte ein Fußballsimulationsspiel in C# erstellen.
- **Warum:** Das hilft mir, die Programmierung in C# mit XML zu verstehen.

### Messbar:

- **Ziel:** Mein Programm soll Teams erstellen, Elfmeterschießen simulieren, Ergebnisse anzeigen, Teams filtern und Ergebnisse in einer XML-Datei speichern können.
- **Warum:** So kann ich sehen, ob mein Programm die erwarteten Funktionen meines Lehrers erfüllt.

### Erreichbar (Achievable):

- **Ziel:** Ich möchte das Projekt in etwa 5 Tagen abschließen, mit jedem Tag für einen bestimmten Teil des Projekts.
- **Warum:** Das hilft mir, das Projekt in einem realistischen Zeitrahmen abzuschließen.

### Relevant:

- **Ziel:** Mein Projekt soll grundlegende Programmierkonzepte wie Klassen, Objekte, Benutzereingabe und Dateimanagement in C# zeigen.
- **Warum:** Das stellt sicher, dass das Projekt erfolgreich wird und ich daraus lerne.

### Zeitgebunden (Time-bound):

- **Ziel:** Ich werde das Projekt bis 27.12.2023 abschließen.
- **Warum:** Das sorgt dafür, dass ich das Projekt rechtzeitig für die Bewertung fertigstelle.



### Projektverlauf:

### Tag 1 (14.12.2023): Projektstart und Grundlagen

- **Aktivitäten:**
  - Projektthema und ausdenken und analysieren.
  - Klassenstruktur skizzieren.
  - Grundlegende Klassen (Team, XmlManager) erstellen.

- **Fortschritt:**
  - Initialisierung der Klassen und grundlegende Struktur.

### Tag 2 (18.12.2023): Benutzereingabe und XML-Dateimanagement

- **Aktivitäten:**
  - UserInputManager-Klasse für Benutzereingaben erstellen.
  - XmlManager für die Handhabung von XML-Dateien erstellen.
  - GameManager auf Benutzereingabe und XML-Dateimanagement vorbereiten.

- **Fortschritt:**
  - Implementierung der Benutzereingabe und XML-Dateimanagement.

### Tag 3 (19.12.2023): Team-Logik und Elfmeterschießen

- **Aktivitäten:**
  - Team-Klasse für Fußballteams erstellen.
  - Logik für das Elfmeterschießen in der Team-Klasse implementieren.

- **Fortschritt:**
  - Teams können erstellt und Elfmeterschießen durchgeführt werden.


### Tag 4 (21.12.2023): GameManager vervollständigen und Testen

- **Aktivitäten:**
  - GameManager fertigstellen, um Teams zu verwalten und Ergebnisse zu speichern.
  - Testszenarien durchführen und Fehler beheben.

- **Fortschritt:**
  - GameManager kann ein vollständiges Fußballspiel durchführen.

- **Screenshots:**
  - [Screenshot vom abgeschlossenen Spiel](/images/FußballProjekt-Konsole.png)

### Tag 5 (25.12.2023): Dokumentation und Feinabstimmung

- **Aktivitäten:**
  - Code überprüfen und kommentieren.
  - Dokumentation formatieren.
  - Projekt abschließen und präsentationsbereit machen.

- **Fortschritt:**
  - Fertiges Projekt mit vollständiger Dokumentation.



## Die wichtigsten Code-Bereiche in den einzelnen Klassen

### Team.cs

```cs
public class Team
{
    // Konstruktor und Eigenschaften der Team-Klasse

    public void SimulatePenaltyShooting()
    {
        // Logik für das Elfmeterschießen
    }
}
```

### UserInputManager.cs

```cs
public class UserInputManager
{
    public string GetInput(string prompt)
    {
        // Benutzereingabe abfragen und zurückgeben
    }

    public DateTime GetDateInput(string prompt)
    {
        // Benutzereingabe für Datum abfragen und zurückgeben
    }
}
```

### XmlManager.cs

```cs
public class XmlManager
{
    public void InitializeXmlFile()
    {
        // Überprüfen und Initialisieren der XML-Datei
    }

    public void SaveToXml(Team team)
    {
        // Speichern von Teamdaten in der XML-Datei
    }

    private XmlElement CreateElementWithValue(XmlDocument document, string elementName, string value)
    {
        // Hilfsmethode zum Erstellen von XML-Elementen mit Wert
    }
}
```

### GameManager.cs

```cs
public class GameManager
{
    public void Run()
    {
        // Hauptsteuerung des Spiels

        Team team1 = GetTeamInfo(ConsoleColor.Red, "ersten");
        Team team2 = GetTeamInfo(ConsoleColor.Green, "zweiten");

        SaveTeamsToXml();
    }

    public Team GetTeamInfo(ConsoleColor color, string teamNumber)
    {
        // Informationen zum Team abfragen und zurückgeben
    }

    private void SaveTeamsToXml()
    {
        // Teams in der XML-Datei speichern
    }
}
```