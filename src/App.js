import React from "react";
import "./App.css";
import Container from "./Container"
import DetailsContextProvider from "./Context";

export default function App() {

    return (
        <DetailsContextProvider>
            <div className="App">
                <Container/>
            </div>
        </DetailsContextProvider>
    );
}

