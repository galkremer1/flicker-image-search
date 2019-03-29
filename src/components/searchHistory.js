import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../style/style';


class SearchHistory extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.searchHistoryContainer}>
                GAL
      </div>
        );
    }
}

export default withStyles(styles)(SearchHistory);
