import React, { PureComponent } from 'react'

import { LoadOffers, LoadCountries } from '../../services/Load'
import * as sortOfferBy from '../../utilities/offerSort'
import { fullFilter } from '../../utilities/offersFilter'

import Shell from '../../components/Shell'
import OffersTable from '../../components/OffersTable'

import './App.css'

const Categories = [{ id: '1', label: 'Adult' }, { id: '2', label: 'MainStream' }, { id: '3', label: 'Incentive' }]

class App extends PureComponent {
  state = {
    currentFilter: {
      offerTypes: {
        cpa: true,
        cpi: false,
        cpl: true
      },
      offerName: '',
      country: '',
      category: ''
    },
    offers: [],
    filteredOffers: [],
    countries: [],
    offersSort: {
      prop: 'name',
      ascending: true
    }
  }
  onSortOffersTable = prop => event => {
    const { offersSort: os, filteredOffers } = this.state
    const offersSort = {
      prop,
      ascending: !os.ascending
    }
    const sortBy = os.ascending ? prop : `${prop}Desc`
    this.setState({ filteredOffers: sortOfferBy[sortBy](filteredOffers), offersSort })
  }

  isColumnSorted = prop =>
    this.state.offersSort.prop === prop ? { sorted: this.state.offersSort.ascending } : { sorted: false }
  amISortingColumn = prop => this.state.offersSort.prop === prop

  onNameChange = val =>
    this.setState(state => ({ ...state, currentFilter: { ...state.currentFilter, offerName: val } }))
  onCountryChange = val =>
    this.setState(state => ({ ...state, currentFilter: { ...state.currentFilter, country: val } }))
  onCategoryChange = val =>
    this.setState(state => ({ ...state, currentFilter: { ...state.currentFilter, category: val } }))

  onFilter = event => {
    event.preventDefault()
    this.setState(state => ({
      ...state,
      filteredOffers: fullFilter(state.currentFilter, state.offers)
    }))
  }
  toggleCPA = () =>
    this.setState(state => ({
      ...state,
      currentFilter: {
        ...state.currentFilter,
        offerTypes: { ...state.currentFilter.offerTypes, cpa: !state.currentFilter.offerTypes.cpa }
      }
    }))
  toggleCPI = () =>
    this.setState(state => ({
      ...state,
      currentFilter: {
        ...state.currentFilter,
        offerTypes: { ...state.currentFilter.offerTypes, cpi: !state.currentFilter.offerTypes.cpi }
      }
    }))
  toggleCPL = () =>
    this.setState(state => ({
      ...state,
      currentFilter: {
        ...state.currentFilter,
        offerTypes: { ...state.currentFilter.offerTypes, cpl: !state.currentFilter.offerTypes.cpl }
      }
    }))

  componentDidMount() {
    LoadOffers().then(offers => this.setState({ offers, filteredOffers: offers }))
    LoadCountries().then(countries => this.setState({ countries }))
  }

  render() {
    const { currentFilter, countries, filteredOffers } = this.state
    const {
      onSortOffersTable,
      isColumnSorted,
      amISortingColumn,
      onNameChange,
      onCountryChange,
      onCategoryChange,
      onFilter,
      toggleCPA,
      toggleCPI,
      toggleCPL
    } = this

    return (
      <Shell
        currentFilter={currentFilter}
        categories={Categories}
        countries={countries}
        onNameChange={onNameChange}
        onCountryChange={onCountryChange}
        onCategoryChange={onCategoryChange}
        onFilter={onFilter}
        toggleCPA={toggleCPA}
        toggleCPI={toggleCPI}
        toggleCPL={toggleCPL}
      >
        <div className="App">
          <h1>
            Market Place <br />
            <small className="md-title">Find the best offers</small>
          </h1>
          <div className="dividers__border-example">
            <div className="md-divider-border md-divider-border--top" />
          </div>
          <OffersTable
            offers={filteredOffers}
            onSort={onSortOffersTable}
            amISorted={isColumnSorted}
            amISorting={amISortingColumn}
          />
        </div>
      </Shell>
    )
  }
}

export default App
