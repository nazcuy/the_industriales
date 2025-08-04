import { Routes, Route } from 'react-router-dom';
import App from './App';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<App />} />
    </Routes>
);

export default AppRoutes;