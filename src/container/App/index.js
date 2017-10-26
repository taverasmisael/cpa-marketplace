import React from 'react'
import Shell from '../Shell'

import OffersTable from '../../components/OffersTable'

import './App.css'

const App = () => (
  <Shell>
    <div className="App">
      <h1>
        Market Place <br />
        <small className="md-title">Find the best offers</small>
      </h1>
      <div className="dividers__border-example">
        <div className="md-divider-border md-divider-border--top" />
      </div>
      <OffersTable offers={Offers} />
    </div>
  </Shell>
)

export default App

const Offers = [
  {
    id: '489',
    name: '[duplicated]: Ya Sports -AR -  Movistar - 1 Click',
    erpm:80 ,
    revenue: 0.00,
    payout: 0.0800000011920929,
    cr: 58,
    clicks: 65046
  },
  {
    id: '488',
    name: 'Win a GoPro [Complete LATAM]',
    erpm: 60,
    revenue: 0.00,
    payout: 2.4,
    cr: 53,
    clicks: 65046
  },
  {
    id: '487',
    name: 'New Jelly - Perdido',
    erpm: 70,
    revenue: 0.00,
    payout: 0.8400000333786011,
    cr: 120,
    clicks: 1787867
  },
  {
    id: '486',
    name: '[WEB+MOB] Mainstream Content Smartlink /International [RevShare]',
    erpm: 70,
    revenue: 0.00,
    payout: 0.7,
    cr: 4,
    clicks: 456456
  },
  {
    id: '485',
    name: 'Ya Sports -AR -  Movistar - 1 Click',
    erpm: 80,
    revenue: 0.00,
    payout: 0.3759999990463257,
    cr: 1357,
    clicks: 46465
  },
  {
    id: '484',
    name: 'Toti Pasman /AR [Personal]',
    erpm: 80,
    revenue: 0.00,
    payout: 0.48000001907348633,
    cr: 78,
    clicks: 1225378
  }
]
