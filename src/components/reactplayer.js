import ReactPlayer from 'react-player';
import React, { Component } from 'react';

export default class Product extends Component {

    state = {
        pip: false,
        url: "https://dawchihliou.github.io/react-use-pip/video-sample.mp4"
    } 

    handleEnablePIP = () => {
        this.setState({
            pip: true
        })
    }

    handleTogglePIP = () => {
        this.setState({
            pip: !this.state.pip
        })
    }

    handleDisablePIP = () => {
        this.setState({
            pip: false
        })
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
        <button onClick={this.handleTogglePIP}>{
            pip ? 'Disable PIP' : 'Enable PIP'
        }</button>}
      </div>
    )
  }
}