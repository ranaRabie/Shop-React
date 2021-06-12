import React from 'react';

const PageTitle = (props) => {
    return ( 
        <section id="pg-tit">
            <div className="container">
                <h1>{props.title}</h1>
            </div>
        </section>
     );
}
 
export default PageTitle;