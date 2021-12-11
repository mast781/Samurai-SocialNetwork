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
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className="content">Main content</div>
        </div>

    );
}

export default App;
