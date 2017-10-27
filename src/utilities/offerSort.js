import { descend, ascend, prop, sort } from 'ramda'

export const name = sort(ascend(prop('name')))
export const nameDesc = sort(descend(prop('name')))

export const payout = sort(ascend(prop('payout')))
export const payoutDesc = sort(descend(prop('payout')))

export const revenue = sort(ascend(prop('revenue')))
export const revenueDesc = sort(descend(prop('revenue')))

export const clicks = sort(ascend(prop('clicks')))
export const clicksDesc = sort(descend(prop('clicks')))

export const cr = sort(ascend(prop('cr')))
export const crDesc = sort(descend(prop('cr')))

export const erpm = sort(ascend(prop('erpm')))
export const erpmDesc = sort(descend(prop('erpm')))
