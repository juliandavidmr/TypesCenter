import { combineReducers } from 'redux';

import {
  LISTAR_ROLES,
  VER_ROL,
  INSERTAR_ROL,
  ELIMINAR_ROL,
  ERROR_ACTUALIZAR_ROL,
  ERROR_INSERTAR_ROL,
  ERROR_ELIMINAR_ROL,
  ERROR_ROL
} from '../constants/rol';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_roles: [],
  error: null,
  result: false
});

export function rol(state = initialState, action) {
  switch (action.type) {
    case LISTAR_ROLES:
      return state.merge({
        data_list_roles: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_ROL:
      return state.merge({
        data_list_roles: action.response.data,
        err: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  rol
});

export default Reducer;
