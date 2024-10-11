---
date: 2023-11-03
author: Marius Hau
title: null-werte
---

# Null-Werte

Ein **Null-Wert** in C# ist ein spezieller Wert, der anzeigt, dass eine Variable oder ein Objekt *keinen* gültigen Wert oder
Verweis enthält. 

Fakten zu Null-Werten:
- Ein **Null-Wert** zeigt an, dass keine Daten oder Objekte vorhanden sind oder dass etwas nicht initialisiert wurde
- In C# wird der **Null-Wert** durch das Schlüsselwort *null* dargestellt
- Die Verwendung von **Null-Werten** in C# ermöglicht es, auf fehlende oder nicht initialisierte Daten oder Objekte flexibel zu reagieren und *Fehler zu vermeiden*

```cs
Person p = null;

if (p == null)
{
    Console.WriteLine("Diese Person ist nicht bekannt");
}
else
{
    Console.WriteLine("Vorname: {0}", p.Firstname);
}

Person p2 = new Person("Manfred", "Muster");
Console.WriteLine("Person p2 - Vorname: {0}",p2.Firstname);
```

:::Danger
int i = 0; ist nicht das gleiche wie int i = null;
:::