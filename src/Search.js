import React, {Component} from "react";

class Search extends Component {
  render(){
    return (
      <div className="SearchBar">
        <form action="submit" className="submit">
          <label sr-only="search" htmlFor="search"></label>
          <input type="text" className="search" placeholder="i.e. Cats" />
          <button onClick={this.submitQuery} sr-only="submit" className="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
