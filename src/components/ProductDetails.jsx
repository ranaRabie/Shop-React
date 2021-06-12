import React, { Component } from 'react';
import axios from 'axios';
import MyContext from '../MyContext';

import PageTitle from './pageTitle';

class ProductDetails extends Component {
    
    state = { 
        product: [],
    }
    getProductDetails(){
        axios.get(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
        .then(res => {
            const product = res.data;
            this.setState({ product });
        });
    }
    componentDidMount(){
        this.getProductDetails();
    }
    
    render() { 
        return ( 
            <MyContext.Consumer>
                {context => (
                <React.Fragment>
                    <PageTitle title="Product Details" />
                    <section className="container">
                        <div className="product-details-container">
                            <div className="prod-img">
                                <img src={this.state.product.image} alt="" />
                            </div>
                            <h3>{this.state.product.title}</h3>
                            <div className="badge badge-secondary">{this.state.product.category}</div>
                            <div className="lead font-weight-bold text-primary mb-3">{this.state.product.price} $</div>
                            <div>{this.state.product.description}</div>
                            <div className="prod-actions mt-3">
                                <button className="btn btn-sm btn-dark" onClick={() => context.addProduct(this.state.product)}>Add to Cart</button>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}
 
export default ProductDetails;