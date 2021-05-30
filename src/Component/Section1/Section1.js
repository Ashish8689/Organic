import React from 'react'
import './section1.css'

function Section1() {
    return (
        <div className="section-1">
            <div className="container">
                <div className="section-flex">
                    <div className="section-left">
                        <div className="section-content">
                            <h2>Healthy life with</h2>
                            <h1>Nature Organic</h1>
                            <p>Vegetables are the edible parts of a plant that is
                                usedin cooking or can be eaten now.
                            </p>

                            <button>Explore Now</button>
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="section-image-container">
                            <img src="image/cover.png" className="cover-leaf" alt="organic" />
                            
                            <div className="section-inner-image-container">
                               <img src="image/logo2.png" className="cover-logo" alt="organic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
