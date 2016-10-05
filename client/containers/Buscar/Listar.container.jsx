/**
  Contenedor para listar roles
*/

import React, {Component, PropTypes, applyMiddleware } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListarRolesComponent from '../../components/Buscar/ListarRoles.component.jsx';
import * as BuscarActions from '../../actions/buscar.js';

class ListarRoles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabla_datos: [],
      cargando: true
    };
  }

  // Antes de renderizar el componente
  componentWillMount() {
    const { actions } = this.props;

    actions.listar().then(() => {
      console.log('list roles ===>>=>==> ', this.props.rol.rol);

      this.setState({
        tabla_datos: JSON.parse(JSON.stringify(this.props.rol.rol.get('data_list_roles').toArray())),
        cargando: false
      });
    }).catch(err => {
      console.log('ERROR> ', err);

      this.setState({
        cargando: false
      });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.cargando ? <div className="col-md-3">
            <div className="box box-danger">
              <div className="box-header">
                <h3 className="box-title">Cargando roles</h3>
              </div>
              <div className="box-body">
                Espere por favor...
              </div>

              <div className="overlay">
                <i className="fa fa-refresh fa-spin"></i>
              </div>
            </div>
          </div> : ''
        }

        <ListarRolesComponent tabla_datos={this.state.tabla_datos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("Los state de rol:", state);

  return {
    rol: state.rol
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BuscarActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListarRoles);
