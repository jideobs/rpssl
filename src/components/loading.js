import React from 'react';

const loading = ({ show }) => {
    let loading = null;
    if (show) {
        loading = <div className="loading d-flex align-items-center justify-content-center">Loading...</div>;
    }

    return loading;
}

export default loading;
