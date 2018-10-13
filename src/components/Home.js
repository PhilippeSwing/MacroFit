import React, { Component } from 'react';
// Router
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className="home-page">
                <header className="App-header">
                    <h1 className="header-main">MacroFit</h1>

                    <Link to="/select-meso" className="select-meso">Select Mesocycle</Link>

                    <Link to="/create-meso" className="create-meso">Create Mesocycle</Link>
                </header>
            </section>
        );
    }
}

export default Home;