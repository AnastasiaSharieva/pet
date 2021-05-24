import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {SWrap} from './common/Wrap_styled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Empty from './components/Empty/Empty';
import Authorization from './components/Authorization/Authorization';

const App = () => {
  return (
    <div>
      <Header />
      <SWrap>
        <Switch>
          <Route path='/authorization' component={Authorization}/>
          <Route path='/empty' component={Empty}/>
          <Route path='/authorization' component={Authorization}/>
        </Switch>
      </SWrap>
      <Footer/>
    </div>
  );
}

export default App;
