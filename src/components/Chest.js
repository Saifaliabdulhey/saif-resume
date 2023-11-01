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
                    <button className="button">Hire me</button>
                    <button className="btn-cv"><a href={pdf} target="_blank">Download CV</a></button>
                    <button className="btn-cv"><a src="https://saifaliabdulhey.github.io/protfolio-edited/index.html" target="_blank">My Sub-Portfolio ‣</a></button>
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
