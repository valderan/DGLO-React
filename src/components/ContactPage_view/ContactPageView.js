import React from 'react';
import pic1 from '../ContactPage_view/img/pic-1.png';
import pic2 from '../ProductPage_view/img/Beans_logo_dark.svg';
import arrow from '../ContactPage_view/img/back-arrow.png';

import './contactpage.sass';

import Header from '../Header';
import Footer from '../Footer';

export default class ContactPageView extends React.Component {
    state = {
        upload: false
    }
    

    render() {
        

        const { upload } = this.state;

        const uploadText =  (
            <> 
                <div className="shop__point">
                   <span className="confirm-text">
                       Thank you so much<br/>We contact you as soon as posible
                   </span>
                </div>
                <div className="picto">
                   <img  src={pic1} alt="" />
                </div>  
                <div className="btn-block">
                   <button className="submit-btn">
                       Another? <img src={arrow} alt='' />
                   </button>
                </div>
            </> 
        );
       
        const formText = (
            <>
                <div className="contact-form">
                    <div className="form-string">
                        <p>
                            <span className="form-label">Name </span>
                            <span className="necessarily">*</span>
                        </p>
                        <input type="text" />
                    </div>  
                    <div className="form-string">
                        <p>
                            <span className="form-label">E-mail</span>
                            <span className="necessarily">*</span>
                        </p>    
                        <input type="text" />
                        
                    </div>
                    <div className="form-string">
                        <p>
                            <span className="form-label">Phone</span>
                        </p>
                        <input type="text" placeholder=" +7(___) ___-____"/>
                    </div>  
                    <div className="form-string-area">
                        <p>
                            <span className="form-label">Your message</span>
                            <span className="necessarily">*</span><br/>
                        </p>
                    </div> 
                    <div className="form-string-area">
                        <textarea class="textaria" rows="3"></textarea>
                        
                    </div>
                    <div className="btn-block">
                    
                    <div className="form-string-area">
                        <button className="submit-btn">
                            Send us
                        </button>
                    </div>
                    
                </div>
                        
                </div>
            </>
        );

        const wrapText = upload ? uploadText : formText;

        return(
           <>   
                <Wrap text={wrapText} />
           </> 
        )
    }
}


function Wrap({ text }) {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                             <Header />
                        </div>
                    </div>
                    <h1 className="title-big">Contact us</h1>
                </div>
            </div>
            <section className="wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="title">Tell us about your tastes</div>
                        <img className="beanslogo" src={pic2} alt="Beans logo"/>
                            {text}                 
                        </div> 
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
