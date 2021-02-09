const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};

const App = () => {
    return React.createElement("div", {
        id: "something-important"
    }, [
        React.createElement("h1", {}, "adpot me"),
        React.createElement(Pet, {
            name: "Tuna",
            animal: "dog",
            breed: "havanese"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cocktail"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "cat",
            breed: "mixed"
        })
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)