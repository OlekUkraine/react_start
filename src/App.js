import Posts from "./components/posts/Posts";
import './App.css'
import Launches from "./components/launches/Launches";
import Users from "./components/users/Users";
import UserPosts from "./components/userPosts/UserPosts";
import {useState} from "react";

function App() {
    const [userId, setUserId] = useState(null);
    console.log(userId)

    return (
        <div className="App">
            <div className={'in-app'}>
                <Posts/>
            </div>

            <div className={'in-app'}>
                <Launches/>
            </div>

            <div className={'in-app'}>
                <Users setUserId={setUserId} userId={userId}/>
                {
                    userId &&
                    <UserPosts userId={userId}/>
                }
            </div>

        </div>
    );
}

export default App;
