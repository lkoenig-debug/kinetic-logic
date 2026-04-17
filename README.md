

This project contains everything 

**Edit the code in your local development environment**



Voraussetzungen auf dem Server
Docker & Docker Compose installiert
Git installiert
Schritt 1 — Repository klonen
git clone https://github.com/DEIN-USERNAME/DEIN-REPO.git
cd DEIN-REPO
Schritt 2 — Backend konfigurieren
cd server
cp .env.example .env
nano .env
Die .env Datei ausfüllen:

SMTP_HOST=mail.deinprovider.de
SMTP_PORT=587
SMTP_USER=info@stahlcomputer.de
SMTP_PASS=DeinPasswort
CONTACT_EMAIL=info@stahlcomputer.de
FRONTEND_URL=https://deine-domain.de
PORT=3001
Danach speichern: Ctrl+O, Enter, Ctrl+X

Schritt 3 — Frontend konfigurieren
Im Root-Verzeichnis des Repos eine .env Datei erstellen:

cd ..
nano .env
Inhalt:

VITE_API_URL=http://deine-domain.de:3001
Schritt 4 — Docker Compose starten
docker-compose up -d --build
Das baut automatisch:

Frontend (React/Vite → Nginx auf Port 80)
Backend (Node.js auf Port 3001)
Schritt 5 — Prüfen ob alles läuft
docker-compose ps        # Alle Container sollten "Up" sein
docker-compose logs -f   # Live-Logs anschauen
Zugriff
Website: http://deine-server-ip oder http://deine-domain.de
Bei Problemen: docker-compose logs backend oder docker-compose logs frontend
Hinweis: Die docker-compose.yml liegt im Root des Repos und referenziert ./backend — du müsstest die Pfade dort ggf. auf ./server anpassen, da die Backend-Dateien jetzt im server/-Ordner liegen
