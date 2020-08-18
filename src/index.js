import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Principal from './pages/principal';


const Pagina404 = () => ( <div>PÁGINA  ERRO 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/principal" component={Principal} />
        <Route  component={Pagina404 } />
    </Switch>
  </BrowserRouter>,
   document.getElementById('root')
);

