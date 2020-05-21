import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaFilePdf } from 'react-icons/fa';

class Footer extends React.Component{
    render(){
    return(
    <div className="footer-div" style = {{width:'100%', display:'flex', justifyContent:"center", alignItems:"center"}}>
     <ul className="footer" >
        <li><a href= "https://github.com/sathviksathu" target="_blank"><FaGithub /> Github </a></li>
        <li><a href="https://www.linkedin.com/in/sathvik-sanagavarapu-77330a98/" target="_blank"> <FaLinkedin /> LinkedIn </a></li>
        <li><a href="https://www.facebook.com/sathvik.sathu.7/" target="_blank"> <FaFacebook /> Facebook </a></li>
        <li><a href="https://sathvik-resume.s3.ap-south-1.amazonaws.com/Resume.pdf" target="_blank"><FaFilePdf /> Resume </a></li>
    </ul>
</div>
);
}
};

export default Footer;