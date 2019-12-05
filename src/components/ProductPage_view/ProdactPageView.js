import React from 'react';
import pic2 from '../ProductPage_view/img/Beans_logo_dark.svg';


import Header from '../Header';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Spinner from '../Spinner';


export default class ProductPageView extends React.Component {

    render() {

        const { item, error, load } = this.props;
        
        let bodyString = <NotFound />

        if (!error) {
            bodyString = (load) ? <Spinner /> : <ItemInfo item={item} />
        }
        
        return(
            <>
                <PageContent>
                   {bodyString}
                </PageContent>

                <Footer />
            </>
        )
    }

}

function ItemInfo({item}) {

    const { country, price, url, description } = item;
    
    return(
        <>
            <div className="row">
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl img" src={url} alt="coffee_item"/>
                </div>
                <div className="col-lg-4">
                <div className="title">About it</div>
                    <img className="beanslogo" src={pic2} alt="Beans logo"/>
                    <div className="shop__point">
                        <span>Country:</span>
                        {country}
                    </div>
                    <div className="shop__point">
                        <span>Description:</span>
                        {description}
                    </div>
                    <div className="shop__point">
                        <span>Price:</span>
                        <span className="shop__point-price">{price}</span>
                    </div>
                </div>
            </div> 
        </>
    )
}


function PageContent({children}) {
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
                    {children}
                </div>
            </section>
        </>
    )
}