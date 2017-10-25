import React, { PureComponent } from 'react'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import CPALogo from '../../components/CPALogo'
import './App.css'

class Shell extends PureComponent {
  render() {
    return (
      <NavigationDrawer
        toolbarClassName="header"
        drawerTitle="Market Place"
        desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarTitle={<CPALogo />}
        autoclose
      >
        {this.RenderChildren()}
      </NavigationDrawer>
    )
  }

  RenderChildren() {
    return React.Children.map(this.props.children, child => child)
  }
}

export default Shell
