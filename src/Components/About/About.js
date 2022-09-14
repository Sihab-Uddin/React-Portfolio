import React from 'react';
import Navigation from '../Navigation/Navigation';
import icon1 from '../images/icon-1.png';
import icon2 from '../images/icon-2.png';
import icon3 from '../images/icon-3.png';
import icon4 from '../images/icon-4.png';
import icon5 from '../images/icon-5.png';
import icon6 from '../images/icon-6.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Navigation/>
            <>
                
{/* <!-- about section starts  --> */}

<section className="about">

    <h1 className="heading"> about <span>me</span> </h1>

    <div className="row">

        <div className="info-container">

            <h1>personal info</h1>

            <div className="box-container">

                <div className="box">
                    <h3> <span>name : </span> Sihab Uddin </h3>
                    <h3> <span>age : </span> 26 </h3>
                    <h3> <span>email : </span> sihab.isharify@gmail.com </h3>
                    <h3> <span>address : </span> Dhanmundi 32, Dhaka-1207 </h3>
                </div>
    
                <div className="box">
                    <h3> <span>freelance : </span> available </h3>
                    <h3> <span>skill : </span> Web Developer </h3>
                    <h3> <span>experience : </span> 2 years </h3>
                    <h3> <span>language : </span> Bangla, english </h3>
                </div>

            </div>

            <Link to="" className="btn"> download CV <i className="fas fa-download"></i> </Link>

        </div>

        <div className="count-container">

            <div className="box">
                <h3>2+</h3>
                <p>years of experience</p>
            </div>

            <div className="box">
                <h3>450+</h3>
                <p>happy clients</p>
            </div>

            <div className="box">
                <h3>390+</h3>
                <p>project completed</p>
            </div>

            <div className="box">
                <h3>10+</h3>
                <p>awards won</p>
            </div>

        </div>

    </div>

</section>
{/* 
<!-- about section ends -->

<!-- skills section starts  --> */}

<section className="skills">

    <h1 className="heading"> <span>my</span> skills </h1>

    <div className="box-container">
        <div className="box">
            <img src={icon1} alt="icon1"/>
            <h3>html</h3>
        </div>
        <div className="box">
            <img src={icon2} alt="icon1"/>
            <h3>css</h3>
        </div>
        <div className="box">
            <img src={icon3} alt="icon1"/>
            <h3>javascript</h3>
        </div>
        <div className="box">
            <img src={icon4} alt="icon1"/>
            <h3>sass</h3>
        </div>
        <div className="box">
            <img src={icon5} alt="icon1"/>
            <h3>jquery</h3>
        </div>
        <div className="box">
            <img src={icon6} alt="icon1"/>
            <h3>react.js</h3>
        </div>
    </div>

</section>

{/* <!-- skills section ends -->

<!-- education section starts  --> */}

<section className="education">

    <h1 className="heading"> <span>my</span> education </h1>

    <div className="box-container">

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2015 - 2016</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2016 - 2017</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2017 - 2018</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2018 - 2019</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2019 - 2020</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2020 - 2021</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

    </div>

</section>

{/* <!-- education section ends --> */}
            </>
        </div>
    );
};

export default About;