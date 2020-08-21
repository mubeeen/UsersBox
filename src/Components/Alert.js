import React from 'react';

function Alert()
{
    return (
        [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                This is a {variant} Welcome to Users List!
                </Alert>
          ))
    )
}


export default Alert