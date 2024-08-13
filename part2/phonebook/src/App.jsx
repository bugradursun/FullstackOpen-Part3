/* eslint-disable no-unused-vars */
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1111" },
  ]);
  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFiltername] = useState("");
  const [filteredPersons, setFilteredpersons] = useState([]);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    //if (persons.some((person) => person.name === newName)) {
    //  alert(`${newName} is already added to phonebook`);
    //  return;
    //}
    const isSame = (person) => person.name === newName;
    if (persons.some(isSame)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };
  const filterClick = (event) => {
    event.preventDefault();
    const filteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(filterName.toLowerCase());
    });
    if (filteredPersons) {
      setPersons(filteredPersons);
    } else {
      setPersons(persons);
    }
  };

  const handleFilterName = (event) => {
    setFiltername(event.target.value); //filtering name is assigned to filterName
    //event.preventDefault();
    //const filterName = event.target.value;
    //const filteredPersons = persons.filter((person) => {
    //  return person.name.toLowerCase().includes(filterName.toLowerCase());
    //});
    //console.log(filteredPersons);
    //if (filteredPersons) {
    //  setPersons(filteredPersons);
    //} else {
    //  setPersons(persons);
    //}
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilterName} />
      </div>
      <button onClick={filterClick}>filter</button>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number : <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers </h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
