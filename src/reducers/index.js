import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';

import nav from './nav';
import auth from './auth';
import account from './account';
import home from './home';
import homeSingle from './homeSingle';

const AppReducer = combineReducers({
  nav,
  auth,
  account,
  home,
  homeSingle,
  form: formReducer,
});

export default AppReducer;
