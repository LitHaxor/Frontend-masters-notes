
var bookNames = [];

const addFavoriteBook = (bookName) =>
{
    if(bookName.includes("Great"))
    {
        return;
    }
    bookNames.push(bookName);
}

addFavoriteBook("A song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime and Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You don't knowJS");


for(let i=0; i< bookNames.length ; i++)
    console.log(bookNames[i]);