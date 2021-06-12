import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import MyContext from '../MyContext';

const NavBar = (props) => {
    const cartCounter = React.useContext(MyContext).cart.count;
    const location = useLocation();
    console.log(location.pathname);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand font-weight-bold" to="/">Shop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} to="/cart">
                            Shopping Cart 
                            <span className="badge badge-primary mx-2">{cartCounter}</span>
                        </Link>
                    </li>
                </ul>
                
            </div>
            {/* <MyContext.Consumer>
        {context => (
            <React.Fragment>
                <h4>Cars:</h4>
                {context.cartCounter}
            </React.Fragment>
        )}
    </MyContext.Consumer> */}
        </nav>
      );
}
 
export default NavBar;