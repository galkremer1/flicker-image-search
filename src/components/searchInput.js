import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import debounce from 'lodash.debounce';
import { styles } from '../style/style';
const debounceTimer=400;
class SearchInput extends Component {

  handleSearch = debounce(query => {
    const { handleSearch } = this.props;
    handleSearch(query);
  }, debounceTimer);

  handleInputChange = e => {
    let input = e.target.value.toLowerCase();
    this.handleSearch(input);
  };

  render() {
    const { classes, inputPlaceHolder} = this.props;
    return (
        <div className={classes.searchContainer}>
          <Paper className={classes.root} elevation={1}>
            <InputBase onChange={this.handleInputChange} className={classes.input} placeholder={inputPlaceHolder} />
          </Paper>
        </div>
    );
  }
}

export default withStyles(styles)(SearchInput);
