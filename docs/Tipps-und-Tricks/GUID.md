---
date: 2023-10-17
author: Marius Hau  
---



# GUID - Global Unique Identifier

Eine GUID ist eine einzigartige Zeichenkette, welche zum Beispiel als Primärschlüssel verwendet werden kann.
Sie wird folgendermaßen erzeugt:

```cs
string id = Guid.NewGuid().ToString();
Console.WriteLine(id);
```

                  

## ENUM

**Enum** steht für eine Enumeration, was eine benannte Liste benutzerdefinierter Konstanten ist. **Enums** bieten eine Möglichkeit, eine Gruppe von benannten Konstanten zu erstellen, die auf einen bestimmten Datentyp beschränkt sind.

Hier ist ein einfaches Beispiel für die Definition und Verwendung eines **Enums**:


```cs
// Definition eines Enums für Wochentage
public enum Wochentag
{
    Montag,
    Dienstag,
    Mittwoch,
    Donnerstag,
    Freitag,
    Samstag,
    Sonntag
}

class Programm
{
    static void Main()
    {
        // Verwendung des Enums
        Wochentag heute = Wochentag.Mittwoch;

        // Ausgabe des Enums
        Console.WriteLine("Heute ist: " + heute);

        // Konvertierung von einem Enum zu einem anderen Datentyp (hier: int)
        int enumAlsInt = (int)heute;
        Console.WriteLine("Als Zahl: " + enumAlsInt);
    }
}

```

In diesem Beispiel wird ein **Enum** namens "Wochentag" definiert, das die Wochentage von Montag bis Sonntag repräsentiert. Jeder Wochentag wird dabei automatisch einer Ganzzahl zugeordnet, wobei Montag den Wert 0 hat und die Werte für die folgenden Tage um eins erhöht werden.

:::Danger
wenn Enums verwendet werden, um verschiedene Status oder Optionen zu repräsentieren, da Änderungen an der Enum-Reihenfolge die Zuordnung von Werten beeinträchtigen können, was zu unerwartetem Verhalten in bestehendem Code führen kann
:::

