const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.get("/isciler", (req, res) => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Fayl oxunarkən xəta baş verdi." });
    }
    const isciler = JSON.parse(data);
    res.json(isciler);
  });
});

app.listen(PORT, () => {
  console.log(`Server işə düşdü: http://localhost:${PORT}`);
});
