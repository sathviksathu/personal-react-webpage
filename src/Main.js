import React, { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Content from "./contact";
import { motion } from 'framer-motion';
import logo from "./assets/logo.png";
import ReactRotatingText from 'react-rotating-text';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


function Main (props){

const [aboutMe, setAboutMe] = useState(true);
const [contact, setContact] = useState(false);

const handleAboutClick = props => {
    setAboutMe(true);
    setContact(false);
};

const handleContactClick = props => {
    setAboutMe(false);
    setContact(true);
};
    return( 
        <MuiThemeProvider theme={darkTheme}>
    <div style={{flexDirection:"column"}}>
        <HashRouter>
            <div>
           
                <div className="header-div">
                    <div className="header-static">
                        <motion.div
                            animate={{rotateX:360}}
                            transition={{duration:0.75}}
                            whileHover={{ scale:1.2}}>
                                <img className="logo" src= { logo } />
                        </motion.div>
                        <p><ReactRotatingText items={['EAT.CODE.REPEAT']}  typingInterval={200} /></p>
                    </div>
                    
                        <ul className="header-nav">
                           <motion.div whileHover={{scale:1.1}}><li><NavLink exact to="/" > <Button onClick={ handleAboutClick } variant={ aboutMe? "contained":"outlined"} color="primary" textColor="#fff">About Me</Button> </NavLink></li></motion.div>
                            <motion.div whileHover={{scale:1.1}}><li><NavLink to="/contact"><Button onClick={ handleContactClick } variant={contact? "contained":"outlined"} color="primary">Contact</Button></NavLink></li></motion.div>
                            
                        </ul>
                    
                    
                   
                </div>  
               
                <motion.div
                    initial= {{scale:0.75}}
                    animate= {{scale:1}}
                    transition={{duration:0.75}}>
                <div className="content">      
                <motion.div
                initial={{scale:0.75}}
                animate={{ scale: 1 }}
                transition={{ duration: 0.75 }}>   
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Content}/>
                </motion.div>
                </div>
                </motion.div>
            </div>
        </HashRouter>
    </div>
    </MuiThemeProvider>
    );
};

export default Main;



const darkTheme = createMuiTheme({

    palette: {
        type: 'dark',
        action:{
            selected:"#18ffff",
            active: "#18ffff",
            hover:"red",
            selected: '#18ffff'
        },
      primary: {
        light: "#18ffff",
        main: "#18ffff",
        dark: "#18ffff"
    
      },
      secondary: {
          light: "#84ffff",
          main: "#84ffff",
          dark: "#84ffff"
      },
      

    
}
  });


  