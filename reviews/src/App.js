import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import ClassCounterOne from './components2/ClassCounterOne';
import ClassMouse from './components2/ClassMouse';
import HookMouse from './components2/HookMouse';
import MouseContainer from './components2/MouseContainer';
import IntervalHookCounter from './components2/IntervalHookCounter';
import IntervalClassCounter from './components2/IntervalClassCounter';
import DataFetching from './components2/DataFetching';

function App() {
  return (
    <div className="App">
      <DataFetching/>

    </div>
  );
}

export default App;
