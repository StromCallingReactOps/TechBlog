import logo from './logo.svg';
import tosstechlogo from './img/tosstech.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={tosstechlogo} className="toss-logo" alt="tosstechlogo" />
        <div className='header-right-elements'>
          <a className='header-right-just-text' href='https://toss.tech/design'>디자인</a>
          <a className='header-right-just-text'href='https://toss.tech/tech'>개발</a>          
          <button className='header-right-button'>채용 바로가기</button>   
        </div>

        
      
      </header>
      <div>
      
        Test Dev

        <a
          className="App-link"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
