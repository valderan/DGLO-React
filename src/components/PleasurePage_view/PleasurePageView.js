import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Item from '../Item';

import coffee_cup from '../PleasurePage_view/img/coffee_cup.jpg';

import './pleasurepage.sass';

export default class PleasurePageView extends React.Component {

    render() {

        const {items, isLoad} = this.props;

        return(
            <>
                <ContentPage>
                    {
                        items.map( (item, index) => {
                            return(
                                <Item key={index} item={item} loading={isLoad} />
                            )
                        })
                    }
                </ContentPage>
            </>
            
        ) 
    }

}



function ContentPage ({ children }) {
    return (
        <>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                 <Header />
                            </div>
                        </div>
                        <h1 className="title-big">For your pleasure</h1>
                    </div>
                </div>

                <section className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-2">
                                <img className="shop__girl" src={coffee_cup} alt="coffee cup"/>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About our goods</div>
                                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                    so questions. <br/>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                    is song that held help face.
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">

                                    {children}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
    )
}