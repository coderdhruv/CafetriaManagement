import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../Hero';
import Products from '../Products';
import { productData, productDataTwo } from '../Products/data';
import Feature from '../Feature';
import Footer from '../Footer';

class LandingPage extends React.Component{
    render(){
        return (
            <Router>
                <GlobalStyle />
                <Hero />
                <Products heading='Choose your favorite' data={productData} />
                <Feature />
                <Products heading='Sweet Treats for You' data={productDataTwo} />
                <Footer />
            </Router>
        );
    }
}

export default LandingPage;