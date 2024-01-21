import { Component } from "react";
import bag from "./bag.png";

export class Grosery extends Component {
  state = {
    userInput: "",
    list: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Enter an item, please");
    } else {
      let listArray = this.state.list;
      listArray.push(input);
      this.setState({ list: listArray, userInput: "" });
    }
  }

  deleteItem() {
    let listArray = this.state.list;
    listArray = [];
    this.setState({ list: listArray });
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  onFormSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What would you like to buy?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>

          <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add">
              Add
            </button>
          </div>
          <ul>
            {this.state.list.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={bag} width="20px" alt="bag" />
                {item}
              </li>
            ))}
          </ul>
          <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">
              {" "}
              Delete{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
