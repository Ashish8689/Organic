import React from 'react';
import  './sectionheader.css';

function SectionHeader({title,para,image}) {
    return (
        <div className="section-header-container">
            <img src={image && image} alt="" />

            <h1 className="section-header-title">{title}</h1>
            <p className="section-header-para">{para}</p>
        </div>
    )
}

export default SectionHeader
