import React from "react";
import { Link } from "react-router-dom";
import mypic from './assets/mypic.jpg';
import { motion } from 'framer-motion';
 
class Home extends React.Component {
  render() {
    return (
      <div>
            <div className="portfolio-pic">
            <img  src= { mypic } />
            </div>
        <h2 className="myname">Sathvik.S</h2>
        <hr color="aquamarine" width="20%" size="3"/>
        <h4 className="myjob">Senior Software Engineer in Bangalore, IND</h4>

        <p>Hey there. My name is Sathvik. I'm a Software Engineer at <a href = "https://research.samsung.com/sri-b" target="_blank">Samsug R&D Bangalore</a>. I, at Samsung, build experiences used by more than 500 million people every day.</p>
<p>
My interests include include physical & mental wellness, Traveling and any intersection between them. I am also passionate about inspiring strength and empowerment in females and serve as a junior board member at Girls Inc.</p>
<p>
Before Samsung, I was studying Computer Science at <a href="https://www.nitk.ac.in/" target="_blank">NITK</a> where I was the captain of a competitive a Cappella team and also coordinated outreach for Women@SCS. I've also done extensive analytical chemistry research and published 5 articles on the subject.</p>

      </div>
    );
  }
}
 
export default Home;