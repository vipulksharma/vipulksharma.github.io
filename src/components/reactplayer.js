import ReactPlayer from 'react-player';
import React, { Component } from 'react';

export default class Product extends Component {

    state = {
        pip: false,
        url: "https://dawchihliou.github.io/react-use-pip/video-sample.mp4",
        login: false,
    } 

    getMobileOperatingSystem = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return 'iOS';
        }
        if (/android/i.test(userAgent)) {
            return 'Android';
        }
        return 'unknown';

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

    checkLogin = () => {
        if (!this.state.login) {
            // Logic to call login 
            // enable pip
            if (this.getMobileOperatingSystem() === 'iOS') {
                this.setState({
                    pip: true
                })
            } else if (this.getMobileOperatingSystem() === 'Android'){
                //call android bridge to enable pip
                if (window["JSBridge"]) {
                    window["JSBridge"].ticketEnablePIP(true);
                }else {
                    alert('bridge not found');
                }
            } else {
                this.handleTogglePIP();
            }
            window.addEventListener('message', (event) => {
                alert(`Received message: ${event.data}`);
                // if logged in
                // based on event data from app call login api to get user details.
                this.handleDisablePIP();
            });            
        } else if (this.getMobileOperatingSystem() === 'unknown'){
            this.handleTogglePIP();
        }
    }


    
  render() {
      const {url, pip} = this.state;
    return(
      <div className="wrapper">
        <ReactPlayer 
            url={url} 
            pip={pip} 
            playing 
            playsinline={true} 
            onEnablePIP={this.handleEnablePIP} 
            onDisablePIP={this.handleDisablePIP} 
            stopOnUnmount={false} />
        {ReactPlayer.canEnablePIP(url) && 
        <button onClick={this.checkLogin}>{
            pip ? 'Disable PIP' : 'Enable PIP'
        }</button>}
      </div>
    )
  }
}