import React from 'react'
import './section6.css'
import SectionHeader from '../SectionHeader/SectionHeader'

function Section6() {
    return (
        <div className="section-6">
            <div className="container">
                <SectionHeader 
                    title="Read Our Blog" 
                    image="image/small-leaf.png" 
                    para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolores illum labore natus consequatur placeat!" 
                />


                <div className="block-grid">

                    <div className="block block-product">
                        <div className="block-img-container">
                            <img src="image/p1.png" alt="Organic" />
                        </div>
                        <div className="block-content">
                            <h1 className="block-title">Blog Post One</h1>
                            <p className="block-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum!</p>
                            <div className="block-button-container">
                              <a href="#" className="block-link">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="block block-product">
                        <div className="block-img-container">
                            <img src="image/p2.png" alt="Organic" />
                        </div>
                        <div className="block-content">
                            <h1 className="block-title">Blog Post One</h1>
                            <p className="block-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum!</p>
                            <div className="block-button-container">
                              <a href="#" className="block-link">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="block block-product">
                        <div className="block-img-container">
                            <img src="image/p3.png" alt="Organic" />
                        </div>
                        <div className="block-content">
                            <h1 className="block-title">Blog Post One</h1>
                            <p className="block-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum!</p>
                            <div className="block-button-container">
                              <a href="#" className="block-link">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Section6
