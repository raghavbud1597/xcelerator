import React from 'react';
import ErrorImg from './images/error.png'

export default function Error() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <img src={ErrorImg} alt="Error image" className="h-100 w-100"/>
        </div>
    )
}
