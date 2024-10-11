---
date: 2024-05-12
author: Marius Hau
 
---
 
# Elfmeter Projekt
 
# Funktion
 
Dieses Projekt ermöglicht es dir 2 verschiedene Teams gegeneinander spielen zu lassen.
Mithilfe eines Random generators wird ein unberechenbares Ergebnis herauskommen.
 
# Model
 
```cs
    public string Id { get ; set; }
 
    public string TeamName { get; set; }
 
    public string Liga { get; set; }
 
 
public Team(string id, string teamName, string liga)
{
    this.Id = id;
    this.TeamName = teamName;
    this.Liga = liga;
}
 
public Team(string teamName, string liga)
{
    this.Id = Guid.NewGuid().ToString();
    this.TeamName = teamName;
    this.Liga = liga;
}
```
Das ist unser Model Team das anschließend gespeichert wird.
 
Mithilfe von GUID legen wir automatisch eine einzigartige Id fest.
 
# Methoden
 
Alle Methoden die ich für dieses Projekt benötigt habe sind in meinen SqliteRepository
das auf eine Schnittstelle IRepositroy verweist.
 
```cs
    string _path = string.Empty;
 
    public SqliteRepository(string path)
    {
        _path = path;
    }
 
    public bool Add(Team team)
    {
        try
        {
            using (var context = new MyTeamContext(_path))
            {
                context.Add(team);
                context.SaveChanges();
            }
 
            return true;
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine(ex.Message);
            return false;
        }
    }
 
     public List<Team> GetAll()
     {
        try
        {
            using (var context = new MyTeamContext(_path))
            {
               
 
                var teams = context.Teams.FromSql
                    ($"SELECT * FROM Teams").ToList();
 
                return teams;
            }
 
 
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine(ex.Message);
            return new List<Team>();
        }
    }
 
    public bool Delete(Team team)
    {
        try
        {
            using (var context = new MyTeamContext(_path))
            {
                context.Remove(team);
                context.SaveChanges();
                return true;
            }
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine(ex.Message);
            return false;
            throw;
        }
    }
 
    public bool Update(Team team)
    {
        try
        {
            using(var context = new MyTeamContext(_path))
            {
                var teamToUpdate = context.Teams.FirstOrDefault(t => t.Id == team.Id);
 
                if (teamToUpdate == null)
                {
                    return false;
                }
 
                teamToUpdate.TeamName = team.TeamName;
                teamToUpdate.Liga = team.Liga;
 
                context.SaveChanges();
 
            }
            return true;
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine(ex.Message);
            return false;
        }
    }
 
 
```
Im Konstruktor wird der Path mitgegeben den wir anschließend in der MauiProgramm.cs befüllen
 
In jeder Methode verwenden wir unseren MyTeamContext um auf unsere Sqlite Datenbank zu verweisen.
 
In der Update Methode überscheiben wir die alten Values einfach mit den mitgegebenen neuen Values.
 
# MyTeamContext
 
```cs
public DbSet<Team> Teams { get; set; }
 
private string _path = string.Empty;
 
public MyTeamContext(string path)
{
    _path = path;
 
    SQLitePCL.Batteries_V2.Init();
    this.Database.EnsureCreated();
}
 
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
 
    Debug.WriteLine(_path);
 
    optionsBuilder.UseSqlite($"Filename={_path}");
 
    //base.OnConfiguring(optionsBuilder);
}
```
 
Mit DbSet erstellen wir die Tabelle Teams in denen die Teams gespeichert werden.
 
Der Path wird wieder im Konstruktor mitgegeben
 
Mit  SQLitePCL.Batteries_V2.Init();
    this.Database.EnsureCreated();
Stellen wir sicher das Unsere Datenbank erstellt wird
 
# MainViewModel
 
