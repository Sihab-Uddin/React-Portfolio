import React from 'react';
import Navigation from '../Navigation/Navigation';
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog4.jpg';
import blog5 from '../images/blog5.jpg';
import blog6 from '../images/blog6.jpg';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <Navigation/>
            <>
            
            
{/* <!-- blogs section starts  --> */}

<section class="blogs">

<h1 class="heading"> <span>my</span> blogs </h1>

<div class="box-container">

    <div class="box">
        <div class="image">
            <img src={blog1} alt="blog"/>
        </div>
        <div class="content">
            <div class="icons">
                <Link to=""> <i class="fas fa-calendar"></i> 21st may, 2021 </Link>
                <Link to=""> <i class="fas fa-user"></i> by admin </Link>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <Link to="" class="btn"> read more <i class="fas fa-link"></i> </Link>
        </div>
    </div>

    <div class="box">
        <div class="image">
        <img src={blog2} alt="blog"/>
        </div>
        <div class="content">
            <div class="icons">
                <Link to=""> <i class="fas fa-calendar"></i> 21st may, 2021 </Link>
                <Link to=""> <i class="fas fa-user"></i> by admin </Link>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <Link to="" class="btn"> read more <i class="fas fa-link"></i> </Link>
        </div>
    </div>

    <div class="box">
        <div class="image">
        <img src={blog3} alt="blog"/>
        </div>
        <div class="content">
            <div class="icons">
                <Link to=""> <i class="fas fa-calendar"></i> 21st may, 2021 </Link>
                <Link to=""> <i class="fas fa-user"></i> by admin </Link>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <Link to="" class="btn"> read more <i class="fas fa-link"></i> </Link>
        </div>
    </div>

    <div class="box">
        <div class="image">
        <img src={blog4} alt="blog"/>
        </div>
        <div class="content">
            <div class="icons">
                <Link to=""> <i class="fas fa-calendar"></i> 21st may, 2021 </Link>
                <Link to=""> <i class="fas fa-user"></i> by admin </Link>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <Link to="" class="btn"> read more <i class="fas fa-link"></i> </Link>
        </div>
    </div>

    <div class="box">
        <div class="image">
        <img src={blog5} alt="blog"/>
        </div>
        <div class="content">
            <div class="icons">
                <Link to=""> <i class="fas fa-calendar"></i> 21st may, 2021 </Link>
                <Link to=""> <i class="fas fa-user"></i> by admin </Link>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <Link to="" class="btn"> read more <i class="fas fa-link"></i> </Link>
        </div>
    </div>

    <div class="box">
        <div class="image">
        <img src={blog6} alt="blog"/>
        </div>
        <div class="content">
            <div class="icons">
                <Link to=""> <i class="fas fa-calendar"></i> 21st may, 2021 </Link>
                <Link to=""> <i class="fas fa-user"></i> by admin </Link>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <Link to="" class="btn"> read more <i class="fas fa-link"></i> </Link>
        </div>
    </div>

</div>

</section>

{/* <!-- blogs section ends --> */}

            </>
        </div>
    );
};

export default Blogs;