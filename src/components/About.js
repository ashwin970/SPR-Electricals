/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../media/img4.jpg';
import cl1 from '../media/cardimages/card-logo1.png';
import cl2 from '../media/cardimages/card-logo2.png';
import cl3 from '../media/cardimages/card-logo3.png';
import pi1 from '../media/pimg1.jpg';
import 'jquery-parallax.js';

class About extends React.Component{
    render(){
        return(
            <>
            <div className="keeper">
                <div className="main">
                    <section className="section-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.
                    </section>
                    <section className="section-right">
                        <img src={img} className="section-right-img"/>
                    </section>
                </div>

                <div class="parallax-window" data-parallax="scroll"
                data-z-index="1" data-image-src={pi1}>
                        
                    <p className="info">
                        <h3>SPR Electricals</h3>
                    </p>

                </div>

                <div className="container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={cl1} className="cl1"/>
                        </div>
                        <div className="content">
                            <h5>No.1 Dealer</h5>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <img src={cl2} className="cl1"/>
                        </div>
                        <div className="content">
                            <h5>Good Products</h5>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <img src={cl3} className="cl1"/>
                        </div>
                        <div className="content">
                            <h5>Ideal Price</h5>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default About;