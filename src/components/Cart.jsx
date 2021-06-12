import React from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';
import PageTitle from './pageTitle';


const Cart = () => {
    const context = React.useContext(MyContext);
    const cartProducts = context.cart.products;
    return (
        <React.Fragment>
            <PageTitle title="My Shopping Cart" />
                {cartProducts.length === 0 
                    ? (
                        <section className="container no-cart text-center">
                            <h4 className="font-weight-bold text-capitalize mb-3">No Ptoducts in your Cart</h4>
                            <Link to="/" className="btn btn-lg btn-dark">Back to Shop</Link>
                        </section>
                    )
                    : ''
                }
                
                {cartProducts.length > 0 &&
                    <section id="cart" className="container">
                        <div className="table-responsive">
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                    <th>image</th>
                                    <th>title</th>
                                    <th>category</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th>total</th>
                                    <th>remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartProducts.map(p => (
                                        <tr key={p.id}>
                                            <td>
                                                <img src={p.image} alt="" />
                                            </td>
                                            <td>{p.title}</td>
                                            <td>{p.category}</td>
                                            <td>
                                                <div className="prod-counter">
                                                    <button className="btn btn-sm btn-light" onClick={() => context.decreamentCount(p)}><i className="fas fa-minus"></i></button>                                                        
                                                    <div>{p.count}</div>
                                                    <button className="btn btn-sm btn-light" onClick={() => context.increamentCount(p)}><i className="fas fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td>{p.price} $</td>
                                            <td>{p.price * p.count} $</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger" onClick={() => context.removeProduct(p)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="totalBox">
                            <div className="totalBoxInner bg-light">
                                <h5 className="font-weight-bold text-capitalize">order summary</h5>
                                <table className="w-100">
                                    <tbody>
                                        {cartProducts.map(p => (
                                            <tr key={p.id}>
                                                <td><img src={p.image} alt="" /> x {p.count}</td>
                                                <td>{p.price * p.count} $</td>
                                            </tr>
                                        ))}
                                        <tr className="total-row">
                                            <td><b>Items:</b> {context.cart.count}</td>
                                            <td><b>Total:</b> {context.cartTotal}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/receipt" className="btn btn-dark w-100 font-weight-bold">Proceed</Link>
                            </div>
                        </div>
                    </section>
                }
                
            
        </React.Fragment>  
    );
}
 
export default Cart;