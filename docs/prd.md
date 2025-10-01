# Dokument wymagań produktu (PRD) - 10x MVP Tracker

## 1. Przegląd produktu

10x MVP Tracker to narzędzie wykorzystujące Model Context Protocol (MCP) do wspomagania kursantów płatnego kursu programowania w monitorowaniu postępów realizacji projektów MVP aplikacji webowych. Rozwiązanie integruje się z popularnymi narzędziami AI (Claude Code, Gemini CLI, Cursor, Windsurf), delegując złożoną analizę kodu do zaawansowanych modeli językowych, jednocześnie zarządzając logiką biznesową i kryteriami oceny.

Narzędzie jest dystrybuowane jako publiczny pakiet NPM (@przeprogramowani/10x-mvp-tracker) i działa lokalnie na komputerze użytkownika, zapewniając prywatność i prostotę użycia.

## 2. Problem użytkownika

Kursanci płatnego kursu programowania potrzebują prostego i efektywnego sposobu monitorowania postępów w realizacji projektu zaliczeniowego (MVP aplikacji webowej). Obecnie brakuje im:

- Obiektywnej oceny stanu zaawansowania projektu względem kryteriów zaliczeniowych
- Jasnych wskazówek, co należy poprawić w pierwszej kolejności
- Edukacji w zakresie profesjonalnego wykorzystania AI w procesie tworzenia oprogramowania
- Prostego sposobu przygotowania podsumowania do formularza zaliczeniowego

Narzędzie rozwiązuje te problemy poprzez automatyczną analizę projektu i generowanie przejrzystych raportów z konkretnymi wskazówkami.

## 3. Wymagania funkcjonalne

### 3.1 Podstawowa funkcjonalność

- Pojedynczy tool MCP "check-mvp" wykonujący kompleksową analizę projektu
- Automatyczne wykrywanie typu projektu (wsparcie tylko dla Astro w pierwszej fazie)
- Sprawdzanie 10 kryteriów oceny z wynikiem TAK/NIE i opisem:
  - Dokumentacja projektu (README + PRD)
  - Implementacja funkcji logowania
  - Obecność testów
  - Zaimplementowana logika biznesowa
  - Konfiguracja CI/CD

### 3.2 Raportowanie

- Generowanie raportu w formacie Markdown zawierającego:
  - Checklistę z emoji (✅/❌) dla każdego kryterium
  - Procent ukończenia projektu
  - Krótkie wskazówki dla niespełnionych kryteriów
  - Sekcję do skopiowania do formularza zaliczeniowego
  - Informację o przybliżonym zużyciu tokenów

### 3.3 Persystencja

- Lokalny katalog .tracker/ w repozytorium projektu
- Plik state.json z aktualnym stanem kryteriów (boolean) i datą ostatniego sprawdzenia

### 3.4 Integracja

- Komunikacja przez protokół MCP (transport stdio)
- Delegacja analizy kodu do hosta AI (Claude Code, Cursor, etc.)
- Wykorzystanie natywnych możliwości przeszukiwania i indeksacji hosta

### 3.5 Interfejs

- Komunikaty w języku angielskim
- Casualowe komunikaty sukcesu z emoji
- Jasne komunikaty błędów
- Format daty ISO 8601

## 4. Granice produktu

### 4.1 W zakresie MVP (Faza 1)

- Wsparcie wyłącznie dla projektów opartych na starterze Astro
- Ocena binarna TAK/NIE bez oceny jakości implementacji
- Jeden format raportu (Markdown)
- Podstawowa persystencja lokalna
- Integracja z hostami MCP przez stdio

### 4.2 Poza zakresem MVP

- Wsparcie dla innych frameworków i struktur projektów
- Ocena jakości kodu i implementacji
- Gamifikacja i ranking kursantów
- Centralna baza danych lub synchronizacja
- Interfejs webowy lub GUI
- Automatyczne kamienie milowe i deadline'y
- Wielojęzyczność
- Zaawansowana analiza kosztów API

## 5. Historyjki użytkowników

### US-001: Sprawdzenie stanu projektu

