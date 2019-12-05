import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Item from '../Item';

import './coffeepage.sass';

export default class OurCoffeePageView extends React.Component {


    render () {

        const {items, isLoad, countryFilter, searchFilter} = this.props;

        return (        
            <>
                <ContentPage>

                    <Filter countryFilter={countryFilter} searchFilter={searchFilter}/>

                    <ProductsList> 
                        
                        {
                            items.map( (item, index) => {
                                return(
                                    <WrapLink key={index} isLoad={isLoad} item={item}/>
                                )
                            })
                        }

                    </ProductsList>

                </ContentPage>
            </>
        )
    }

}


function Filter({countryFilter, searchFilter}) {
    return (
    <div className="row">
        <div className="col-lg-4 offset-2">
            <form action="#" className="shop__search">
                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                <input onChange={ (e) => { searchFilter(e.target.value) }} 
                        onClick={ (e) => { searchFilter(e.target.value) }}
                        id="filter" type="text" 
                        placeholder="start typing here..." 
                        className="shop__search-input"/>
            </form>
        </div>
        <div className="col-lg-4">
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    <button onClick={() => countryFilter('Brazil')} className="shop__filter-btn">Brazil</button>
                    <button onClick={() => countryFilter('Kenya')} className="shop__filter-btn">Kenya</button>
                    <button onClick={() => countryFilter('Columbia')} className="shop__filter-btn">Columbia</button>
                </div>
            </div>
        </div>
    </div>
    )
}

function WrapLink({isLoad, item}) {
    const url = `/product/${item.name}`

    if (!isLoad) {
        return (
            <Link to={url} className="nolink">
                <Item item={item} isLoad={false} />
            </Link>
        )

    } else {

        return <Item item={item} isLoad={true} />
    }
}

function ProductsList({children}) {
    return (
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}

function ContentPage({children}) {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                             <Header />
                        </div>
                    </div>
                    <h1 className="title-big">Our Coffee</h1>
                </div>
            </div>

            <section className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-2">
                        <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"/>
                    </div>
                    <div className="col-lg-4">
                        <div className="title">About our beans</div>
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
                <div className="bottom30"></div>
                {children}
                
            </div>
            </section>
            <Footer />
        </>
    )
}