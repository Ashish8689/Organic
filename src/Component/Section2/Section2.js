import React from 'react'
import './section2.css'
import SectionHeader from '../SectionHeader/SectionHeader'

function Section2() {
    return (
        <div className="section-2">
            <div className="container">
                <SectionHeader 
                    title="Welcome to Nature" 
                    image="image/small-leaf.png" 
                    para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolores illum labore natus consequatur placeat!" 
                />


                <div className="block-grid">
                    <div className="block">
                            <img src="image/b1.png" alt="Organic" />
                    </div>
                    <div className="block">
                            <img src="image/b2.png" alt="Organic" />
                    </div>
                    <div className="block">
                            <img src="image/b1.png" alt="Organic" />
                    </div>
                    <div className="block">
                            <img src="image/b1.png" alt="Organic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
