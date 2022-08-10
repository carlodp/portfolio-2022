import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preloader from './Preloader';

const Pagecontent = ({ pageContent }) => {

    // const [loading, setLoading] = useState(true);
    // const spinner = document.getElementById("preloader");
    // if(spinner) {
    //     setTimeout(() => {
    //     spinner.style.display = "none";
    //     setLoading(false);
    //     }, 1000);
    // }

    const [ready, setReady] = useState(false);
    useEffect(()=>{
      console.log('mounted');
        setTimeout(() => {
            console.log('loaded');
            setReady(true);
        }, 2000);
      },[]);

  return (
    ready ? (
        <div className="content">
            <Navbar />
            <main>
                {pageContent}
            </main>
            <Footer />
        </div>
    ) : (
        <Preloader />
    )
  );
};

export default Pagecontent;
