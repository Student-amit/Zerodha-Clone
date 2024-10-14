import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id="supportWrapper">
               <h4>Support Portal</h4>
               <a href="">Track Tickites</a>
            </div>
            <div className=' row p-3 m-3'>
                <div className='col-6  p-5 '>
                 <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                 <input placeholder='Eg.howmdo I activate F&O'/> <br/>
                 <a href="">Track account opening</a>
                 <a href=""> Track segment activation</a>
                 <a href=""> Intraday margins</a>
                 <a href="">  Kite user manual</a>
                </div>
                <div className='col-6  p-3 mt-5 mb-5'>
                 <h1>Featured</h1>
                 <ol>
                <li> <a href="">Current Takeovers and Delisting-January 2024</a></li>
                <li> <a href="">Latest Intraday leverages- MIS & CO</a></li>
                 </ol>
                </div>
                <div className='col-6  p-3 mt-5 mb-5'>

                </div>
            </div>
        </section>
     );
}

export default Hero;