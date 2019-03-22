import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getData, parseImageData } from "./utils/utils";
import { styles } from './style/style';
import SearchInput from './components/searchInput';
import Gallery from './components/gallery/gallery';
import './style/loading.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInputPlaceHolder: 'Search Flicker...',
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getData('animals');
  }

  toggleLoader = (toggle) => {
    this.setState({
      loading: toggle
    })
  }
  getData(searchTerm) {
    this.toggleLoader(true);
    getData(searchTerm).then((data)=>{
      if (data && data.photos && data.photos.photo) {
        console.log(data.photos.photo);
        this.setState({photos: parseImageData(data.photos.photo), loading: false});
      }
    })
  }

  handleSearch = (searchTerm) => {
    this.getData(searchTerm);
  }

  render() {
    const { classes, appHeader} = this.props;
    const { searchInputPlaceHolder, photos, loading} = this.state;
    return (
      <div className={classes.appContainer}>
        <header className={classes.appHeader}>
           {appHeader}
           <SearchInput handleSearch={this.handleSearch} inputPlaceHolder={searchInputPlaceHolder} />

        </header>
        <Gallery photos={photos} isLoading={loading} />
        { loading &&  
         (<div className="loading">Loading&#8230;</div>)
        }
      </div>
      
    );
  }
}

export default withStyles(styles)(App);
