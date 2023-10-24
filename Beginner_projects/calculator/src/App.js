import { Fragment, useState } from "react";
import Header from "./Components/Header_Footer/Header";
import Footer from "./Components/Header_Footer/Footer";
import Wrapper from './Components/UI/Wrapper';

const App = () => {

  const [expression, setExpression] = useState('');

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        const result = eval(expression);
        setExpression(result);
      } catch (error) {
        setExpression('Error');
      }
    } else if (label === 'AC') {
      setExpression('');
    } else if (label === '+/-') {
      if(expression !== ''){
        let val = parseFloat(expression);
        if(val !== 0){
          val = -1 * val;
          val = val.toString();
          setExpression(val);
        }
      } 
    } else {
      setExpression(expression + label);
    }
  }
  return (
    <Fragment>
      <Header/>
      <Wrapper onButtonClick={handleButtonClick} expression={expression}/>
      <Footer/>
    </Fragment>
  )
}

export default App;