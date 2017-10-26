import React, { PureComponent } from 'react'
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md'

import * as SortBy from './sorting'

import { toCurrency, toNumber, toPercentaje } from '../../utilities/strings'

import './OffesTable.css'

class OffersTable extends PureComponent {
  state = {
    sortedOffers: [],
    ascending: true,
    currentSort: 'name'
  }

  globalSort = fn => {
    const sortedOffers = SortBy[fn](this.props.offers)
    const ascending = !this.state.ascending
    const currentSort = fn.split('Desc')[0]
    this.setState({ sortedOffers, ascending, currentSort })
  }

  sortName = () => (this.state.ascending ? this.globalSort('nameDesc') : this.globalSort('name'))
  sortPayout = () => (this.state.ascending ? this.globalSort('payoutDesc') : this.globalSort('payout'))
  sortRevenue = () => (this.state.ascending ? this.globalSort('revenueDesc') : this.globalSort('revenue'))
  sortClicks = () => (this.state.ascending ? this.globalSort('clicksDesc') : this.globalSort('clicks'))
  sortCR = () => (this.state.ascending ? this.globalSort('crDesc') : this.globalSort('cr'))
  sortERPM = () => (this.state.ascending ? this.globalSort('erpmDesc') : this.globalSort('erpm'))

  amISorted = prop => (this.state.currentSort === prop ? { sorted: this.state.ascending } : { sorted: false })
  componentDidMount() {
    const sortedOffers = SortBy.name(this.props.offers)
    this.setState({ sortedOffers })
  }

  render() {
    const { sortedOffers } = this.state
    return (
      <DataTable plain>
        <TableHeader>
          <TableRow>
            <TableColumn>Image</TableColumn>
            <TableColumn onClick={this.sortName} sortIconBefore={false} {...this.amISorted('name')}>
              Name
            </TableColumn>
            <TableColumn numeric onClick={this.sortPayout} sortIconBefore={false} {...this.amISorted('payout')}>
              Payout
            </TableColumn>
            <TableColumn numeric onClick={this.sortRevenue} sortIconBefore={false} {...this.amISorted('revenue')}>
              Revenue
            </TableColumn>
            <TableColumn numeric onClick={this.sortClicks} sortIconBefore={false} {...this.amISorted('clicks')}>
              Clicks
            </TableColumn>
            <TableColumn numeric onClick={this.sortCR} sortIconBefore={false} {...this.amISorted('cr')}>
              CR
            </TableColumn>
            <TableColumn numeric onClick={this.sortERPM} sortIconBefore={false} {...this.amISorted('erpm')}>
              eRPM
            </TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>{this.renderRows(sortedOffers)}</TableBody>
      </DataTable>
    )
  }

  renderRows(offers) {
    return offers.map(({ id, image, name, payout, revenue, clicks, cr, erpm }) => (
      <TableRow key={id} className="Offer">
        <TableColumn><img src={image} alt="" className="Offer__image" /></TableColumn>
        <TableColumn>{name}</TableColumn>
        <TableColumn numeric>{toCurrency(payout)}</TableColumn>
        <TableColumn numeric>{toCurrency(revenue)}</TableColumn>
        <TableColumn numeric>{toNumber(clicks)}</TableColumn>
        <TableColumn numeric>{toPercentaje(cr)}</TableColumn>
        <TableColumn numeric>{toPercentaje(erpm)}</TableColumn>
      </TableRow>
    ))
  }
}

export default OffersTable
