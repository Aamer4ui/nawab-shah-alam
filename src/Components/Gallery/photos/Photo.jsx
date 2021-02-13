import React from 'react';
import './img.css';
import {Navbar, Image} from 'react-bootstrap';


const Photo = () => {
    return (
        <div>
               {/* <Image src="./Assest/republic1.jpg" className="main-header--image"/>    */}
               <Image src="./Assest/0b770e8f9c2fd196cd240dd62bafa4da.jpg" className="main" />
               <Image src="./Assest/97f0adea3bbd48f36125390661016147.jpg" className="main" />
               <Image src="./Assest/cdb37d47a086e62528e6296369437700.jpg" className="main" />
               <Image src="./Assest/f34205ef2c142d4f31f5ad124b0f09b9.jpg" className="main1" />

               
        </div>
    );
};

export default Photo;