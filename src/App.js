import {Link, Route, Routes} from "react-router-dom";

import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Home from "./components/home/Home";
import Post from "./components/post/Post";
import './App.css';

function App() {
    return (
        <div className="App">

            <header className={'App__menu'}>
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/todos'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>
            </header>

            <div className={'App__view'}>
                <h2>View</h2>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Routes>
            </div>

        </div>
    );
}

export default App;
