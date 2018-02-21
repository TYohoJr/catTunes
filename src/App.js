import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatTunes from './catTunes.js';
import SongInput from './songInput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn-images-1.medium.com/max/800/1*_RPm7K765yvO_rcA2BsOMg.jpeg" className="App-logo" alt="logo" />
          <img src="http://honesttopaws.com/wp-content/uploads/2015/08/cat-banana-bite-final.gif" className="App-logo" alt="logo" />
          <img src="https://i.amz.mshcdn.com/zy65wibIKGJwrQ3LlrTIKPGfDoE=/1200x630/2017%2F11%2F12%2F85%2F0cb95ccbac6441e7a30fb7d1d01b094d.bc1ee.png" className="App-logo" alt="logo" />
          <img src="http://www.91x.com/wp-content/uploads/2016/12/Cat.jpg" className="App-logo" alt="logo" />
          <img src="https://www.funnypica.com/wp-content/uploads/2015/05/TOP-30-Cute-Cats-Cute-Cat-30.jpg" className="App-logo" alt="logo" />
          <img src="https://c.pxhere.com/photos/a4/44/cat_portrait_cute_animal_feline_adorable_fur_domestic-525060.jpg!d" className="App-logo" alt="logo" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhprkMazRX3DRKLq3um9158osRcfgaG78WoafstO_1TZ3Malnb7w" className="App-logo" alt="logo" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwkq-2rYpHLuDJzW5SGbiYvqlh-0uP8Z6IHYeDHckDbT1d2nV" className="App-logo" alt="logo" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMyI8IPoeC3CZY6bkGOXiFG7bQ3gJvvqdrprxkoU5ua_4bAsw" className="App-logo" alt="logo" />
          <img src="https://cdn-images-1.medium.com/max/800/1*_RPm7K765yvO_rcA2BsOMg.jpeg" className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to Cat Tunes!</h1>
        </header>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6VRvUg_xHq8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p className="App-intro">
          Enter your favorite artist to get similar results
        </p>
        < CatTunes />
        <footer>
  <p className="footer">Established: 1993</p>
  <p><a href="https://www.buzzfeed.com/chelseamarshall/meows?utm_term=.vgB4lq5m41#.eeWVvyB5VN" target="_blank">
  Cat Facts</a></p>
</footer>

      </div>
    );
  }
}

export default App;
