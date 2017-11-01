import { propEq, cond, or, compose, keys, identity, map, equals, always, filter, curry, contains, prop } from 'ramda'

const isNameOrId = or(propEq('name'), propEq('id'))
const isCountry = propEq('country')
const isVertical = propEq('vertical')

const OfferTypesValues = cond([
  [equals('cpa'), always('0')],
  [equals('cpl'), always('1')],
  [equals('cpi'), always('2')]
])

const isValidFilter = filter => filter && filter !== '' && filter !== '0' && filter !== 0

const MapOfferTypes = compose(map(OfferTypesValues), keys, filter(identity))
export const fullFilter = curry((filters, offers) => {
  const { offerName, country, category, offerTypes } = filters
  const ot = MapOfferTypes(offerTypes)
  const nameFiltered = isValidFilter(offerName) ? filter(isNameOrId(offerName), offers) : offers
  const countryFiltered = isValidFilter(country) ? filter(isCountry(country), nameFiltered) : nameFiltered
  const categoryFiltered = isValidFilter(category) ? filter(isVertical(category), countryFiltered) : countryFiltered
  const typeFilter = ot.length ? filter(o => contains(prop('offerType', o), ot), categoryFiltered) : categoryFiltered
  return typeFilter
})
