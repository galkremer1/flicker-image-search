import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getData, parseImageData } from "./utils/utils";
import { styles } from './style/style';
import SearchInput from './components/searchInput';
import './style/App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInputPlaceHolder: 'Search Flicker...'
    }
  }

  componentDidMount() {
    getData('animal').then((data)=>{
      if (data && data.photos && data.photos.photo)
      console.log(parseImageData(data.photos.photo));
    })
  }

  handleSearch(searchTerm) {
    console.log(searchTerm)
  }

  render() {
    const {searchInputPlaceHolder} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        Flicker Image Search
        </header>
        <SearchInput handleSearch={this.handleSearch} inputPlaceHolder={searchInputPlaceHolder} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
