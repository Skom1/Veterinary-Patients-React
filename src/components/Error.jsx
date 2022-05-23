import React from 'react';

function Error({children}) {
    return (
        <div className="text-red-700 text-center uppercase font-bold rounded-xl">
            {children}
        </div>
    );
}

export default Error;