import React, { PureComponent } from 'react'

import { LoadOffers, LoadCountries } from '../../services/Load'
import * as sortOfferBy from '../../utilities/offerSort'

import Shell from '../../components/Shell'
import OffersTable from '../../components/OffersTable'

import './App.css'

const Categories = ['Adult', 'MainStream', 'Incentive']

class App extends PureComponent {
  state = {
    currentFilter: {
      offerTypes: {
        cpa: true,
        cpi: false,
        cpl: true
      },
      offers: [],
      countries: []
    },
    offersSort: {
      prop: 'name',
      ascending: true
    }
  }
  onSortOffersTable = prop => event => {
    const { offersSort: os, offers } = this.state
    const offersSort = {
      prop,
      ascending: !os.ascending
    }
    const sortBy = os.ascending ? prop : `${prop}Desc`
    this.setState({ offers: sortOfferBy[sortBy](offers), offersSort })
  }

  isSortingColumn = prop =>
    this.state.offersSort.prop === prop ? { sorted: this.state.offersSort.ascending } : { sorted: false }
  componentDidMount() {
    LoadOffers().then(offers => this.setState({ offers }))
    LoadCountries().then(countries => this.setState({ countries }))
  }

  render() {
    const { currentFilter, countries, offers } = this.state
    const { onSortOffersTable, isSortingColumn } = this
    return (
      <Shell currentFilter={currentFilter} categories={Categories} countries={countries}>
        <div className="App">
          <h1>
            Market Place <br />
            <small className="md-title">Find the best offers</small>
          </h1>
          <div className="dividers__border-example">
            <div className="md-divider-border md-divider-border--top" />
          </div>
          <OffersTable offers={offers} onSort={onSortOffersTable} amISorted={isSortingColumn} />
        </div>
      </Shell>
    )
  }
}

export default App
