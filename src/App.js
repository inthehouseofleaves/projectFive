
import React, {Component} from 'react';
import axios from "axios";
import './App.css';

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
      responseType: "json",
      params: {
        q: "cats",
        api_key: "4aF1GacjvE51Uj4zvZN9CCLvBmHIO0Vy",
        limit: 18,
        lang: "en"
      },
    }).then((results) => {
      results = results.data.data;
      this.setState({
        gifsArray: results,
      })
    });
  }

  getGif = () => {
    axios({
      url: "https://api.giphy.com/v1/gifs/search",
      method: "GET",
      responseType: "json",
      params: {
        q: this.state.userInput,
        api_key: "4aF1GacjvE51Uj4zvZN9CCLvBmHIO0Vy",
        limit: 18,
        lang: "en"
      },
    }).then((results) => {
      results = results.data.data;
      this.setState({
        gifsArray: results,
      })
    });
  }

  // GRAB QUERY STRING
  queryString = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  // ON SUBMIT, SUBMIT QUERY STRING
  handleSubmit = (event) => {
    event.preventDefault();
    this.getGif();
    this.setState({
      userInput: "",
    })
  }

  // CLEAR SEARCH
  handleClickClear = () => {
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
          {/* SEARCH BAR */}
          <div className="searchBar">
            <form action="submit" className="submit">
              <label sr-only="search" htmlFor="search"></label>
              <input onChange={this.queryString} value={this.state.userInput} type="text" className="search" placeholder="i.e. Cats" />
              <button onClick={this.handleSubmit} sr-only="submit" className="submit">Submit</button>
            </form>
          </div>
          {/* GIF CONTAINER */}
          <div className="gifContainer">
            {this.state.gifsArray.map((gifs) => {
              return (
                <div className="gif">
                  <h2>{gifs.title}</h2>
                  <img key={gifs.id} src={gifs.images.fixed_height.url} alt={gifs.title} />
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

