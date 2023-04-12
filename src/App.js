import './App.css';
import Characters from "./components/characters/Characters";
import SimpsonsFamily from "./components/family/Family";

function App() {
    return (
        <>
            <div className="App">
                <h1>Family the Simson</h1>
                <SimpsonsFamily/>
                <p>page 1</p>
            </div>
            <div className="App">
                <h1>The Rick and Morty</h1>
                <Characters/>
                <p>page 2</p>
            </div>
        </>
    );
}

export default App;
