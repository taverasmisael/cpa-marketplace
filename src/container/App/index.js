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
    image: 'https://imagescdn.billydomain.com/previews/4eafc637af27a8b4d6200c8a0eef0450.png',
    name: '[duplicated]: Ya Sports -AR -  Movistar - 1 Click',
    erpm:80 ,
    revenue: 0.00,
    payout: 0.0800000011920929,
    cr: 58,
    clicks: 65046
  },
  {
    id: '488',
    image: 'https://imagescdn.billydomain.com/previews/57731603be5cdbc31c0dfa23ec35b1b1.png',
    name: 'Win a GoPro [Complete LATAM]',
    erpm: 60,
    revenue: 0.00,
    payout: 2.4,
    cr: 53,
    clicks: 65046
  },
  {
    id: '487',
    image: 'https://imagescdn.billydomain.com/previews/4eafc637af27a8b4d6200c8a0eef0450.png',
    name: 'New Jelly - Perdido',
    erpm: 70,
    revenue: 0.00,
    payout: 0.8400000333786011,
    cr: 120,
    clicks: 1787867
  },
  {
    id: '486',
    image: 'https://imagescdn.billydomain.com/previews/4eafc637af27a8b4d6200c8a0eef0450.png',
    name: '[WEB+MOB] Mainstream Content Smartlink /International [RevShare]',
    erpm: 70,
    revenue: 0.00,
    payout: 0.7,
    cr: 4,
    clicks: 456456
  },
  {
    id: '485',
    image: 'https://imagescdn.billydomain.com/previews/e68d8632ceb5ad6ba1f2b183ce5620ea.png',
    name: 'Ya Sports -AR -  Movistar - 1 Click',
    erpm: 80,
    revenue: 0.00,
    payout: 0.3759999990463257,
    cr: 1357,
    clicks: 46465
  },
  {
    id: '484',
    image: 'https://imagescdn.billydomain.com/previews/4eafc637af27a8b4d6200c8a0eef0450.png',
    name: 'Toti Pasman /AR [Personal]',
    erpm: 80,
    revenue: 0.00,
    payout: 0.48000001907348633,
    cr: 78,
    clicks: 1225378
  }
]
