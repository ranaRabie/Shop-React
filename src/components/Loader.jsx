import React from 'react';
import MyContext from '../MyContext';

const Loader = () => {
    const context = React.useContext(MyContext);
    const loaderCheck = context.loader;
    return (
        <React.Fragment>
            {loaderCheck === true &&
            <div className="loader">
                <img src="/loader.gif" alt="" />
            </div>
            }
        </React.Fragment>
    );
}
 
export default Loader;