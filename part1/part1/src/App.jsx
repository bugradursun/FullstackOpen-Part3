const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <p>Greetings</p>
      <Hello name="Bugra" age={24} />
    </div>
  );
};

export default App;
