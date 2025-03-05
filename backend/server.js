const express = require('express');
const port = 5000;


const app = express();

app.get("/post", (req, res) => {
    res.json({ message: "Voici les données" });
});


// Run the server
app.listen(port, () => console.log("Le server a démarré sur le port " + port));