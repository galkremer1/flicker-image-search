import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './galleryStyle';


class Gallery extends Component {


  render() {
    const { classes, photos, isLoading} = this.props;
    return (
      <div className={classes.galleryContainer}>
        {photos.map((photo)=>{
          return  <img className={classes.photo} key={photo.id} alt={photo.title} src={photo.url}/ >
        })}
        {!isLoading && photos.length === 0 && <div>
          No results
        </div>}
      </div>
    );
  }
}

export default withStyles(styles)(Gallery);
