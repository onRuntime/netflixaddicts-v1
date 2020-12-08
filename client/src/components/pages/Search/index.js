import React from 'react';
import * as queryString from 'query-string';
import { Redirect } from 'react-router-dom';

const Search = (props) => {
    const search = queryString.parse(props.location.search);
    if (search.q == null) return <Redirect to="/" />;
    return (
        <div className="content" /*style={{ backgroundImage: `url(https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUpJhujhQAvjWyEkzhf6Z3ChDyZHZChxm8Q_3C6818BjZB3TC6hZ6rW_EpKl4NSoA6QQF187BYhiwzTwd7lY79ERH6o6.jpg?r=a73)` }} */>

            <h3 className="search-result-title">Résultats pour: <span className="search-result-query">{search.q[0].toUpperCase() + search.q.slice(1)}</span></h3>
            <div className="rows">
                <div className="row">
                    <div className="row-container">
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row-container">
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row-container">
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row-container">
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row-container">
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;