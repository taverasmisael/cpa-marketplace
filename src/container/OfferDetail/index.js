import React from 'react'

import DialogContainer from 'react-md/lib/Dialogs'
import List, { ListItem } from 'react-md/lib/Lists'
import Button from 'react-md/lib/Buttons'
import Subheader from 'react-md/lib/Subheaders'

import { toCurrency, toNumber, toPercentaje } from '../../utilities/strings'

const OfferDetail = ({ visible, onHide, offer = {} }) => (
  <DialogContainer
    visible={visible}
    onHide={onHide}
    width="50%"
    actions={
      <Button flat primary onClick={this.hide}>
        Ok
      </Button>
    }
  >
    <div className="md-grid">
      <h2 className="md-text-center md-cell--12 md-display-1" style={{ marginBottom: '1rem' }}>
        {offer.name}
      </h2>
      <div className="md-grid md-cell--12">
        <div className="md-cell--4">
          <img src={offer.image} alt="" />
        </div>
        <div className="md-cell--1" />
        <div className="md-cell--7">
          <List>
            <Subheader primaryText="Details" primary />
            <ListItem primaryText={<strong>Payout: </strong>} secondaryText={toCurrency(offer.payout)} />
            <ListItem primaryText={<strong>Revenue: </strong>} secondaryText={toNumber(offer.revenue)} />
            <ListItem primaryText={<strong>Clicks: </strong>} secondaryText={toNumber(offer.clicks)} />
            <ListItem primaryText={<strong>CR: </strong>} secondaryText={toPercentaje(offer.cr)} />
            <ListItem primaryText={<strong>eRPM: </strong>} secondaryText={toPercentaje(offer.erpm)} />
          </List>
        </div>
      </div>
    </div>
  </DialogContainer>
)

export default OfferDetail
