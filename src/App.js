
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HooksUseState from './Components/HooksUseState';
import HooksUseStaTwo from './Components/HooksUseStaTwo';
import UseStateThree from './Components/UseStateThree';
import IntervalHooks from './Components/IntervalHooks';
import UseContext from './Components/UseContext';

export const UserContext = React.createContext()
export const User2Context = React.createContext()


function App() {
  return (
    <div className="App">
      {/* <HooksUseState/> */}
      {/* <HooksUseStaTwo/> */}
      {/* <UseStateThree/> */}
      {/* <IntervalHooks/> */}
      <UserContext.Provider value={"rajkumar"}>
        <UseContext/>
        {/* <User2Context/> */}
      </UserContext.Provider>
      <UserContext.Provider value={"chetan"}>
        {/* <UseContext/> */}
        <User2Context/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
