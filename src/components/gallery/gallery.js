import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './galleryStyle';


class Gallery extends Component {

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = (event) => {
    const { loadMore } = this.props;
    const galleryScrollHeight = event.srcElement.body.scrollHeight;
    const pageScrollPosition = window.pageYOffset;
    if (galleryScrollHeight - pageScrollPosition < window.innerHeight + 250) {
      loadMore();
    }

}

  render() {
    const { classes, photos, isLoading, error} = this.props;
    return (
      <div className={classes.galleryContainer}>
        {photos.map((photo)=>{
          return  <img className={classes.photo} key={photo.id} alt={photo.title} src={photo.thumbnailUrl}/ >
        })}
        {!isLoading && !error && photos.length === 0 && <div>
          No results
        </div>}
      </div>
    );
  }
}

export default withStyles(styles)(Gallery);
