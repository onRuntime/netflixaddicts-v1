import React from 'react'

const Home = () => {
    return (
        <div className="content" style={{ backgroundImage: `url(https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUpJhujhQAvjWyEkzhf6Z3ChDyZHZChxm8Q_3C6818BjZB3TC6hZ6rW_EpKl4NSoA6QQF187BYhiwzTwd7lY79ERH6o6.jpg?r=a73)` }} >
            <div className="featured">
                <div className="featured-content">
                    <h1 className="featured-header">La Casa de Papel</h1>
                    <p className="featured-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iste similique accusamus est nobis eveniet.</p>
                    <a className="btn btn-gray" href="#"><i className="ri-eye-fill"></i> Résumé</a>
                </div>
            </div>
            <div className="rows">
                <div className="row">
                    <a className="row-header" href="#">Thrillers</a>
                    <div className="row-container">
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a className="row-header" href="#">Action et aventure</a>
                    <div className="row-container">
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">

                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a className="row-header" href="#">Documentaires</a>
                    <div className="row-container">
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">

                        </div>
                        <div className="row-item">
                            <img className="row-item-img" src="https://picsum.photos/300/200" alt="Unknow" />
                        </div>
                        <div className="row-item">
                        </div>
                        <div className="row-item">
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Home;