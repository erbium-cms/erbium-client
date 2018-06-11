import { CONFIGURATION_LOADED } from '../types'

const configuration = (state = {}, action) => {
  switch (action.type) {
    case CONFIGURATION_LOADED:
      return action.configuration
    default:
      return state
  }
}

export default configuration
