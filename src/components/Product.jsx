import React from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';

const Product = (props) => {
    return ( 
        <MyContext.Consumer>
            {context => (
            <React.Fragment>
                <div className="product-item">
                    <Link to={`/product/${props.product.id}`}  className="prod-img">
                        <img src={props.product.image} alt="" />
                    </Link>
                    <h4><Link to={`/product/${props.product.id}`}>{props.product.title}</Link></h4>
                    <div className="lead font-weight-bold text-primary mb-3">{props.product.price} $</div>
                    <div className="prod-actions">
                        <button className="btn btn-sm btn-dark" onClick={() => context.addProduct(props.product)}>Add to Cart</button>
                    </div>
                </div>
            </React.Fragment>
            )}
        </MyContext.Consumer>
     );
}
 
export default Product;