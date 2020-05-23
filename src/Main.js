import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Stuff from "./stuff";
import Content from "./contact";
import { motion } from 'framer-motion';


export class Main extends React.Component{

render(){
    return( 
    <div style={{flexDirection:"column"}}>
    <HashRouter>
     <div>
       
            <ul className="header">
                
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
       
            <div className="content">      
            <motion.div
            initial={{scale:0.75}}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}>   
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Content}/>
            </motion.div>
            </div>
     </div>
    </HashRouter>
</div>
    );
}

};


