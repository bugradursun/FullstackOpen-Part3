const express = require("express");

const app = express();

app.use(express.json());

let phoneBookData = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(phoneBookData);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id; //URL parameter is string, so no need to convert it to number
  const person = phoneBookData.find((p) => p.id === id);
  if (!person) {
    response.status(404).send({ error: "Person not found" });
  } else {
    response.json(person);
  }
});
app.get("/info", (request, response) => {
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${phoneBookData.length} people</> <p>${date}</p>`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
