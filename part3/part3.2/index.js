const express = require("express");
const morgan = require("morgan");
const app = express();

/**HOW TO LOG REQUEST BODY
 * Create a custom token
 * use custom token in log format
 * use morgan middleware
 */

morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(express.json());
//app.use(morgan("tiny")); //MORGAN MIDDLEWARE

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

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  phoneBookData = phoneBookData.filter((p) => p.id !== id);
  response.status(204).end();
});

const generateRandomId = () => {
  const generatedId = Math.floor(Math.random() * 1000);
  return String(generatedId);
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing",
    });
  }
  if (phoneBookData.find((p) => p.name === body.name)) {
    return response.status(400).json({
      error: "name already exists",
    });
  }
  const person = {
    id: generateRandomId(),
    name: body.name,
    number: body.number,
  };
  phoneBookData = phoneBookData.concat(person);
  response.json(person);
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
