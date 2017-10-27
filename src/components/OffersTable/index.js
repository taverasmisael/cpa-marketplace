import React from 'react'
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md'

import { toCurrency, toNumber, toPercentaje } from '../../utilities/strings'

import './OffesTable.css'

const renderRows = offers =>
  offers.map(({ id, image, name, payout, revenue, clicks, cr, erpm }) => (
    <TableRow key={id} className="Offer">
      <TableColumn>
        <img src={image} alt="" className="Offer__image" />
      </TableColumn>
      <TableColumn>{name}</TableColumn>
      <TableColumn numeric>{toCurrency(payout)}</TableColumn>
      <TableColumn numeric>{toCurrency(revenue)}</TableColumn>
      <TableColumn numeric>{toNumber(clicks)}</TableColumn>
      <TableColumn numeric>{toPercentaje(cr)}</TableColumn>
      <TableColumn numeric>{toPercentaje(erpm)}</TableColumn>
    </TableRow>
  ))

const OffersTable = ({ offers = [], onSort, amISorted }) => (
  <DataTable plain>
    <TableHeader>
      <TableRow>
        <TableColumn>Image</TableColumn>
        <TableColumn onClick={onSort('name')} sortIconBefore={false} {...amISorted('name')}>
          Name
        </TableColumn>
        <TableColumn numeric onClick={onSort('payout')} sortIconBefore={false} {...amISorted('payout')}>
          Payout
        </TableColumn>
        <TableColumn numeric onClick={onSort('revenue')} sortIconBefore={false} {...amISorted('revenue')}>
          Revenue
        </TableColumn>
        <TableColumn numeric onClick={onSort('clicks')} sortIconBefore={false} {...amISorted('clicks')}>
          Clicks
        </TableColumn>
        <TableColumn numeric onClick={onSort('cr')} sortIconBefore={false} {...amISorted('cr')}>
          CR
        </TableColumn>
        <TableColumn numeric onClick={onSort('erpm')} sortIconBefore={false} {...amISorted('erpm')}>
          eRPM
        </TableColumn>
      </TableRow>
    </TableHeader>
    <TableBody>{renderRows(offers)}</TableBody>
  </DataTable>
)

export default OffersTable
