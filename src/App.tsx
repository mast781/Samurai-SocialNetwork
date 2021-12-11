import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://png.pngtree.com/template/20190916/ourmid/pngtree-law-firm-shield-logo-image_305437.jpg"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://www.sunhome.ru/i/wallpapers/127/sirenevii-zakat-otrazhaetsya-v-ozere.800x600.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
