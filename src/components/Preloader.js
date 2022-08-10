import React from 'react'
import preloaderlogo from "../img/preloader.gif";

const Preloader = () => {
    return (
        <div id="preloader" className="loader-wrapper">
            <img src={preloaderlogo} />
        </div>
    )
}

export default Preloader