import axios from 'axios';

import {
  LISTAR_ROLES,
  VER_ROL,
  INSERTAR_ROL,
  ELIMINAR_ROL,
  ERROR_ACTUALIZAR_ROL,
  ERROR_INSERTAR_ROL,
  ERROR_ELIMINAR_ROL,
  ERROR_ROL,
  SUCCESSFULL_INSERT_ROL
} from '../constants/rol';


// ERROR LISTAR: Cuando ocurre un error al consultar el listado de roles
export function errorListar(error) {
  return {
    error,
    type: ERROR_ROL
  };
}

// REQUEST ROLES:
export function rolesRequest(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_ROLES
    });
  };
}

export function rol_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_ROL
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(ROL_GET_ROLES)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('=>=> Response listar rol: ', response);
          dispatch(rolesRequest(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(errorListar(error));
        }
      }).catch(err => {
        const error = new Error(err);

        dispatch(errorListar(error));
      });
}

export function registrar(rol_data) {
  console.log('Rol registrar data: ', rol_data);

  return dispatch =>
    axios.post(ROL_POST_ROL, {
      rol_idrol: Math.floor((Math.random() * 100) + 1),
      rol_nombrerol: rol_data.descripcion
    })
      .then(function (response) {
        if (response.status >= 200 && response.status < 300 && response.data.result) {
          console.log('=>=> Response registrar rol: ', response);
          dispatch(rol_post_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(errorListar(error));
        }
      })
      .catch(function (error) {
        const err = new Error(error);

        dispatch(errorListar(err));
      });
}
