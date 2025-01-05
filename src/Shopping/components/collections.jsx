import React from 'react'

const Collections = (props) => {
  
  const { title,image1,image2,image3,image4,image5,image6 }=props.gentsFashion
  return (
    <div className='collection-sec'>
        <h2>
            {title}
        </h2>
      <div className='mensimg-box'> 
        <div className="menimages">
            <img src={image1} alt={title} />
        </div>
        <div className="menimages">
            <img src={image2} alt={title} />
        </div><div className="menimages">
            <img src={image3} alt={title} />
        </div><div className="menimages">
            <img src={image4} alt={title} />
        </div><div className="menimages">
            <img src={image5} alt={title} />
        </div>
        
        <div className="menimages">
            <img src={image6} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default Collections