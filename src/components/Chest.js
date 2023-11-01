import React from 'react'
import saif from '../images/saif.jpg'
import pdf from './resume.pdf'

function Chest() {
    return (
        <div className="container">
            <div className="nested-div">
                <div className="chest-content">
                    <p>HELLO!</p>
                    <h1>I'M SAIF ALI </h1>
                    <p>I am a Software developer and Translator!</p>
                    <p>My name is Saif Ali I am a web developer I've been coding for more than 3 years I am an expert in React, JavaScript, CSS, and HTML
                    and more... </p>
                    <div>
                    <button className="button" href="https://saifaliabdulhey.github.io/protfolio-edited/services.html">My Sub-Portfolio ‣</button>
                    <button className="btn-cv" target="_blank"><a href={pdf} >Download CV</a></button>
                    </div>
                </div>
                <div>
                    <img className="saif-img" src={saif} alt="saif" />
                </div>
            </div>
        </div>
    )
}

export default Chest
