import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

export class App extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Open Weather App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <h1 className="text-center my-4">Welcome to the Open Weather App!</h1>
            </>
        )
    }
}

createRoot(document.getElementById('app')).render(<App />)