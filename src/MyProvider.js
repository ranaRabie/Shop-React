import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
    state = {
        cartTotal: 0,
        loader: false,
        cart: {
            count: 0,
            total: 0,
            products: []
        },
    };
    calculateTotal(){
        let cartTotal = 0;
        this.state.cart.products.forEach(p => {
            const pPrice = p.price * p.count;
            cartTotal += pPrice;
        });
        this.setState({ cartTotal });
    }
    enableLoader() {
        this.setState({ loader: true });
    }
    disableLoader() {
        setTimeout(() => {
            this.setState({ loader: false });
        }, 1000);
    }
    render() {
        return (
            <MyContext.Provider
                value={{
                    cart: this.state.cart,
                    cartTotal: this.state.cartTotal,
                    loader: this.state.loader,
                    addProduct: product => {
                        this.enableLoader();

                        const cart = Object.assign({}, this.state.cart);
                        cart.count++;

                        const PinCart = cart.products.find(p => p.id === product.id);

                        if(PinCart !== undefined){    
                            const prodIndex = cart.products.indexOf(PinCart);
                            cart.products[prodIndex].count++;
                        }else{
                            product.count = 1;
                            cart.products.push(product);
                        }
                        this.calculateTotal();
                        this.setState({
                            cart
                        });
                        this.disableLoader();
                    },
                    removeProduct: product => {
                        this.enableLoader();
                        const cart = Object.assign({}, this.state.cart);
                        cart.count = cart.count - product.count;

                        const PinCart = cart.products.find(p => p.id === product.id);
                        const prodIndex = cart.products.indexOf(PinCart);
                        cart.products.splice(prodIndex, 1);
                        this.calculateTotal();
                        this.setState({
                            cart
                        });
                        this.disableLoader();
                    },
                    increamentCount: product => {
                        this.enableLoader();
                        const cart = Object.assign({}, this.state.cart);
                        cart.count++;

                        const PinCart = cart.products.find(p => p.id === product.id);

                        const prodIndex = cart.products.indexOf(PinCart);
                        cart.products[prodIndex].count++;
                        this.calculateTotal();
                        this.setState({
                            cart
                        });
                        this.disableLoader();
                    },
                    decreamentCount: product => {
                        this.enableLoader();
                        const cart = Object.assign({}, this.state.cart);
                        cart.count--;

                        const PinCart = cart.products.find(p => p.id === product.id);
                        const prodIndex = cart.products.indexOf(PinCart);

                        if(PinCart.count === 1){
                            cart.products.splice(prodIndex, 1);
                        }else{
                            cart.products[prodIndex].count--;
                        }
                        this.calculateTotal();
                        this.setState({
                            cart
                        });
                        this.disableLoader();
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;