import React from 'react'
import List, { ListItem } from 'react-md/lib/Lists'

const Sorting = ({ onSort, amISorting }) => (
  <List>
    <ListItem
      primaryText="Name"
      onClick={onSort('name')}
      className={amISorting('name') ? 'color--primary' : ''}
    />
    <ListItem
      primaryText="Payout"
      onClick={onSort('payout')}
      className={amISorting('payout') ? 'color--primary' : ''}
    />
    <ListItem
      primaryText="Revenue"
      onClick={onSort('revenue')}
      className={amISorting('revenue') ? 'color--primary' : ''}
    />
    <ListItem
      primaryText="Clicks"
      onClick={onSort('clicks')}
      className={amISorting('clicks') ? 'color--primary' : ''}
    />
    <ListItem primaryText="CR" onClick={onSort('cr')} className={amISorting('cr') ? 'color--primary' : ''} />
    <ListItem
      primaryText="eRPM"
      onClick={onSort('erpm')}
      className={amISorting('erpm') ? 'color--primary' : ''}
    />
  </List>
)

export default Sorting
