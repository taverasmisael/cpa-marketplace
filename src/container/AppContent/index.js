import React from 'react'

import { MenuButton } from 'react-md'
import OfferDetail from '../OfferDetail'
import OffersTable from '../../components/OffersTable'
import Sorting from '../../components/Sorting'

const AppContent = ({
  onSortOffersTable,
  amISortingColumn,
  filteredOffers,
  isColumnSorted,
  offerDetailVisible,
  currentSelectedOffer,
  onHideOfferDetail,
  onSelectOffer
}) => (
  <div className="App">
    <div className="md-grid filter-header" style={{ alignItems: 'center' }}>
      <h1 className="md-cell--11">Market Place</h1>
      <div className="md-cell--1">
        <MenuButton
          id="menu-button-2"
          anchor={{
            x: MenuButton.HorizontalAnchors.INNER_RIGHT,
            y: MenuButton.VerticalAnchors.BOTTOM
          }}
          position={MenuButton.Positions.BOTTOM_RIGHT}
          flat
          primary
          menuItems={<Sorting onSort={onSortOffersTable} amISorting={amISortingColumn} />}
        >
          Sort
        </MenuButton>
      </div>
    </div>
    <div className="dividers__border-example">
      <div className="md-divider-border md-divider-border--top" />
    </div>
    <OffersTable
      offers={filteredOffers}
      onSort={onSortOffersTable}
      amISorted={isColumnSorted}
      amISorting={amISortingColumn}
      onOfferClick={onSelectOffer}
    />
    <OfferDetail visible={offerDetailVisible} offer={currentSelectedOffer} onHide={onHideOfferDetail} />
  </div>
)

export default AppContent
