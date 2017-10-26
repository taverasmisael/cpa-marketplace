const GlobalConfig = {
  maximumFractionDigits: 2
}
const toLocaleString = (value, config) => Number(value).toLocaleString('en', config)
export const toCurrency = value => toLocaleString(value, { ...GlobalConfig, currency: 'USD', style: 'currency' })
export const toNumber = value => toLocaleString(value, GlobalConfig)
export const toPercentaje = n => `${toNumber(n)} %`
export const capitalize = str => {
  const [frst, ...rest] = str
  return [frst.toUpperCase(), ...rest].join('')
}
