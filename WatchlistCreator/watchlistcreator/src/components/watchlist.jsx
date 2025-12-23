import React, { useEffect } from 'react';
import { useRef } from 'react';

function WatchList() {
    const [category, setCategory] = React.useState('Movie');
    const [availableTitles, setAvailableTitles] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [movie, setMovie] = React.useState('');
    const inputRef = useRef(null);
    const [selectedMovies, setSelectedCities] = React.useState(null);



    useEffect(() => {
        setIsLoading(true);
        const fetchMovies = async () => {

            const response = await fetch('http://localhost:4000/api/movies');
            const json = await response.json();
            console.log('Fetch response:', json);
            if (response.ok) {
                setAvailableTitles(json);
            }
        }

        fetchMovies();
        setIsLoading(false);
    }, []);



    const addMovie = async () => {

        const response = await fetch('http://localhost:4000/api/movies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                moviename: movie,
                category: category
            })
        })
        inputRef.current.value = '';
    }


    return (
        <div>
            
            <p>Watchlist Creator</p>
            <p>Select Category</p>
            <select name="category"
                onChange={e=>setCategory(e.target.value)} >
                <option value="Movie">Movie</option>
                <option value="Series" >Series</option>
            </select>
            <p>Add title</p>
            <input
                onChange={(e) => setMovie(e.target.value)}
                ref={inputRef}
            />
            <button onClick={addMovie}>Add</button>

            <p>Available Titles</p>
            <ul>
                {availableTitles.map(title => (
                    <li key={title.id}>{title.moviename}</li>
                ))}
            </ul>

        </div>
    )
}

export default WatchList;