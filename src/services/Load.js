import fetch from 'unfetch'

export const LoadOffers = async () => {
  const offers = await fetch('/offers.json')
  return offers.json()
}

export const LoadCountries = async () => {
  const countries = await fetch('/countries.json')
  return countries.json()
}
