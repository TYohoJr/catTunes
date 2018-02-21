import React, { Component } from 'react';

export default class SongInput extends Component{
    constructor(props) {
        super(props)
    this.state = {
        artistInput:""
    }

    }

    setArtist(input){
        this.setState({
            artistInput:input
        })
    }

    render(){
        return (
        <div>
            <input id= "artistName" type = "text" placeholder = "Name"/>  <button onClick={() => this.setArtist(document.getElementById("artistName").value)}>Submit</button>
        </div>
        )
    }
}