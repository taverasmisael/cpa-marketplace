import React from 'react'
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md/lib/DataTables'

import { toCurrency, toNumber, toPercentaje } from '../../utilities/strings'

import './OffesTable.css'

const renderRows = (offers, onClick) =>
  offers.length ? (
    offers.map(({ id, image, name, payout, revenue, clicks, cr, erpm }) => (
      <TableRow key={id} className="Offer" onClick={onClick(id)}>
        <TableColumn>
          <img src={image} alt="" className="Offer__image" />
        </TableColumn>
        <TableColumn>{id}</TableColumn>
        <TableColumn>{name}</TableColumn>
        <TableColumn numeric className="money">
          {toCurrency(payout)}
        </TableColumn>
        <TableColumn numeric>{toCurrency(revenue)}</TableColumn>
        <TableColumn numeric>{toNumber(clicks)}</TableColumn>
        <TableColumn numeric>{toPercentaje(cr)}</TableColumn>
        <TableColumn numeric>{toPercentaje(erpm)}</TableColumn>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableColumn colSpan="8" className="md-text-center empty-table-message">
        <p className="md-display-1">
          There are not offers with this requisites. To see more offers click <a href="//goo.gl">here</a>
        </p>
      </TableColumn>
    </TableRow>
  )

const OffersTable = ({ offers = [], onSort, amISorted, amISorting, onOfferClick }) => (
  <DataTable plain>
    <TableHeader>
      <TableRow>
        <TableColumn>Image</TableColumn>
        <TableColumn
          numeric
          onClick={onSort('id')}
          className={amISorting('id') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('id')}
        >
          Id
        </TableColumn>
        <TableColumn
          onClick={onSort('name')}
          className={amISorting('name') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('name')}
        >
          Name
        </TableColumn>
        <TableColumn
          numeric
          onClick={onSort('payout')}
          className={amISorting('payout') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('payout')}
        >
          Payout
        </TableColumn>
        <TableColumn
          numeric
          onClick={onSort('revenue')}
          className={amISorting('revenue') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('revenue')}
        >
          Revenue
        </TableColumn>
        <TableColumn
          numeric
          onClick={onSort('clicks')}
          className={amISorting('clicks') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('clicks')}
        >
          Clicks
        </TableColumn>
        <TableColumn
          numeric
          onClick={onSort('cr')}
          className={amISorting('cr') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('cr')}
        >
          CR
        </TableColumn>
        <TableColumn
          numeric
          onClick={onSort('erpm')}
          className={amISorting('erpm') ? 'sorting-column' : ''}
          sortIconBefore={false}
          {...amISorted('erpm')}
        >
          eRPM
        </TableColumn>
      </TableRow>
    </TableHeader>
    <TableBody>{renderRows(offers, onOfferClick)}</TableBody>
  </DataTable>
)

export default OffersTable
