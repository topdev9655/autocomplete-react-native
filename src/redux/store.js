import { legacy_createStore as createStore, combineReducers} from 'redux';
import hisReducer from './reducer';

const rootReducer = combineReducers({
    histories: hisReducer,
});

export const store = createStore(rootReducer);