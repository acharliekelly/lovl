import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

const styles = theme => ({

});

function BasePage (props) {
  const { user } = props;
  return (
    <div className="wrapper">
      <NavigationBar user={user} />
      { /* children */ }
      <Footer />
    </div>
  );
}

BasePage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(BasePage);
