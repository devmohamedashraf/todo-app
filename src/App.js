import { useContext } from 'react';
import './App.css';
import Sidebar from './components/global/Sidebar';
import Main from './components/Main';

import { TaskContext } from './contexts/TaskContext';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';

function App() {

  return (
    <ThemeContextProvider>
        <div className="App">
            <Sidebar />
            <Main />
        </div>
    </ThemeContextProvider>
  );
}

export default App;
