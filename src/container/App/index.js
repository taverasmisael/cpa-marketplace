import React, { PureComponent } from 'react'

import { LoadOffers, LoadCountries } from '../../services/Load'
import { SortBy, SortDescBy } from '../../utilities/offerSort'
import { fullFilter } from '../../utilities/offersFilter'

import Shell from '../../components/Shell'
import Loading from '../../components/Loading'
import AppContent from '../AppContent'

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
  },
  offerDetailVisible: false,
  currentSelectedOffer: {}
}

class App extends PureComponent {
  state = InitialState

  componentDidMount() {
    setTimeout(
      () =>
        LoadOffers().then(offers =>
          this.setState((state, { match: { params } }) => {
            const currentSelectedOffer = offers.find(o => o.id === params.offerId) || {}
            const offerDetailVisible = currentSelectedOffer && !!currentSelectedOffer.name
            return { ...state, offers, filteredOffers: offers, currentSelectedOffer, offerDetailVisible }
          })
        ),
      2000
    )
    LoadCountries().then(countries => this.setState({ countries }))
  }
  render() {
    const { currentFilter, countries, filteredOffers, currentSelectedOffer, offerDetailVisible } = this.state
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
      toggleCPL,
      onHideOfferDetail,
      onSelectOffer
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
        {filteredOffers.length ? (
          <AppContent
            onSortOffersTable={onSortOffersTable}
            amISortingColumn={amISortingColumn}
            filteredOffers={filteredOffers}
            isColumnSorted={isColumnSorted}
            offerDetailVisible={offerDetailVisible}
            currentSelectedOffer={currentSelectedOffer}
            onHideOfferDetail={onHideOfferDetail}
            onSelectOffer={onSelectOffer}
          />
        ) : (
          <Loading />
        )}
      </Shell>
    )
  }
  onSortOffersTable = prop => () => {
    const { offersSort: os, filteredOffers: fo } = this.state
    const offersSort = {
      prop,
      ascending: !os.ascending
    }
    const sortBy = os.ascending ? SortBy : SortDescBy
    const filteredOffers = sortBy(prop)(fo)
    this.setState({ filteredOffers, offersSort })
  }

  selectOffer = id => (id ? this.state.offers.find(o => o.id === id) || {} : {})
  onSelectOffer = id => () => {
    this.setState(state => ({ ...state, currentSelectedOffer: this.selectOffer(id), offerDetailVisible: true }))
    this.props.history.push(`/${id}`)
  }
  onHideOfferDetail = () => this.setState({ offerDetailVisible: false, currentOffer: {} })
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
