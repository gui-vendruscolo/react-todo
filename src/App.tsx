import React from "react";
import { Header } from "./layouts/header";
import { Board } from "./components/board";
import "./App.css";
import "./variables.css";
import { Footer } from "./layouts/footer";
import { TaskAdd } from "./components/task-add";

function App() {
    return (
        <div className="App">
            <div id="header-container">
                <Header />
            </div>

            <div id="board-container">
                <Board />
            </div>

            <div id="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default App;
