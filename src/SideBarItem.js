import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

class SideBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <NavLink activeClassName="active" exact={this.props.isExact} to={this.props.linkTo}>
        <MenuItem
          primaryText={this.props.primaryText}
          onClick={this.props.handleClose}
          hoverColor="#EEE"
        />
      </NavLink>
    );
  }
}

SideBarItem.propTypes = {
  isExact: PropTypes.bool.isRequired,
  linkTo: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default SideBarItem;
