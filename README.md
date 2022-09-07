rework di netflix react con routes

Crea una Route per un componente TVShows. Una semplice rotta statica, senza parametri. Es. /tv-shows

Aggiungi un Link alla pagina TVShows nella Navbar dell’applicazione.

Crea una Route per un componente MovieDetails. Dovrà permettere di ricevere un parametro id dalla URL

In ogni componente SingleMovie aggiungi un bottone per navigare alla sua pagina di dettaglio.

Dovrà inserire l’id del film nella URL corrispondente a quella che hai usato nella Route.

Crea il componente MovieDetails per visualizzare i dettagli e i commenti del film selezionato. Questa informazione dovrà essere ottenuta da una fetch ogni qualvolta il componente MovieDetails verrà ricaricato.

EXTRA
Cambia il comportamento della SearchBar: se l’utente è sulla pagina TVShows, il placeholder dovrà diventare: “Cerca Serie TV…”
Se non l’hai già fatto, migliora la navigazione aggiungendo loaders e gestione errori
