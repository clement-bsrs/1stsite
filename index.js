// Importation des modules nécessaires : Express et fs (à compléter)
const express = require('express');
const fs = require('fs'); // Complétez ici en important le module fs


// Créez une application Express (à compléter)
const app = express();


// Définissez un port pour votre serveur
const PORT = 3000;

// Route principale qui renvoie un message de bienvenue
app.get('/', (req, res) => {
    res.send('bienvenue sur mon premier serveur express !');
});

// Route qui lit le contenu du fichier data.txt et l'affiche (à compléter)
app.get('/readfile', (req, res) => {
    // Utilisez fs pour lire le fichier data.txt (à compléter)
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur de lecture  du fichier');
        } else {
            res.send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`le serveur a démarré sur le port ${PORT}`);
});