
import React, {Component} from 'react';
import axios from "axios";
// import Search from "./Search.js";
import './App.css';

// PSEUDOCODE

// Make sure axios is working
// Make functioning search bar that will submit user query and grab data from Giphy API
// Create clear button that will clear the array

// STRETCH GOALS

// Make a button that will load more gifs onto the screen
// OR make an endless scroll
// Make title of GIF appear on gif:hover
// Make it not look so shitty

// PSEUDOCODE

// Create constructor() with empty gifsArray and query string
// Download and make axios/AJAX call
// Store data into gifsArray
// Grab user input and link this data to submit button
// Display gifs on page
// Create clear button



class App extends Component {

  // CONSTRUCTOR
  constructor() {
    super();
    this.state = {
      gifsArray: [],
      userInput: "",
    };
  }

  // AXIOS
  componentDidMount() {
    axios({
      url: "https://api.giphy.com/v1/gifs/search",
      method: "GET",
      dataResponse: "json",
      params: {
        q: "cats", // {query}
        api_key: "4aF1GacjvE51Uj4zvZN9CCLvBmHIO0Vy",
        limit: 6,
        lang: "en"
      },
    }).then((results) => {
      results = results.data.data;
      this.setState({
        gifsArray: results,
      })
      console.log(results)
    });
  }

  // GRAB QUERY STRING AND LINK TO SUBMIT QUERY

  queryString = (event) => {
    this.state = {
      userInput: event.target.value, // this.state.userInput
    }
    console.log(this.state.userInput);

    const sayWord = this.state.userInput;
    console.log("word up", sayWord);
  }


  // ON SUBMIT, SUBMIT QUERY STRING

  handleSubmit = (event) => {
    event.preventDefault();
    const userInput = this.state.userInput;
    console.log(userInput); // value of what you're typing in
    return userInput;
  }


  // ON HOVER, DISPLAY TITLE

  handleClickClear = (event) => {
    console.log("yo what it do my g")
    this.setState({
      gifsArray: [],
    })
  }


  // RENDER
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Giphy Generator</h1>

          {/* SEARCH/SUBMIT*/}
          {/* <Search /> */}
          <div className="SearchBar">
            <form action="submit" className="submit">
              <label sr-only="search" htmlFor="search"></label>
              <input onChange={this.queryString} value={this.state.userInput} type="text" className="search" placeholder="i.e. Cats" />
              <button onClick={this.handleSubmit} sr-only="submit" className="submit">Submit</button>
            </form>

          </div>
          {/* GIF CONTAINER */}
          <div className="gifContainer">
            {this.state.gifsArray.map((gifs, index) => {
              return (
                <div className="gif">
                  <h2>{gifs.title}</h2>
                  <img key={index} src={gifs.images.fixed_height.url} alt={gifs.title} />
                </div>
              );
            })}
          </div>
          {/* CLEAR BUTTON */}
          <div className="clearButton">
            <button onClick={this.handleClickClear} className="clear">Clear</button>
          </div>
          {/* FOOTER */}
          <footer>
            <p><a href="https://junocollege.com/">Created at Juno College</a></p>
          </footer>
        </div> 
      </div>
    );
  }
}



export default App;

