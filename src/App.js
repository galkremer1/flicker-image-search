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
      loading: true,
      error: false,
      currentPage: 1,
      searchTerm: 'animals',
      noMorePhotosToFetch: false,
      searchHistory: []
    };
    this.photosPerPage = 100;
  }

  componentDidMount() {
    const {searchTerm, currentPage} = this.state;
    localStorage.imageSearchHistory = localStorage.imageSearchHistory || JSON.stringify([]);
    this.setState({
      searchHistory: JSON.parse(localStorage.imageSearchHistory)
    }, this.getData(searchTerm, currentPage))
  }

  toggleLoaderSearchTermPage = (loading,searchTerm, currentPage) => {
    this.setState({
      loading,
      searchTerm,
      currentPage
    });
  }

  getData(searchTerm, currentPage=1) {
    this.toggleLoaderSearchTermPage(true, searchTerm, currentPage);
    getData(searchTerm, currentPage).then((data)=>{
      if (data && data.photos && data.photos.photo) {
        const photosArray = parseImageData(data.photos.photo);
        let noMorePhotosToFetch = false;
        if (photosArray.length < this.photosPerPage) {
          noMorePhotosToFetch = true;
        }
        this.setState({photos: (currentPage > 1 ? this.state.photos.concat(photosArray) : photosArray), 
        loading: false, error: false, noMorePhotosToFetch});
      }
    }).catch((error)=>{
      this.setState({error: true, loading: false});
    })
  }

  updateSearchHistory = (searchTerm) => {
    const { searchHistory } = this.state;
    if (!searchHistory.includes(searchTerm)) {
      searchHistory.push(searchTerm);
      localStorage.imageSearchHistory = JSON.stringify(searchHistory);
      this.setState({
        searchHistory
      });
    }
  }

  handleSearch = (searchTerm) => {
   if (searchTerm !== '') {
    this.getData(searchTerm);
    this.updateSearchHistory(searchTerm);
   }
  }

  loadMore = () =>{
    const { loading, error, currentPage, searchTerm, noMorePhotosToFetch} = this.state;
    if (!loading && !error && !noMorePhotosToFetch) {
      this.getData(searchTerm, currentPage + 1);
    }
  }

  render() {
    const { classes, appHeader} = this.props;
    const { searchInputPlaceHolder, photos, loading, error} = this.state;
    return (
      <div className={classes.appContainer} >
        <header className={classes.appHeader}>
           {appHeader}
           <SearchInput handleSearch={this.handleSearch} inputPlaceHolder={searchInputPlaceHolder} />
        </header>
        <Gallery photos={photos} isLoading={loading} error={error} loadMore={this.loadMore} />
        { loading &&  
         (<div className="loading">Loading&#8230;</div>)
        }
        { error &&  
         (<div className={classes.error}>Error fetching images</div>)
        }
      </div>
      
    );
  }
}

export default withStyles(styles)(App);
