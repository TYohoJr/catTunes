import React, { Component } from 'react';
import axios from "axios";
import "./index.css";

var randNum1 = Math.floor(Math.random() *100 );
//console.log(randNum1);


export default class CatTunes extends Component {
    constructor (props){
        super(props)
        this.state={
            data: {}
        }
         
    }

    setArtist(input){
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${input}&api_key=5bc98df467c4541a1787d433095c0db0&format=json`).then((response)=>{
            this.setState({
                data: response.data
            })
    })}

    render(){
        if (this.state.data.similarartists)  {
            var randNum1 = Math.floor(Math.random() *100 );
            var randNum2 = Math.floor(Math.random() *100 );
            var randNum3 = Math.floor(Math.random() *100 );
            var randNum4 = Math.floor(Math.random() *100 );
            var randNum5 = Math.floor(Math.random() *100 );

         var artistList =    <table className = "musictable">
        <tr>
            <th>Artist</th>
            <th>URL</th> 
            <th>Picture</th>
        </tr>
        <tr>
            <td>{this.state.data.similarartists.artist[randNum1].name}</td>
            <td><a href={this.state.data.similarartists.artist[randNum1].url} target="_blank">Link</a></td> 
            <td><img src={this.state.data.similarartists.artist[randNum1].image[4]["#text"]}/></td> 

        </tr>
         <tr>
            <td>{this.state.data.similarartists.artist[randNum2].name}</td>
            <td><a href={this.state.data.similarartists.artist[randNum2].url} target="_blank">Link</a></td> 
            <td><img src={this.state.data.similarartists.artist[randNum2].image[4]["#text"]}/></td> 

        </tr>
         <tr>
            <td>{this.state.data.similarartists.artist[randNum3].name}</td>
            <td><a href={this.state.data.similarartists.artist[randNum3].url} target="_blank">Link</a></td>
            <td><img src={this.state.data.similarartists.artist[randNum3].image[4]["#text"]}/></td> 
 
        </tr>
        <tr>
            <td>{this.state.data.similarartists.artist[randNum4].name}</td>
            <td><a href={this.state.data.similarartists.artist[randNum4].url} target="_blank">Link</a></td> 
            <td><img src={this.state.data.similarartists.artist[randNum4].image[4]["#text"]}/></td> 

        </tr>
         <tr>
            <td>{this.state.data.similarartists.artist[randNum5].name}</td>
            <td><a href={this.state.data.similarartists.artist[randNum5].url} target="_blank">Link</a></td>
            <td><img src={this.state.data.similarartists.artist[randNum5].image[4]["#text"]}/></td> 
 
        </tr>


        </table>
            }
    return(
        <div className="inputfield">
        <input id= "artistName" type = "text" placeholder = "Name"/>  <button id="clickme" onClick={() => this.setArtist(document.getElementById("artistName").value)}>Submit</button>
        {artistList}
        </div>
        )
    }
}