import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Spinner from '../Spinner';

import './mainpage.sass';

function MainPageView({items, isload}) {

    

    return(
        <>
            <PreviewBlock />
            
            <AboutBlock />
        
            <BestBlock>
                
                {
                    items.map( (item, index) => {
                       
                        return(
                            <BestItem key={index} item={item} loading={isload} />
                        )
                    })
                }

            </BestBlock>
                
            <Footer />
        </>
    )
}

export default MainPageView;

function BestItem({item, loading}) {
    const { name, url, price } = item;
    const productUrl = `/product/${name}`
    return (
        <> 
        <div className="best__item">
            {(!loading) ?
            <>
                <Link to={productUrl} className="nolink">
                    <img src={url} alt="coffee" />
                    <div className="best__item-title">
                        {name}    
                    </div>
                    <div className="best__item-price">{price}</div>
                </Link>
            </>        
            : <Spinner />}
        </div>
        </>
    )
}

function BestBlock({children}) {
    return (
        <section className="best">
            <div className="container">
                <div className="title">Our best</div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="best__wrapper">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function PreviewBlock() {
    return (
        <div className="preview">
           <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <Header />
                    </div> 
                
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <h1 className="title-big">Everything You Love About Coffee</h1>
                     <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"/>
                     <div className="preview__subtitle">We makes every day full of energy and taste</div>
                     <div className="preview__subtitle">Want to try our beans?</div>
                     <Link to="/ourcoffee" className="preview__btn"> 
                        <span>More</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function AboutBlock() {
    return(
        <section className="about">
        <div className="container">
                <div className="row">
                <div className="col-lg-6 offset-lg-3">
                        <div className="title">About Us</div>
                        <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo" />
                        <div className="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br/><br/>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}