import { descend, ascend, prop, sort } from 'ramda'
export const SortBy = key => sort(ascend(prop(key)))
export const SortDescBy = key => sort(descend(prop(key)))