```cs
 IRepository _repository = repository;
 IAlertService _alertService = alertService;
 
 private bool _isLoaded = false;
 
 [ObservableProperty]
 ObservableCollection<Lib.Models.Team> _teams = [];
 
 [ObservableProperty]
 Lib.Models.Team _selectedTeam = null;
 
 [ObservableProperty]
 Lib.Models.Team _selectedTeam2= null;
 
 [RelayCommand]
 void Load()
 {
 
     this.Teams.Clear();
 
     
     
         var teams = _repository.GetAll();
 
         foreach (var entry in teams)
         {
             Teams.Add(entry);
         }
       
 }
 
 [RelayCommand]
 public void Delete()
 {
     if (SelectedTeam != null)
     {
         
         _repository.Delete(SelectedTeam);
         this.Teams.Remove(SelectedTeam);
         _alertService.ShowAlert("Erfolg!",
             "Das Team wurde gelöscht!");
 
 
     }
     else
     {
         _alertService.ShowAlert("Fehler!",
             "Bitte wählen sie ein Team aus!");
     }
 }
 
 [RelayCommand]
 public void Update(Team team)
 {
     team = SelectedTeam;
 
     if (team != null)
     {
         var result = _repository.Update(team);
 
 
         this.Teams.Clear();
 
         foreach (var entry in _repository.GetAll())
         {
             this.Teams.Add(entry);
         }
             
                 _alertService.ShowAlert("Erfolg!",
                     "Das Team wurde bearbeitet!");
       
             
         
     }
 }
 
 
 [RelayCommand]
 public void Play()
 {
     if (SelectedTeam.Id == SelectedTeam2.Id)
     {
         _alertService.ShowAlert("Fehler!",
             "Ein Team kann nicht gegen sich Selbst spielen!");
     }
     else
     {
         _alertService.ShowAlert($"Elfmeterschießen beginnt! {SelectedTeam.TeamName} gegen {SelectedTeam2.TeamName}",
             "Klicke 'Ok' um zu starten!");
 
         _alertService.ShowAlert($"{SelectedTeam.TeamName}",
             "beginnt zu schießen!");
 
         int count = 0;
         int count2 = 0;
 
         for (int i = 0; i < 5; i++)
         {
             Random random = new Random();
             int gen = random.Next(1,11);
 
             if (gen > 5)
             {
                 _alertService.ShowAlert($"Treffer für {SelectedTeam.TeamName}",
                     $"{SelectedTeam.TeamName} hat getroffen und erhalten 1nen Punkt!");
                 count++;
             }
             else
             {
                 _alertService.ShowAlert("Knapp Vorbei!",
                     $"{SelectedTeam.TeamName} konnte das Tor nicht treffen!");
             }
         }
 
         _alertService.ShowAlert("ZwischenStand!",
            $"{SelectedTeam.TeamName} konnte {count} Punkte erzielen!");
 
         _alertService.ShowAlert($"{SelectedTeam2.TeamName}",
             "beginnt zu schießen!");
 
         for (int i = 0; i < 5; i++)
         {
             Random random = new Random();
             int gen = random.Next(1, 11);
 
             if (gen > 5)
             {
                 _alertService.ShowAlert($"Treffer für {SelectedTeam2.TeamName}",
                     $"{SelectedTeam2.TeamName} hat getroffen und erhalten 1nen Punkt!");
                 count2++;
             }
             else
             {
                 _alertService.ShowAlert("Knapp Vorbei!",
                     $"{SelectedTeam2.TeamName} konnte das Tor nicht treffen!");
             }
         }
 
         _alertService.ShowAlert("ZwischenStand!",
            $"{SelectedTeam.TeamName} konnte {count2} Punkte erzielen!");
 
         if (count == count2)
         {
             _alertService.ShowAlert("Unentschieden!",
                 "Beide Teams haben gleich viele Tore geschossen!");
         }
         else if (count > count2)
         {
             _alertService.ShowAlert($"Gewinner {SelectedTeam.TeamName}!",
                 $"{SelectedTeam.TeamName} hat {count - count2} Tor(e) mehr geschossen!");
         }
         else
         {
             _alertService.ShowAlert($"Gewinner {SelectedTeam2.TeamName}!",
                 $"{SelectedTeam2.TeamName} hat {count2 - count} Tor(e) mehr geschossen!");
         }
 
 
 
     }
 }
```
 
