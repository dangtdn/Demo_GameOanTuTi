import {combineReducers, createStore} from 'redux';
import {gameReducer} from './reducers/BTGameOanTuTiReducer'

const rootReducer = combineReducers({
    gameReducer,
})

export const store = createStore(rootReducer)
