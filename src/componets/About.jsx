import React from 'react';
import a from './images/about2.png';

function About() {
    return (
        <>
          
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <img src={a} style={{ width: '100%', height: 'auto' }} alt="About" />   
                <div style={{ position: 'absolute', color: 'white', fontSize: '24px', fontWeight: 'bold', textAlign: 'center', top: '20%' }}>  
                </div>
            </div>
            <div className="col-md-6 context">
                <h3>We Provide</h3>
                <h2>Total Health Care</h2>
                <p className="aboutp">
                    We provide a vast range of medical services, so every person could have the opportunity to receive high-quality medical help.
                </p>
                <p className="aboutp">
                    Caring Doc Medical Clinic is committed to providing the highest quality patient care. Our dedication to excellence, compassion, and innovation is rooted in our devotion to the art and science of healing, which supports every aspect of our mission.
                </p>
                <p className="endp" style={{ fontWeight: 'bold' }}>
                    We do our best to help you and provide the highest level of health care.
                </p>

                <button type="button" className="btn btn-secondary aboutbt">
                    Learn More
                </button>
            </div>
        </>
    );
}

export default About;
