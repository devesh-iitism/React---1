function App() {
    const handleClick = () => {
        console.log("Hello");
    };

  return (
    <div>
        <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
