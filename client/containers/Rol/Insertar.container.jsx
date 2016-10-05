/**
  Contenedor para Insertar un rol
*/

import React, {Component, PropTypes, applyMiddleware} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import InsertarComponent from '../../components/Rol/Insertar.component.jsx';
import * as RolActions from '../../actions/rol.js';

import NotificationSystem from 'react-notification-system';

class InsertarRol extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descripcion: ''
    };

    this._handleClick = this._handleClick.bind(this);
    this._onChangeInput = this._onChangeInput.bind(this);
  }


  _handleClick() {
    console.log('Rgistrando');

    const { actions } = this.props;

    actions.registrar({ descripcion: this.state.descripcion }).then(() => {
      console.log('insert rol ===>>=>==> ', this.props.rol);

      // Notification.create('Hola!', 'Hola este es el cuerpo!');

      this._notificationSystem.addNotification({
        message: 'Registrado exitosamente!',
        level: 'success',
        autoDismiss: 5
      });
    }).catch(err => {
      console.log('>>=>==> ', err);

      this._notificationSystem.addNotification({
        message: 'Error al registrar!',
        level: 'danger',
        autoDismiss: 5
      });
    });
  }

  _onChangeInput(event) {
    this.setState({ descripcion: event.target.value });
  }

  render() {
    const {rol} = this.props;

    return (
      <form>
        <InsertarComponent onChangeText={this._onChangeInput}/>

        <button type="button" className="btn btn-primary" onClick={this._handleClick}>Insertar</button>

        <NotificationSystem ref="notificationSystem" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Los state de rol:", state);

  return { rol: state.rol };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RolActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertarRol);
