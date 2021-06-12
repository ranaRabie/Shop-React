import React from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';
import PageTitle from './pageTitle';

const Receipt = () => {
    const context = React.useContext(MyContext);
    const cartProducts = context.cart.products;
    return (
        <React.Fragment>
            <PageTitle title="Thank You" />
            <section className="container">
                <h6 className="font-weight-bold">Thank you for Shopping from our website</h6>
                <p>We'll wait you again</p>
                <div id="totalBox">
                    <div className="totalBoxInner bg-light">
                        <h5 className="font-weight-bold text-capitalize">Receipt</h5>
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
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className="btn btn-lg btn-dark">Back to Shop</Link>
                </div>
            </section>
            
        </React.Fragment>
     );
}
 
export default Receipt;