Im MainviewModel haben wir die Möglichkeit
 
- Elfmeterspiele zu starten
- Teams zu löschen
- Teams zu bearbeiten
 
Um beide Teams anzuzeigen und sie auswählen zu können verwenden wir 2-mal die gleiche Observable Collection. Die gleichen Teams können nicht gegeneinander spielen.
 
Das Elfmetershießen ist komplett zufällig mit einen random integer aufgebaut.
 
Mithilfe des AlertServices geben wir den User ein Feedback ob das Team getroffen hat oder nicht und welches Team am Ende gewonnen hat.
 
In der Delete und Update Methode
 
Geben wir das ausgewählte Team mit und wird mithilfe unserer Methode die wir im SqliteRepository definiert haben gelöscht oder bearbeitet.
 
Um ein Teams das gerade bearbeitet wurde auch wieder erneurt anzuzeigen benutzen wir:
 
```cs
 this.Teams.Clear();
 
         foreach (var entry in _repository.GetAll())
         {
             this.Teams.Add(entry);
         }
```
Hiermit löschen wir alle Teams und fügen sie anschließend wieder erneuert hinzu.
 
# AddTeam
 
```cs
 IRepository _repository = repository;
 IAlertService _alertService = alertService;
 
 [ObservableProperty]
 
 public string teamName;
 
 [ObservableProperty]
 
 public string liga;
 
 [RelayCommand]
 public void Add()
 {
     try
     {
         Lib.Models.Team team = new(this.TeamName, this.Liga);
 
         var result = _repository.Add(team);
 
         _alertService.ShowAlert("Erfolg",
             "Das Team konnte hinzugefügt werden!");
 
 
 
         if (result)
         {
             this.TeamName = "";
             this.Liga = "";
 
             
         }
 
     }
     catch (Exception ex)
     {
         _alertService.ShowAlert("Fehler",
             "Ein Fehler ist aufgetreten!");
         System.Diagnostics.Debug.WriteLine(ex.Message);
         throw;
     }
 }
```
 
Die Werte werden in zwei **Entry** Felder eingegeben und anschließend mitgegeben.
 
Die Entry Felder werden bei erfolgreicher hinzufügung wieder auf leer zurückgesetzt.
 
# Data  Grid
 
Als Syncfusion Komponent habe ich das SfDataGrid ausgewählt
 
es ermöglicht mir es alle Teams anzuzeigen.
 
Das ViewModel dafür:
 
```cs
IRepository _repository;
public TeamListViewModel(IRepository repository)
{
    _repository = repository;
 
    WeakReferenceMessenger.Default.
        Register<AddMessage>(this, (r, m) =>
        {
            //m.Value: unser Entry-Objekt
            System.Diagnostics.Debug.WriteLine(m.Value);
            //add to list
            this.Teams.Add(m.Value);
        });
 
}
 
private bool _isLoaded = false;
 
[ObservableProperty]
ObservableCollection<Lib.Models.Team> _teams = [];
 
 
 
[RelayCommand]
void LoadData()
 
{
    this.Teams.Clear();
 
        var entries = _repository.GetAll();
 
        foreach (var entry in entries)
        {
            Teams.Add(entry);
        }
       
   
 
}
```
 
Die XAML-Page dafür:
 
```xml
 <ContentPage.Behaviors>
     <toolkit:EventToCommandBehavior EventName="Appearing" Command="{Binding LoadDataCommand}">
         
     </toolkit:EventToCommandBehavior>
 </ContentPage.Behaviors>
 
 <syncfusion:SfDataGrid x:Name="dataGrid"
                            ItemsSource="{Binding Teams}" ColumnWidthMode="Fill" SortingMode="Single">
 
 </syncfusion:SfDataGrid>
```
 
Alle genaueren inhalte und Funktionen des SfDataGrid findet man auf der Syncfusion website