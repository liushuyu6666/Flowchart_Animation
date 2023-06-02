import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Canvas } from './pages/Canvas/Canvas';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
    ]);
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <Canvas>
            {/* <RouterProvider router={router} /> */}
        </Canvas>
    );
}

export default App;
