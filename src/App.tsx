import {FC} from "react";

import './App.css';
import {Cars} from "./components/cars/Cars";

interface IProps {

}

const App:FC<IProps> = () => {
    return (
        <div className="App">
            <Cars/>
        </div>
    );
}
export default App;
