import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <Navigation/>
            <>
                
{/* <!-- contact section starts  --> */}

<section class="contact">

<h1 class="heading"> contact <span>me</span> </h1>

<div class="row">

    <div class="info-container">

        <h1>get in touch</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?</p>

        <div class="box-container">

            <div class="box">
                <i class="fas fa-map"></i>
                <div class="info">
                    <h3>address :</h3>
                    <p>Dhanmundi 32, Dhaka-1207</p>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-envelope"></i>
                <div class="info">
                    <h3>email :</h3>
                    <p>sihab.isharify@gmail.com</p>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-phone"></i>
                <div class="info">
                    <h3>number :</h3>
                    <p>+8801742-582121</p>
                </div>
            </div>

        </div>

        <div class="share">
            <Link to="" class="fab fa-facebook-f"></Link>
            <Link to="" class="fab fa-twitter"></Link>
            <Link to="" class="fab fa-instagram"></Link>
            <Link to="" class="fab fa-linkedin"></Link>
        </div>

    </div>

    <form action="">

        <div class="inputBox">
            <input type="text" placeholder="your name"/>
            <input type="number" placeholder="your number"/>
        </div>

        <div class="inputBox">
            <input type="email" placeholder="your email"/>
            <input type="text" placeholder="your subject"/>
        </div>

        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message" class="btn"/>

    </form>

</div>

</section>

{/* <!-- contact section ends --> */}

            </>
        </div>
    );
};

export default Contact;