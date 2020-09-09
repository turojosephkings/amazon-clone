import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg" alt=""></img>
                
                <div className="home__row">
                    <Product id="12321341" title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={3} />
                    <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71V2DtObsPL._AC_SL1500_.jpg"/>
                </div>    

                <div className="home__row">
                    <Product id="4903850" title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch)" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/81Iu41zFPwL._AC_SL1500_.jpg" />
                    <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SL1000_.jpg" />
                    <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg" />
                </div>          

                <div className="home__row">
                <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/81vT0S30GML._AC_SL1500_.jpg" />
                </div>  

            </div>
        </div>
    )
}

export default Home
