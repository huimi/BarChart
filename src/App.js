import './App.css';
import Bar from './components/bar.js';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="title">
          <div>
            <span className="small-font">My Balance</span>
            <h4>$921.68</h4>
          </div>
          <div className="circle circle-parent"><div className="circle circle-child"></div></div>
        </header>
        <div className="chart">
          <h4>Spending - Last 7 days</h4>
          <Bar />
          <hr />
          <div className="footer">
            <div>
              <span className="small-font">Total this month</span>
              <h4>$478.33</h4>
            </div>
            <div className="text-right text-end">
              <h6>+2.4%</h6>
              <span className="small-font">from last month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Nancy Hsieh</a>.
      </div>
    </div>
  );
}

export default App;
