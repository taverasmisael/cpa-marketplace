import { propEq, cond, or, compose, keys, identity, map, equals, always, filter, curry, contains, prop } from 'ramda'

const isNameOrId = or(propEq('name'), propEq('id'))
const isCountry = propEq('country')
const isVertical = propEq('vertical')

const OfferTypesValues = cond([
  [equals('cpa'), always('0')],
  [equals('cpl'), always('1')],
  [equals('cpi'), always('2')]
])

const MapOfferTypes = compose(map(OfferTypesValues), keys, filter(identity))
export const fullFilter = curry((filters, offers) => {
  const { offerName, country, category, offerTypes } = filters
  const ot = MapOfferTypes(offerTypes)
  const nameFiltered = offerName ? filter(isNameOrId(offerName), offers) : offers
  const countryFiltered = country
    ? filter(isCountry(country), nameFiltered)
    : nameFiltered.length ? nameFiltered : offers
  console.log('category', category)
  const categoryFiltered = category
    ? filter(isVertical(category), countryFiltered)
    : countryFiltered.length ? countryFiltered : offers
  const typeFilter = ot.length
    ? filter(o => contains(prop('offerType', o), ot), categoryFiltered)
    : categoryFiltered.length ? categoryFiltered : offers
  return typeFilter
})
