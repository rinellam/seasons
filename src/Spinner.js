import React from  'react';

const Spinner = (props) => {

    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                <h2>{props.message}</h2>
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};



export default Spinner;