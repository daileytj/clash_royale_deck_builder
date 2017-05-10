import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className = "home-page">
        <div className = "home-page-hero-img-parallax">
          <div className = "hero-text-wrapper">
            <h1 className = "hero-header">Build The Ultimate Clash Royale Deck</h1>
            <button className = "hero-button">Build Now</button>
          </div>
        </div>
        <div className = "home-page-content-wrapper">
          <img src = {require('../../images/blue-prince.png')} alt = "Blue Prince"/>
          <h2>What Is Clash Royale You Ask...</h2>
          <p>Well, Clash Royale is a fast paced, card based PvP brawler. Collect Clash troops, and use them to wreak havoc on your opponent’s towers!</p>
          <h2>Yeah, So... What Am I Doing Here?</h2>
          <p>You are here to create the Ultimate Clash Royale deck.</p>
          <h2>Out With It Then... How Do I Use This Thing?!</h2>
          <p>Easy now... it's quite simple.</p>
          <p>Simply click on any of the build buttons/links floating around the page...</p>
          <img src = "../../images/arrows.svg" alt = "Arrow"/>
          <button className = "hero-button home-page-content-button">Build Now</button>
          <p>Then you can click on any of the cards to add them to your deck.</p>
          <p>Once your deck is built, fill out the form and save it to our database so that everyone can access 'Your' Ultimate Clash Royale Deck</p>
          <img src = {require('../../images/blue-king.png')} alt = "Blue King"/>
        </div>
      </div>
    )
  }
}

export default connect()(Home);
