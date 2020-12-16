import React, {useCallback, useContext, useEffect, useState} from "react";
import searchContext from "../Search/context";
import {searchMoviesBy} from "../../../API";

const Search = () => {
    const context = useContext(searchContext);
    const [movies, setMovies] = useState(null);
    const fetchData = useCallback(async () => {
        return await searchMoviesBy(context.searchInput, null).then((response) => {
            setMovies(response.data.results);
        });
    }, [context]);

    useEffect(() => {
        fetchData();

        return () => setMovies(null);
    }, [fetchData]);

    function chunk(array, size) {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
            const last = chunked_arr[chunked_arr.length - 1];
            if (!last || last.length === size) {
                chunked_arr.push([array[i]]);
            } else {
                last.push(array[i]);
            }
        }
        return chunked_arr;
    }

    const renderPosters = (data) => {
        return data.map((movie) => {
            if (movie.poster_path)
                return (
                    <div className="row-item">
                        <img
                            className="row-item-img"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt="Unknow"
                        />
                    </div>
                );
            return null;
        });
    };

    return (
        <div
            className="content" /*style={{ backgroundImage: `url(https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUpJhujhQAvjWyEkzhf6Z3ChDyZHZChxm8Q_3C6818BjZB3TC6hZ6rW_EpKl4NSoA6QQF187BYhiwzTwd7lY79ERH6o6.jpg?r=a73)` }} */
        >
            <h3 className="search-result-title">
                Résultats pour: <span className="search-result-query">{context.searchInput}</span>
            </h3>
            <div className="rows">
                {movies && (
                    <React.Fragment>
                        {chunk(movies, 10).map((row) => (
                            <div className="row">
                                <div className="row-container">{renderPosters(row)}</div>
                            </div>
                        ))}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default Search;
