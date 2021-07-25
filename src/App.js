import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder='search monsters' onChange={e => this.setState({searchField: e.target.value},()=>console.log(this.state))}/>
        <CardList monsters={this.state.monsters}>

        </CardList>
      </div>
    );
  }
}

export default App;
