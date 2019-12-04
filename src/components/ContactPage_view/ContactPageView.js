import React from 'react';


import pic1 from '../ContactPage_view/img/pic-1.png';
import pic2 from '../ProductPage_view/img/Beans_logo_dark.svg';
import arrow from '../ContactPage_view/img/back-arrow.png';

import './contactpage.sass';

import Header from '../Header';
import Footer from '../Footer';
import Spinner from '../Spinner';
import Error from '../Error';
import { Fade } from 'reactstrap';
import InputMask from 'react-input-mask';

export default class ContactPageView extends React.Component {
    state = {
        upload: false,
        loading: false,
        error: false,
        notifyStatus: false,
        notifyString: 'no data',
        phone: '7', 
        name:'',
        email:'',
        message:''
    }
    
    phoneChange = (e) => {
        this.setState({notifyStatus:false});
        this.setState({phone: e.target.value});
    }

    nameChange = (e) => {
        this.setState({notifyStatus:false});
        this.setState({name: e.target.value});
    }

    emailChange = (e) => {
        this.setState({notifyStatus:false});
        this.setState({email: e.target.value});
    }

    messageChange = (e) => {
        this.setState({notifyStatus:false});
        this.setState({message: e.target.value});
    }

    submit = () =>{

        this.setState({notifyStatus: false})
        const { name, phone, email, message } = this.state;
        const { CoffeeService } = this.props;

        if (name.length === 0) {
            this.setState({notifyStatus: true, notifyString: 'Зполните поле: NAME'});
            return
        }

        if (email.length === 0) {
            this.setState({notifyStatus: true, notifyString: 'Зполните поле: E-mail'});
            return
        }
        
        if (message.length === 0) {
            this.setState({notifyStatus: true, notifyString: 'Зполните поле: MESSAGE'});
            return
        }

        this.setState({loading: true});
        const messageBody = { name, email, phone, message };
        CoffeeService.uploadMessage(messageBody)
                    .then(res => {
                        this.setState({
                            upload: true,
                            loading: false,
                            error: false,
                            notifyStatus: false,
                            notifyString: '',
                            phone: '7', 
                            name:'',
                            email:'',
                            message:''
                        })
                    }) 
                    .catch(err => {
                        console.error(err);
                        this.setState({
                            upload: false,
                            loading: false,
                            error: false,
                            notifyStatus: true,
                            notifyString: 'Что-то пошло не так! Попробуйте еще раз!'})
                    })


    }

    render() {
    
        const { upload, loading, error, notifyStatus, notifyString, name, phone, email, message } = this.state;

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
                    <button onClick={() => {
                       this.setState({upload: false})
                    }} className="submit-btn">
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
                        <input type="text" value={name} onChange={this.nameChange}/>
                    </div>  
                    <div className="form-string">
                        <p>
                            <span className="form-label">E-mail</span>
                            <span className="necessarily">*</span>
                        </p>    
                        <input type="text" value={email} onChange={this.emailChange}/>
                        
                    </div>
                    <div className="form-string">
                        <p>
                            <span className="form-label">Phone</span>
                        </p>
                        <InputMask mask="+9(999) 999-9999" maskplaceholder="-" value={phone} onChange={this.phoneChange}/>
                    </div>  
                    <div className="form-string-area">
                        <p>
                            <span className="form-label">Your message</span>
                            <span className="necessarily">*</span><br/>
                        </p>
                    </div> 
                    <div className="form-string-area">
                    <textarea className="textaria" rows="3" onChange={this.messageChange} value={message} />
                        
                    </div>
                    <div className="btn-block">
                    
                    <div className="form-string-area">
                        <button onClick={this.submit} className="submit-btn">Send us</button>
                    </div>
                    <div>
                        <Fade in={notifyStatus} tag="h5" className="notify">
                                {notifyString}   
                        </Fade>
                    </div>                    
                </div>
                        
                </div>
            </>
        );

        let wrapText = upload ? uploadText : formText;
        wrapText = loading ? <Spinner /> : wrapText;
        wrapText = error ? Error : wrapText;
 
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
