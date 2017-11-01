import React from 'react'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import Button from 'react-md/lib/Buttons'
import CPALogo from '../CPALogo'
import OffersFilter from '../OffersFilter'

import './Shell.css'
const Shell = ({
  countries = [],
  categories = [],
  currentFilter = {},
  onNameChange,
  onFilter,
  onResetFilter,
  onCountryChange,
  onCategoryChange,
  toggleCPA,
  toggleCPI,
  toggleCPL,
  children
}) => (
  <NavigationDrawer
    toolbarClassName="header"
    toolbarActions={[<Button raised secondary href="//goo.gl">Register / Login</Button>]}
    navItems={[
      <OffersFilter
        key={0}
        countries={countries}
        categories={categories}
        filtering={currentFilter.offerTypes}
        onFilter={onFilter}
        onResetFilter={onResetFilter}
        onNameChange={onNameChange}
        onCountryChange={onCountryChange}
        onCategoryChange={onCategoryChange}
        toggleCPA={toggleCPA}
        toggleCPI={toggleCPI}
        toggleCPL={toggleCPL}
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
export default Shell
