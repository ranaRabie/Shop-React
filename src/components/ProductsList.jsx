import React, { Component } from 'react';
import axios from 'axios';
import PageTitle from './pageTitle';
import Product from './Product';

class ProductsList extends Component {
    state = { 
        products: [],
    }
    getProductsList(){
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            const products = res.data;
            this.setState({ products });
        });
    }
    componentDidMount(){
        this.getProductsList();
    }
    render() { 
        return ( 
            <React.Fragment>
                <PageTitle title="Our Products" />
                <section className="container">
                    <div className="row">
                        {this.state.products.map((prod, index) => (
                            <div className="col-sm-6 col-md-4" key={index}>
                                <Product product={prod} />
                            </div>
                        ))}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 

// import Cars from './Cars';
// const ProductsList = () => (
//     <div className="product-list">
//         <h2>Product list:</h2>
//         <Cars />
//     </div>
// );

export default ProductsList;