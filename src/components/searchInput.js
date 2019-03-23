import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import debounce from 'lodash.debounce';
import { styles } from '../style/style';
const debounceTimer=400;

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }
  handleSearch = debounce(query => {
    const { handleSearch } = this.props;
    handleSearch(query);
  }, debounceTimer);

  handleInputChange = e => {
    const { autoSearch } = this.props;
    let searchValue = e.target.value.toLowerCase();
    this.setState({
      searchValue
    });
    autoSearch && this.handleSearch(searchValue);
  };

  handleAutoSearchToggle = (event) => {
    const { handleAutoSearchToggle } = this.props;
    handleAutoSearchToggle(event.target.checked);
  }

  handleManualSearch = (event) => {
    const { searchValue } = this.state;
    const { handleSearch } = this.props;
    if (!event.key || event.key === 'Enter') {
      handleSearch(searchValue);
    }
  }

  render() {
    const { classes, inputPlaceHolder, autoSearch } = this.props;
    return (
        <div className={classes.searchContainer}>
          <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <InputBase onChange={this.handleInputChange} onKeyDown={this.handleManualSearch} className={classes.input} placeholder={inputPlaceHolder} />
            {!autoSearch && <IconButton className={classes.iconButton} aria-label="Search" onClick={this.handleManualSearch}>
              <SearchIcon />
            </IconButton>}
          </Paper>
          <div>
            <Checkbox
              checked={autoSearch}
              onChange={this.handleAutoSearchToggle}
              color="primary"
              /> 
            <span>Auto Search?</span>
          </div>
        </div>
    );
  }
}

export default withStyles(styles)(SearchInput);
