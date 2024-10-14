---
date: 2023-09-19
author: Marius Hau  
title: exceptions
---
# Exceptions

## Allgemeines

Sollte ein unvorhergesehenes Ergeignis auftreten, so wird eine *Exception* ausgelöst.

## Keine Exception

Bei folgendem Beispiel wird keine Exception ausgelöst. Folgende Fälle werden berücksichtigt:

- leere Eingabe
- Texteingabe
- Eingabe von Zahlen

```cs
Console.Write("Username: ");
string username = Console.ReadLine();
Console.WriteLine($"Username: {username}");
```

## Exception bei der Umwandlung von Zeichenketten

Wird eine Zeichektte fehlerhaft in eine Zahl umgewandelt so tritt eine `Exception` auf.

![Exception](//images/blog/exception-convert-string-to-int.png)

## try und catch

Ausgelöste `Exceptions` können mittels `try` und `catch` bearbeitet werden.

```cs
Console.Write("Zahl: ");
string eingabe = Console.ReadLine();

try
{
    int zahl = Convert.ToInt32(eingabe);
    Console.WriteLine($"Zahl: {zahl}");
}
catch (FormatException ex)
{
    Console.WriteLine("Es ist ein Fehler aufgetreten.");
    Console.WriteLine(ex.Message);
}
```

::: danger
Die Bearbeitung wird im `try`-Bereich bis zum Auftritt eines Fehlers versucht. Beim Auftreten eines Fehlers wird **sofort**
in den `catch`-Bereich gewechselt.
:::

Durch die Angabe der genauen `Exception` kann gezielt auf den Fehler reagiert werden.
Mittel `ex.Message` kann die Fehlermeldung ausgelesen werden.

## Mehrere catch-Bereiche

Falls mehrere `catch`-Bereiche benötigt werden, können diese an die zuvor erstellten Blöcke gereiht werden.

```cs
Console.Write("Position: ");
string eingabe = Console.ReadLine();

int[] zahlen = { 17, 20, 15, 11, 9, 5, 0 };

try
{
    int position = Convert.ToInt32(eingabe);
    Console.WriteLine($"Zahl: {zahlen[position]}");
}
catch (FormatException ex)
{
    Console.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl.");
    Console.WriteLine(ex.Message);
}
catch (IndexOutOfRangeException)
{
    Console.WriteLine($"Bitte geben Sie eine Zahl zwischen 0 und {zahlen.Length -1} ein.");
}
```
Wird im `catch`-Bereich `Exception` angegeben, so handelt sich um die **Oberklasse** und diese berücksichtigt **alle** Exceptions.

```cs
e.Write("Position: ");
string eingabe = Console.ReadLine();

int[] zahlen = { 17, 20, 15, 11, 9, 5, 0 };

try
{
    int position = Convert.ToInt32(eingabe);
    Console.WriteLine($"Zahl: {zahlen[position]}");
}
catch (FormatException ex)
{
    Console.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl.");
    Console.WriteLine(ex.Message);
}
catch (IndexOutOfRangeException)
{
    Console.WriteLine($"Bitte geben Sie eine Zahl zwischen 0 und {zahlen.Length -1} ein.");
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
```

## finally

Wird ein `finally`-Block verwendet so wird dieser **stets** aufgerufen. Dies bedeutet, dass der `finally`-Block sowohl bei einem Fehler
als auch bei einer erfolgreichen Bearbeitung aufgerufen wird.

```cs
Console.Write("Zahl: ");
string eingabe = Console.ReadLine();

try
{
    int zahl = Convert.ToInt32(eingabe);
    Console.WriteLine($"Zahl: {zahl}");
}
catch (FormatException ex)
{
    Console.WriteLine("Bitte kontrollieren Sie die eingegebene Zahl.");
    Console.WriteLine(ex.Message);
}
finally
{
    Console.WriteLine("Vielen Dank!"); 
}
```

## Eigene Exceptions erstellen

Eigene Exceptions können mittels `throw new Exception("Text der Nachricht")` ausgelöst werden. Hierbei wird die Oberklasse `Exception` verwendet.

Möchte man eine **eigene Exception** verwenden, so muss eine **Unterklasse** der Exception erstellt werden.

:::tip
Visual Studio erstellt den Inhalt der Unterklasse nach der Angabe der Vererbung automatisch. :wink: :100:
:::