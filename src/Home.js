import React from 'react'
import './Home.css'

export default function Home() {



    return (
      <div className='homePage'>
        <header>
          <div className="headerInfo">
            <h1>Welcome to Prime Video</h1>
            <br/>
            <p>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
            <button>Sign in to join Prime</button>
          </div>

        </header>

        <div className="header2">
        <div className="header2Info">
            <h1>Movie rentals on Prime Video</h1>
            <br/>
            <p>Early Access to new movies, before digital subscription</p>
            <button>Rent now</button>
          </div>
        </div>


        <div className="header3">
          <div className="header3Info">
      <h1>Your favorite channels all in one place</h1>
      <br/>
      <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
          </div>
          <div className="channels">
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>
            <div className="channelName"></div>

          </div>

        </div>

        <div className="header4">
        <div className="header4Info">
            <h1>Even better with Fire TV Stick</h1>
            <br/>
            <p>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
           <br/>
            <button>Get started</button>
          </div>
        </div>




      </div>
      
      )
}
