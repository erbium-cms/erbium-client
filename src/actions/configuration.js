import { load } from './configuration.service'
import { CONFIGURATION_LOADED } from '../types'

export const configurationLoaded = configuration => {
  return {
    type: CONFIGURATION_LOADED,
    configuration
  }
}

export function loadConfiguration() {
  return dispatch => {
    load().then(({ success, configuration }) => {
      dispatch(configurationLoaded(configuration))
    })
  }
}
