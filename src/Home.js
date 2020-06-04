import React from "react";
import { Link } from "react-router-dom";
import mypic from './assets/mypic.jpg';
import { motion } from 'framer-motion';
import Footer from "./footer";
 
class Home extends React.Component {
  render() {
    return (
      <div className="about">
            <div className="portfolio-pic">
            <img  className="mypic" src= { mypic } />
            </div>
        <h2 className="myname">Sathvik.S</h2>
        <hr color="aquamarine" width="20%" size="3"/>
        <h4 className="myjob">Senior Software Engineer in Bangalore, IND</h4>
        <p>Hey there. My name is Sathvik. I'm a Software Engineer at <a href="https://research.samsung.com/sri-b" target="_blank">Samsung R&D Bangalore</a>. I, at Samsung, build experiences used by more than 500 million people every day.</p>
<p>
Before Samsung, I pursued undergraduate education in Computer Science at  <a href="https://www.nitk.ac.in/" target="_blank">NITK</a> establishing a strong foundation in subjects of the Computer Science field. My collegiate experiences imbibed in me a deep sense of enthusiasm to solve more challenging problems at a significant scale.
</p>
<p>
I am a Developer at heart and aspire to become deeply knowledgeable in technologies that explore the fields of Artificial Intelligence, Computer Vision and Data Science and use those skills to make an impact in people's lives. I love building new things and am drawn towards solving real-world problems with a business justification.</p>
<p>
My interests include Physical & Mental wellness. I am a hodophile consumed by wanderlust and desire to travel to "30 Countries before turning 30". I am continually paving the path to find my<a href="https://medium.com/thrive-global/ikigai-the-japanese-secret-to-a-long-and-happy-life-might-just-help-you-live-a-more-fulfilling-9871d01992b7" target="_blank"> <i> "ikigai."</i></a></p>
<Footer />
      </div>
    );
  }
}
 
export default Home;