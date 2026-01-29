import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
class Layout extends Component {
    render() {
        return (
            <div>
                <Header cartCount={this.props.cartCount}/>
                <Outlet/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;

