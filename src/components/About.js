/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../media/img4.jpg';

class About extends React.Component{
    render(){
        return(
            <>
                <div className="main">
                    <section className="section-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla cum unde perferendis libero. Quae, dicta cum eos, voluptatum sunt enim ab consectetur, mollitia molestiae atque non cupiditate hic odio.
                    </section>
                    <section className="section-right">
                        <img src={img} className="section-right-img"/>
                    </section>
                </div>
            </>
        );
    }
}

export default About;