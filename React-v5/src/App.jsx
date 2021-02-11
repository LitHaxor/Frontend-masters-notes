import React from 'react';
import {render} from 'react-dom';
import SearchParams from './searchParams';

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
        <div>
            <h1 id="something-important">Adopt me</h1>
            <SearchParams/>
        </div>
    )
};
render(<App/>, document.getElementById("root"));