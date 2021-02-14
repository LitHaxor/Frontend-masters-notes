import React from 'react';
import {render} from 'react-dom';
import SearchParams from './searchParams';
import {Router} from '@reach/router'
import Details from './Details';
const App = () => {
    // return React.createElement(
    //     "div", {
    //         id: "something-important",
    //     },
    //     [
    //         React.createElement("h1", {}, "adpot me"),
    //         React.createElement(Pet, {
    //             name: "Tuna",
    //             animal: "dog",
    //             breed: "havanese",
    //         }),
    //         React.createElement(Pet, {
    //             name: "Pepper",
    //             animal: "Bird",
    //             breed: "Cocktail",
    //         }),
    //         React.createElement(Pet, {
    //             name: "Doink",
    //             animal: "cat",
    //             breed: "mixed",
    //         }),
    //     ]
    // );

    return (
        <React.StrictMode>
            <div>
                <h1 id="something-important">Adopt me</h1>
                <Router>
                    <SearchParams path="/"/>
                    <Details path="/details/:id"/>
                </Router>
            </div>
        </React.StrictMode>
    )
};
render(<App/>, document.getElementById("root"));