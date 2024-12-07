import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TradeSearch from './components/pages/TradeSearch/TradeSearch';
import { isMobile } from 'react-device-detect';
import TradeSearchMobile from './components/pages/mobile/TradeSearchMobile/TradeSearchMobile';
import { useEffect } from 'react';

function App() {

  return (
    <div className='App'>
      {isMobile? <TradeSearchMobile /> : <TradeSearch />}
    </div>
  );
}

export default App;
