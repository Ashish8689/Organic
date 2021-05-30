import React from 'react'
import './section5.css'
import SectionHeader from '../SectionHeader/SectionHeader'

function Section5() {
    return (
        <div className="section-5">
            <div className="container">
                <SectionHeader 
                    title="Subscribe to Our Newsletter" 
                    para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, dolores illum labore natus consequatur placeat!" 
                />


                <div className="form-container">
                    <form>
                        <input type="text" className="input-form" placeholder="Enter your email address" />
                        <input type="button" className="input-submit" value="Subscribe" />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Section5
