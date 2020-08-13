import {engineSelectorTypes} from './engine-selector.types'
export const selectEngineType = (payload) => ({
      type: engineSelectorTypes.selectEngine,
      payload
})
