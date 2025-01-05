import React from 'react'

function Womenfashion(props) {
    const{title,image2,image3,image4,image5,image6}=props.womenFashion
  return (
    <div>
        <div className="women-banner">
            <img src="assets/women/LadiesBanner.gif" alt="" />
        </div>
        <h2>
            {title}
        </h2>
        
        <div className="women-box">
            <div className="womenimages">
            <img src="/assets/women/1.jpg" alt={title} />

            </div>
            <div className="womenimages">
                <img src={image2} alt={title} />
            </div>
            <div className="womenimages">
                <img src={image3} alt={title} />
            </div>
            <div className="womenimages">
                <img src={image4} alt={title} />
            </div>
            <div className="womenimages">
                <img src={image5}alt={title} />
            </div>
            <div className="womenimages">
                <img src={image6} alt={title} />
            </div>
        </div>
    </div>
  )
}

export default Womenfashion