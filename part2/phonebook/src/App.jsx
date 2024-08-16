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
  const [isFiltered, setIsFiltered] = useState(false);

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
  const resetClick = () => {
    setIsFiltered(false);
    //setPersons(persons);
    // bu kısmı refactor et
    //resetleme mekanizması burada olacak
  };
  const filterClick = (event) => {
    //event.preventDefault();
    const filteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(filterName.toLowerCase());
    });
    if (filteredPersons) {
      setIsFiltered(true);
      setFilteredpersons(filteredPersons);
    } else {
      //
      setIsFiltered(false);
      //setPersons({ name: "Arto hellas", number: "1111" });
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
  //PART 2.9 DEVAM EDECEK
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
      <button onClick={resetClick}>reset</button>
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
      {isFiltered ? (
        filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))
      ) : (
        <ul>
          {persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
        </ul>
      )}
      <ul></ul>
    </div>
  );
};

export default App;
