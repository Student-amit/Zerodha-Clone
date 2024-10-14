import React from 'react';

function RightSection({
    imageUrl,
    productName,
    ProductDescription,
    learnMore}) {
    return ( 
        <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a href={learnMore}>
              learnMore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
     );
}

export default RightSection;