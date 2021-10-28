import ReactPlayer from 'react-player';
import React, { Component } from 'react';

export default class ReactPlayerDemo extends Component {

    state = {
        pip: false,
        url: "https://dawchihliou.github.io/react-use-pip/video-sample.mp4",
        login: false,
        playing: true,
    } 
    componentDidMount() {
        window.addEventListener('TL_NATIVE_BUTTON_PRESS', (event) => {
            if (event && event.detail && event.detail.isPIP && ReactPlayer.canEnablePIP(this.state.url)) {
                this.handleTogglePIP();
            }
        });

        window.addEventListener('popstate', (event) => {
            alert('The Version doesn support bridge', JSON.stringify(event.state));
        });
    }

    getMobileOperatingSystem = () => {
        let standalone = window.navigator.standalone,
            userAgent = window.navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent ),
            isAndroidWebView = window.hasOwnProperty('app');
             
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
            pip: false,
        })        
    }


    checkLogin = () => {
        // if (sessionStorage.token) {
        //     //fetch login username
        //     // if login details met show
        //     // If not clear localstorage and fetch the function again.
        //     alert('user is already logged in');
        //     return;
        // }
        if (ReactPlayer.canEnablePIP(this.state.url)) {
            this.handleTogglePIP();
        } else {
            if (this.getMobileOperatingSystem() === 'Android'){
                //call android bridge to enable pip
                if (window["app"]) {
                    window["app"].tiketTogglePIP(true);
                }
            } else {
                this.handleTogglePIP();
            }
        }
        
        
        if (this.getMobileOperatingSystem() === 'iOS' || this.getMobileOperatingSystem() === 'Android') {
            window.location.href = 'https://m.tiket.com/login';
            // App to intercept this call and check login and get login done and return event which we use to fetch username.
        }

        window.addEventListener('TL_SET_TOKEN', (event) => {
            // if logged in
            // based on event data from app call login api to get user details.
            this.handleTogglePIP();
            sessionStorage.token = event.detail.token;
            if (this.getMobileOperatingSystem() === 'Android'){
                //call android bridge to enable pip
                if (window["app"]) {
                    window["app"].tiketTogglePIP(false);
                } 
            } 
        });            
    }

     



    
  render() {
    const {url, pip, playing} = this.state;
    return(
      <div className="wrapper">
        <ReactPlayer 
            url={url} 
            pip={!!pip} 
            playing={playing}
            onEnablePIP={this.handleEnablePIP} 
            onDisablePIP={this.handleDisablePIP} 
            stopOnUnmount={false} 
            playsinline={true}
        />
        <button onClick={this.checkLogin}>{
            pip ? 'Disable PIP' : 'Enable PIP'
        }</button>
        {
            sessionStorage.token && <div>User logged in already</div>
        }
      </div>
    )
  }
}