import React from 'react'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import CPALogo from '../CPALogo'
import OffersFilter from '../OffersFilter'

import './Shell.css'
const Shell = ({ countries = [], categories = [], currentFilter = {}, children }) => (
  <NavigationDrawer
    toolbarClassName="header"
    navItems={[
      <OffersFilter
        key={0}
        countries={countries}
        categories={categories}
        filtering={currentFilter.offersType}
        onFilter={ApplyFilter(currentFilter)}
      />
    ]}
    drawerTitle="Market Place"
    desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
    tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    toolbarTitle={<CPALogo />}
    autoclose
  >
    {RenderChildren(children)}
  </NavigationDrawer>
)

const RenderChildren = children => React.Children.map(children, child => child)
const ApplyFilter = currentFilter => event => {
  event.preventDefault()
  console.log(currentFilter)
}
export default Shell
