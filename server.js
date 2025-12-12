const express = require("express");
const app = express();

app.use(express.json());

let lastDonation = null;

// SAWERIA WEBHOOK
app.post("/saweria", (req, res) => {
    console.log("DONASI MASUK:", req.body);

    lastDonation = {
        name: req.body.donator_name || "Anonim",
        amount: req.body.amount_raw || 0,
        message: req.body.message || "",
        time: Date.now()
    };

    res.sendStatus(200);
});

// ROBLOX AMBIL DATA
app.get("/latest", (req, res) => {
    res.json(lastDonation);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server jalan di port", PORT);
});
