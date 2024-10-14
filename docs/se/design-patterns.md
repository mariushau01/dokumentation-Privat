---
date: 2024-03-19
author: Marius Hau
---
 
# Design Patterns
 
## Solid
 
Inversion, Injection (DI)
 
Beschreibung der einzelnen "Buchstaben", jeweils inkl. Beispiel und falls möglich einer Abbildung
 
## S - Single Responsibility Prinzip
 
***"Eine Klasse sollte sich nur aus einem Grund ändern müssen, nämlich wenn sich die Aufgabe ändert, die sie erfüllt."***

Das Single-Responsibility-Prinzip betont, dass jede Klasse nur für eine spezifische Aufgabe zuständig sein sollte. Eine Klasse mit mehreren Aufgaben birgt das Risiko, dass Änderungen häufiger erforderlich sind.

```csharp
// Verantwortlich für das Lesen von Daten
public class DataReader
{
    public string ReadData()
    {
        // Code zum Lesen von Daten
        return "Daten gelesen";
    }
}

// Verantwortlich für das Schreiben von Daten
public class DataWriter
{
    public void WriteData(string data)
    {
        // Code zum Schreiben von Daten
    }
}
```
 
 
## O - Open Closed Prinzip
 
***"Softwarekomponenten sollen für Erweiterungen offen, aber für Änderungen an ihrem bestehenden Verhalten geschlossen sein."***

Das Open-Closed-Prinzip ermöglicht es, neue Funktionalitäten hinzuzufügen, ohne den bereits vorhandenen Code zu verändern.

```csharp
// Basisklasse, die nicht geändert werden muss
public abstract class Shape
{
    public abstract double Area();
}

// Neue Erweiterung, die nicht die Basisklasse ändert
public class Circle : Shape
{
    private double radius;
    public Circle(double radius)
    {
        this.radius = radius;
    }
    public override double Area()
    {
        return Math.PI * radius * radius;
    }
}
```


## L - Liskovsches Substitutionsprinzip
 
***"Subtypen müssen sich so verhalten, dass sie durch ihre Basistypen ersetzbar sind, ohne die Korrektheit des Programms zu beeinträchtigen."***

Das bedeutet, dass ein Subtyp alle Verträge einhält, die der Basistyp festlegt, und dabei seine eigenen spezifischen Funktionen ergänzt oder erweitert.

```csharp
// Basisklasse
public class Bird
{
    public virtual void Fly()
    {
        // Code zum Fliegen
    }
}

// Subklasse, die die Basisklasse korrekt substituiert
public class Sparrow : Bird
{
    public override void Fly()
    {
        // Code zum Fliegen eines Sperlings
    }
}
```

 
## I - Interface Segregation Prinzip
 
***"Klienten sollten nicht von Schnittstellen abhängig sein, die sie nicht verwenden. Dies führt zu dünneren, spezifischeren Schnittstellen."***

Durch die Aufteilung von großen Schnittstellen in kleinere und spezifischere Teile wird vermieden, dass Klienten unerwünschte Abhängigkeiten aufbauen und dadurch flexibler und wartbarer Code ermöglicht.

```cs
// Zuviel Interface, das aufgesplittet werden sollte
public interface IWorker
{
    void Work();
    void Eat();
}

// Spezifische Interfaces
public interface IWorkable
{
    void Work();
}

public interface IEatable
{
    void Eat();
}

// Klassen implementieren nur, was sie brauchen
public class Robot : IWorkable
{
    public void Work()
    {
        // Arbeitslogik für den Roboter
    }
}

public class Human : IWorkable, IEatable
{
    public void Work()
    {
        // Arbeitslogik für den Menschen
    }

    public void Eat()
    {
        // Essenslogik für den Menschen
    }
}
```

 
## D - Dependency Inversion Prinzip
 
***"Abhängigkeiten sollten von abstrakten Klassen oder Schnittstellen abhängen, nicht von konkreten Implementierungen. Dadurch wird eine flexible Architektur ermöglicht."***

Durch die Umkehrung der Abhängigkeiten wird die Verbindung zwischen verschiedenen Teilen eines Systems reduziert. Dies erleichtert es, Änderungen vorzunehmen und den Code zu erweitern, ohne die gesamte Architektur zu beeinträchtigen.

```csharp
// Abstrakte Schnittstelle
public interface IMessageSender
{
    void Send(string message);
}

// Konkrete Implementierung der Schnittstelle
public class EmailSender : IMessageSender
{
    public void Send(string message)
    {
        Console.WriteLine("Email: " + message);
    }
}

// Client, der von der Abstraktion abhängt
public class Notification
{
    private readonly IMessageSender _messageSender;

    public Notification(IMessageSender messageSender)
    {
        _messageSender = messageSender;
    }

    public void Notify(string message)
    {
        _messageSender.Send(message);
    }
}

// Verwendung
class Program
{
    static void Main()
    {
        IMessageSender emailSender = new EmailSender();
        Notification notification = new Notification(emailSender);
        notification.Notify("Hallo Welt");
    }
}
```