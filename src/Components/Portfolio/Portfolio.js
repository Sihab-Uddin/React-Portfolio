import React from 'react';
import Navigation from '../Navigation/Navigation';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <Navigation/>
            <>
            
{/* <!-- portfolio section starts  --> */}

<section class="portfolio">

    <h1 class="heading"> <span>my</span> work </h1>

    <div class="box-container">

        <div class="box">
            <img src={img1} alt="img"/>
            <div class="content">
                <h3>project 01</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <Link to="">read more</Link>
            </div>
        </div>

        <div class="box">
            <img src={img2} alt="img"/>
            <div class="content">
                <h3>project 02</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <Link to="">read more</Link>
            </div>
        </div>
       
        <div class="box">
        `   <img src={img3} alt="img"/>
            <div class="content">
                <h3>project 03</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <Link to="">read more</Link>
            </div>
        </div>

        <div class="box">
            <img src={img4} alt="img"/>
            <div class="content">
                <h3>project 04</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <Link to="">read more</Link>
            </div>
        </div>

        <div class="box">
            <img src={img5} alt="img"/>
            <div class="content">
                <h3>project 05</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <Link to="">read more</Link>
            </div>
        </div>

        <div class="box">
            <img src={img6} alt="img"/>
            <div class="content">
                <h3>project 06</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <Link to="">read more</Link>
            </div>
        </div>

    </div>

    <Link to="" class="btn"> load more <i class="fas fa-redo"></i> </Link>
    
</section>

{/* <!-- portfolio section ends --> */}
            </>
        </div>
    );
};

export default Portfolio;