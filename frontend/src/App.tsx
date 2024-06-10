import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import mainRoutes from './routes/app-routes';
<meta name="viewport" content="initial-scale=1, width=device-width" />


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {mainRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
