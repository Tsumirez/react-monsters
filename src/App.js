import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      filteredMonsters: []
    };
  }

  searchMonsters (e) {
    let searchText = e.target.value;
    this.setState({filteredMonsters: this.state.monsters.filter(monster=> !!(monster.name.indexOf(searchText)+1))});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users, filteredMonsters:users }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder='search monsters' onChange={this.searchMonsters.bind(this)}/>
        <CardList monsters={this.state.filteredMonsters}>

        </CardList>
      </div>
    );
  }
}

export default App;
