import {engineSelectorTypes} from './engine-selector.types'

const initialState = {
      selectedEngine: '2L'
}

const engineSelectorReducer = (state = initialState, { type, payload }) => {
      switch (type) {

      case engineSelectorTypes.selectEngine:
            return { 
                  ...state, 
                  selectedEngine: payload 
            }

      default:
            return state
      }
}

export default engineSelectorReducer;