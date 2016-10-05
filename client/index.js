import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// Buscar
import Buscar from './containers/Buscar/index.jsx';
import ListarRoles from './containers/Buscar/Listar.container.jsx';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/';

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path={basename} component={Buscar}></Route>

    <Route path={basename}>
      <Route path="listar" component={ListarRoles}/>  
    </Route>
    
    <Route path="*" component={NoMatch}/>
  </Router>
</Provider>, document.getElementById('root'));
