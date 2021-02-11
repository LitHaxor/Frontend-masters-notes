import React, {useState} from 'react'
import {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';
const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");

    const [breeds, setBreeds] = useState([]);

    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

    const [breed, BreedDropdown] = useDropdown("Breed", "" , breeds);
    // Custom hooks



    return (
        <div className="search-params">
            <form >
                <h1>{location}</h1>
                <label htmlFor="location">Location</label>
                <input type="text" value={location} placeholder="location" onChange={e=> setLocation(e.target.value)} />
                
                <AnimalDropdown/>
                <BreedDropdown/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