- ID: US-001
- Tytuł: Jako kursant chcę sprawdzić stan mojego projektu MVP
- Opis: Kursant wykonuje komendę check-mvp w katalogu projektu, aby otrzymać aktualny stan spełnienia kryteriów zaliczeniowych
- Kryteria akceptacji:
  - Komenda check-mvp jest dostępna w terminalu po zainstalowaniu pakietu
  - Narzędzie automatycznie wykrywa czy projekt jest oparty na Astro
  - Wyświetla się raport z oceną wszystkich 6 kryteriów
  - Każde kryterium ma status TAK/NIE z emoji (✅/❌)
  - Raport zawiera procent ukończenia projektu

### US-002: Otrzymanie wskazówek do poprawy

- ID: US-002
- Tytuł: Jako kursant chcę wiedzieć co poprawić w pierwszej kolejności
- Opis: Po sprawdzeniu projektu, kursant otrzymuje konkretne wskazówki dla każdego niespełnionego kryterium
- Kryteria akceptacji:
  - Dla każdego kryterium z wynikiem NIE wyświetla się krótka wskazówka
  - Wskazówki są priorytetyzowane (Critical/Important/Optional)
  - Wskazówki są konkretne i możliwe do zastosowania
  - Język wskazówek jest casualowy i przyjazny

### US-003: Obsługa projektów nie-Astro

- ID: US-003
- Tytuł: Jako kursant z projektem w innej technologii chcę otrzymać jasną informację
- Opis: Gdy kursant próbuje użyć narzędzia na projekcie nie opartym na Astro, otrzymuje jasny komunikat
- Kryteria akceptacji:
  - Narzędzie wykrywa że projekt nie jest oparty na Astro
  - Wyświetla komunikat: "This tool only supports Astro projects"
  - Nie wykonuje dalszej analizy
  - Zwraca kod błędu różny od 0

### US-004: Kopiowanie podsumowania do formularza

- ID: US-004
- Tytuł: Jako kursant chcę łatwo skopiować podsumowanie do formularza zaliczeniowego
- Opis: Raport zawiera specjalną sekcję sformatowaną do wklejenia w formularz zaliczeniowy
- Kryteria akceptacji:
  - Raport zawiera wydzieloną sekcję "Summary for submission form"
  - Sekcja zawiera zwięzłe podsumowanie stanu projektu
  - Format jest zgodny z wymaganiami formularza
  - Tekst jest gotowy do skopiowania bez edycji

### US-005: Instalacja i konfiguracja

- ID: US-006
- Tytuł: Jako kursant chcę łatwo zainstalować i skonfigurować narzędzie
- Opis: Proces instalacji jest prosty i wymaga minimalnej konfiguracji
- Kryteria akceptacji:
  - Instalacja przez npm: npm install -g @przeprogramowani/mvp-tracker
  - Narzędzie działa od razu po instalacji bez dodatkowej konfiguracji
  - Dokumentacja instalacji jest dostępna w README
  - Wsparcie dla Node.js 18+

### US-006: Obsługa błędów analizy

- ID: US-007
- Tytuł: Jako kursant chcę otrzymać pomocny komunikat gdy analiza się nie powiedzie
- Opis: W przypadku błędów podczas analizy, otrzymuję jasny komunikat co poszło nie tak
- Kryteria akceptacji:
  - Błędy są wychwytywane i obsługiwane
  - Komunikaty błędów są w języku angielskim
  - Wskazują możliwe przyczyny problemu
  - Sugerują rozwiązania (np. sprawdzenie połączenia z hostem AI)

## 6. Metryki sukcesu

### 6.1 Metryki adopcji

- Liczba pobrań pakietu NPM (cel: 80% aktywnych kursantów w ciągu pierwszego tygodnia)

### 6.2 Metryki użyteczności

- Procent projektów, które osiągnęły 100% kryteriów przed deadlinem (cel: wzrost o 30%)
- Liczba zgłoszonych problemów technicznych (cel: <5% aktywnych kursantów)

### 6.3 Metryki efektywności

- Średni czas wykonania analizy (cel: <30 sekund)
- Średnie zużycie tokenów na analizę (cel: <30 000 tokenów)
- Procent udanych analiz vs błędy (cel: >95% sukcesu)

### 6.4 Metryki edukacyjne

- Feedback jakościowy o przydatności narzędzia w nauce
- Procent kursantów, którzy zaliczyli projekt za pierwszym podejściem
