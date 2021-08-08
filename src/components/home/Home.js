import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BannerBgImg1 from "../../assets/img/Frame.jpg";
import './home.css'

export const Home = () => (

<div className="container-fluid p-0 main__container__bannerInnerItem" style={{backgroundImage: `url(${BannerBgImg1})` }}> 

    <div className="container home__container">
        <div className="row home__row">
        <div className="col home__container__left"></div>
        <div className="col home__container__right">
        <div className="row">
        <h3>Way to success <br />
        <span> Crypto Arbitrage</span> with OrbitBot<br />
        3...2...1...
    </h3>

    <button className="home__button"><Link to='/coins'>Go now</Link></button>
    </div>
    </div>
    </div>
    </div>
            </div>

    
  
)   