import React, { PureComponent } from 'react'
import { MenuButton } from 'react-md'

import { LoadOffers, LoadCountries } from '../../services/Load'
import * as sortOfferBy from '../../utilities/offerSort'
import { fullFilter } from '../../utilities/offersFilter'

import Shell from '../../components/Shell'
import OffersTable from '../../components/OffersTable'
import Sorting from '../../components/Sorting'

import './App.css'

const Categories = [
  { id: '0', label: 'All' },
  { id: '1', label: 'Adult' },
  { id: '2', label: 'MainStream' },
  { id: '3', label: 'Incentive' }
]

const InitialState = {
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

class App extends PureComponent {
  state = InitialState

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
      onResetFilter,
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
        onResetFilter={onResetFilter}
        toggleCPA={toggleCPA}
        toggleCPI={toggleCPI}
        toggleCPL={toggleCPL}
      >
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
          />
        </div>
      </Shell>
    )
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

  onResetFilter = () =>
    this.setState(state => ({ ...state, currentFilter: InitialState.currentFilter, filteredOffers: state.offers }))
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
}

export default App
