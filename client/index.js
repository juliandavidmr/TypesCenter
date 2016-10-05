import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// Rol
import Rol from './containers/Rol/index.jsx';
import ListarRoles from './containers/Rol/Listar.container.jsx';
import InsertarRol from './containers/Rol/Insertar.container.jsx';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/';

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={Rol}>
        
      </Route>      

    <Route path={basename}>
      <Route path="listar" component={ListarRoles}/>      
      <Route path="rol" component={Rol} />

      <Route path="*" component={NoMatch}/>
    </Route>

  </Router>
</Provider>, document.getElementById('root'));
