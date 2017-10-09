import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem';

const links = [
  { isExact: true, linkTo: '/', text: 'Home', index: 1 },
  { isExact: false, linkTo: '/logos', text: 'Logos', index: 2 },
  { isExact: false, linkTo: '/posters', text: 'Posters', index: 3 },
  { isExact: false, linkTo: '/letterhead', text: 'Letterhead', index: 4 },
  { isExact: false, linkTo: '/share-a-story', text: 'Share a Story', index: 5 },
  {
    isExact: false,
    linkTo: '/service-request-form',
    text: 'Service Request Form',
    index: 6
  },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial', index: 7 }
];

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => {
            this.setState({ open: !this.state.open });
          }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          {links.map(link => (
            <SideBarItem
              isExact={link.isExact}
              linkTo={link.linkTo}
              primaryText={link.text}
              handleClose={this.handleClose}
              key={link.index}
            />
          ))}
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
