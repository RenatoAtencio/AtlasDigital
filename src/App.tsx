import React from 'react';
import { Link } from 'react-router-dom';
import AllRoutes from './routes/Routes';

const App = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav> */}
      <AllRoutes />
    </div>
  );
};

export default App;
