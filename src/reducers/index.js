import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })

// 状態を管理したい要素を追加する場合は、以下のように要素を追加する
// export example combineReducers({ foo, bar, baz })
