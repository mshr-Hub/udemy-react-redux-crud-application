import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })

// 状態を管理したい要素を追加する場合は、以下のように要素を追加する
// export example combineReducers({ foo, bar, baz })
