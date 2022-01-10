import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

// form --> form: form のシンタックスシュガー
export default combineReducers({ events, form })
