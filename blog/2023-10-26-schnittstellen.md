---
date: 2023-10-24
author: Marius Hau
title: Schnittstellen
---

# Schnittstellen

Eine **Schnittstelle** ist eine abstrakte Struktur, die definiert, welche *Methoden* und *Eigenschaften* eine Klasse implementieren muss, um bestimmte Funktionalitäten bereitzustellen. 

Fakten zu Schnittstellen:
- *Implementierende* Klassen müssen die in der **Schnittstelle** definierten Methoden und Eigenschaften bereitstellen
- Erlauben die **Implementierung** durch mehrere Klassen, um Funktionalitäten aus verschiedenen Quellen zu kombinieren
- Dienen zur Festlegung dessen, welche Methoden und Eigenschaften in *implementierenden* Klassen vorhanden sein müssen

```cs
    public interface IPerson
    {
        public string Firstname { get; set; }
        public string Surname { get; set; }
    }

    public class Employee : IPerson, IPilot

```
:::Danger
Durch **Interface** anstatt **class** kann man den Employee hier mit *IPerson* und *IPilot* verknüpfen, das ginge sonst nicht.
:::