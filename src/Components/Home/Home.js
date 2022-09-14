import React from 'react';
import Navigation from '../Navigation/Navigation';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <div>
                                
                <section className="home">

                <div className="image">
                    <img src={user} alt="User"/>
                </div>

                <div className="content">
                    <h3>hi, i am Sihab Uddin</h3>
                    <span>Web developer</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
                    <Link to="/about" className="btn"> about me <i className="fas fa-user"></i> </Link>
                </div>

                </section>

            </div>
        </div>
    );
};

export default Home;