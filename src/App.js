
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



class App extends Component {

  // CONSTRUCTOR
  constructor() {
    super();
    this.state = {
      gifsArray: [],
      query: "",
    };
  }

  // AXIOS
  componentDidMount() {
    axios({
      url: "https://api.giphy.com/v1/gifs/search",
      method: "GET",
      dataResponse: "json",
      params: {
        q: "cats",
        api_key: "4aF1GacjvE51Uj4zvZN9CCLvBmHIO0Vy",
        limit: 6,
        lang: "en"
      },
    }).then((results) => {

      // Storing axios results in "results"
      results = results.data.data;

      // Store results in empty gifsArray
      this.setState({
        gifsArray: results,
      })

      // Console.logging results
      console.log(results)
    });
  }

  // GRAB QUERY STRING AND LINK TO SUBMIT QUERY

  query = (event) => {
    this.setState({
      userInput: event.target.value,
    })
    console.log("event", event.target.value)
  }


  // ON SUBMIT, SUBMIT QUERY STRING

  submitQuery = (event) => {
    this.setState({
      query: this.query,
    })
    console.log("wat it do bubz")
    console.log("submit query event:", event);
    event.preventDefault();
  }

  // ON HOVER, DISPLAY TITLE

  handleClick = (event) => {
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
              <input value={this.query} onChange={this.query} type="text" className="search" placeholder="i.e. Cats" />
              <button onClick={this.submitQuery} sr-only="submit" className="submit">Submit</button>
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
            <button onClick={this.handleClick} className="clear">Clear</button>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;

