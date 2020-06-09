import React, {Component} from 'react';
import ParticlesBg from 'particles-bg';

export default class Background extends Component{
    render(){
        return(
            <ParticlesBg type = "lines" bg = {true}></ParticlesBg>
        )
    }
    
}