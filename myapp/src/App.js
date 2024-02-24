// import logo from './logo.svg';
import './App.css';
import Counter from './Restaurent/Practice.jsx/Counter';
import FakeTodo from './Restaurent/Practice.jsx/FakeTodo';
// import Props from './Container/Props';
// import Preciver from './Container/Preciver'
// import UseState_Object from './Container/UseState_Object'
// import UseState from './Container/useState';
// import RuleofJsx from './Container/RuleofJsx';
import Restaurent from './Restaurent/Restaurent';
import UserInterface from './Restaurent/userInterface';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
        <Restaurent/>
       {/* <FakeTodo/>  */}
       {/* <UserInterface/> */}

      {/* <UseState/> */}
   {/* <UseState_Object/>
  
   <RuleofJsx/> */}
 
   {/* <Props/>
    <Preciver/> */}
    </div>
  );
}

export default App;