import React, {Component} from "react";

class Clear extends Component {
  render(){
    return(
      <div className="clearButton">
        <button onClick={this.handleClick} className="clear">Clear</button>
      </div>
    )
  }
}

export default Clear;
