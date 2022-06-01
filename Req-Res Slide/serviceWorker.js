const express = require("express");
const app = express();
const port = 3000;
const cards = [
  {
    id: 1,
    cardNumber: "3241234223423345",
  },
  {
    id: 2,
    cardNumber: "7034806497584563",
  },
  {
    id: 3,
    cardNumber: "6746965407352386",
  },
  {
    id: 4,
    cardNumber: "6346657457352456",
  },
  {
    id: 5,
    cardNumber: "2855934404756656",
  },
];

app.listen(port, () => {
  console.log(`app litening on port ${port}`);
});

app.get("/card", (req, res) => {
  res.json(cards);
});

app.get("/card/:id", (req, res) => {
  const cardId = parseInt(req.params.id);
  const card = cards.find((card) => card.id === cardId);
  if (!card) {
    res.status(404).send("Something went wrong");
  }
  res.status(200).json(card);
});
