import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import NotFound from '../NotFound';

function PageNotFound() {
  return (
    <>
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                     <Header />
                </div>
            </div>
            <h1 className="title-big">Sorry  :-( </h1>
        </div>
    </div>
    <NotFound />
    <Footer />
    </>
  )
}

export default PageNotFound;