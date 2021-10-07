import ReactPlayer from 'react-player';
import React, { Component } from 'react';

export default class Product extends Component {

    state = {
        pip: false,
        url: "https://dawchihliou.github.io/react-use-pip/video-sample.mp4",
        login: false,
    } 

    getMobileOperatingSystem = () => {
        let standalone = window.navigator.standalone,
            userAgent = window.navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent ),
            isAndroidWebView = window.hasOwnProperty('Android');
             
        if (ios && !standalone && !safari) {
            return 'iOS';
        } else if (/android/i.test(userAgent) && isAndroidWebView) {
            return 'Android';
        } else {
            return 'unknown';
        }
    }

    handleEnablePIP = () => {
        this.setState({
            pip: true
        })
    }

    handleTogglePIP = () => {
        this.setState({
            pip: !this.state.pip
        });
    }

    handleDisablePIP = () => {
        this.setState({
            pip: false
        })
    }

    // On back button press or home button press in app toggle pip


    checkLogin = () => {
        if (!this.state.login) {
            if (ReactPlayer.canEnablePIP(this.state.url)) {
                this.handleTogglePIP();
            } else {
                if (this.getMobileOperatingSystem() === 'Android'){
                    //call android bridge to enable pip
                    if (window["app"]) {
                        window["app"].tiketTogglePIP(true);
                        // window["JSBridge"].call('ticketTogglePIP', {enablePIP: true}, function(e) {
                        //     console.log(e);
                        // })
                    } else {
                        alert('bridge not found');
                    }
                } else {
                    this.handleTogglePIP();
                }
            }
            if (this.getMobileOperatingSystem() === 'iOS' || this.getMobileOperatingSystem() === 'Android') {
                window.location.href = 'https://m.tiket.com/login';
                // App to intercept this call and check login and get login done and return event which we use to fetch username.
            }
            // window.addEventListener('message', (event) => {
            //     alert(`Received message: ${event.data}`);
            //     // if logged in
            //     // based on event data from app call login api to get user details.
            //     this.handleDisablePIP();
            // });            
        }
    }


    
  render() {
      const {url, pip} = this.state;
    return(
      <div className="wrapper">
        <ReactPlayer 
            url={url} 
            playing={!!url} 
            playsinline={!!true}
            pip={!!pip} 
            loop={true}
            onEnablePIP={this.handleEnablePIP} 
            onDisablePIP={this.handleDisablePIP} 
            stopOnUnmount={false} />
        <button onClick={this.checkLogin}>{
            pip ? 'Disable PIP' : 'Enable PIP'
        }</button>
      </div>
    )
  }
}