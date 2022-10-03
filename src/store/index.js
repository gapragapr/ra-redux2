import { legacy_createStore, combineReducers } from 'redux';
import ItemChange from '../reducers/ItemReducer'

const reducer = combineReducers({
  itemsList: ItemChange,
});
const store = legacy_createStore(reducer);

export default store;