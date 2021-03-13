import React, { useState, useEffect, useContext } from 'react';
import Results from './Results';
import userDropdown from './useDropdown';
import pet, { ANIMALS } from '@frontendmasters/pet';
import ThemeContext from './ThemeContext';


const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = userDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed]   = userDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    const [theme, setTheme] = useContext(ThemeContext);


    async function requestPets() {
        const { animals } = await pet.animals( {
            location,
            breed,
            type: animal
        })

        console.log(animals)

        setPets(animals || [])
    }

    useEffect(() => {
      setBreeds([]);
      setBreed("");
      
      pet.breeds(animal).then(( { breeds: apiBreeds }) => {
          const breedString = apiBreeds.map(({ name }) => name);
          setBreeds(breedString)
      }, console.error)
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="Location" onChange={ e => setLocation(e.target.value) } />
                </label>
                <AnimalDropdown />
                <BreedDropdown/>
                <label htmlFor="theme">
                    ThemeContext
                    <select value={theme}
                            onChange={e => setTheme(e.target.value)}
                            onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                    </select>
                </label>

                <button style={ {backgroundColor: theme} }>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams;