import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";

export type DialogPropsType = {
    id: number
    name: string
}

type StatePropsType = {
    state: {
        profilePage: {
            posts: Array<PostPropsType>
        }
        dialogsPage: {
            dialogs: Array<DialogPropsType>,
            messages: Array<MessagePropsType>
        }
    }
}

const App = (props: StatePropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile
                            posts={props.state.profilePage.posts}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
