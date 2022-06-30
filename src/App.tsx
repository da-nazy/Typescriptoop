import React,{Component,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';



class App extends Component<any> {

  

  render(): React.ReactNode {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Message />
        </header>
      </div>
    );
  }
}

export default App;
// stopped at clip 