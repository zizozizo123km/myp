import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Lazy loading pages for performance
const LoginPage = React.lazy(() => import('../pages/Auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/Auth/RegisterPage'));
const HomePage = React.lazy(() => import('../pages/Home/HomePage'));
const ProfilePage = React.lazy(() => import('../pages/Profile/ProfilePage'));
const FriendsPage = React.lazy(() => import('../pages/Friends/FriendsPage'));
const WatchPage = React.lazy(() => import('../pages/Watch/WatchPage'));
const MainLayout = React.lazy(() => import('../layouts/MainLayout'));

// --- Authentication Simulation ---
// In a real application, this logic would be provided via Context or Redux
const isAuthenticated = () => {
    // Simple check: user is authenticated if a token exists.
    // Replace with actual authentication state check.
    return localStorage.getItem('facebook_auth_token') === 'simulated_token';
};

// Component to protect routes
const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        // If not logged in, redirect to the login page
        return <Navigate to="/login" replace />;
    }
    return children;
};

// Component to redirect logged-in users away from auth pages
const AuthRoute = ({ children }) => {
    if (isAuthenticated()) {
        // If already logged in, redirect to the main feed
        return <Navigate to="/" replace />;
    }
    return children;
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <React.Suspense fallback={
                <div className="flex items-center justify-center h-screen bg-gray-50">
                    {/* Basic Facebook style loading spinner */}
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    <span className="ml-4 text-blue-600 text-xl font-semibold">Loading Facebook...</span>
                </div>
            }>
                <Routes>
                    
                    {/* Authentication Routes */}
                    <Route 
                        path="/login" 
                        element={<AuthRoute><LoginPage /></AuthRoute>} 
                    />
                    <Route 
                        path="/register" 
                        element={<AuthRoute><RegisterPage /></AuthRoute>} 
                    />

                    {/* Authenticated Application Routes */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <MainLayout />
                            </ProtectedRoute>
                        }
                    >
                        {/* Nested routes within the MainLayout (Navbar, Sidebar) */}
                        <Route index element={<HomePage />} /> {/* / */}
                        <Route path="profile/:userId" element={<ProfilePage />} />
                        <Route path="friends" element={<FriendsPage />} />
                        <Route path="watch" element={<WatchPage />} />
                    </Route>

                    {/* Fallback Route for 404 */}
                    <Route path="*" element={
                        <div className="flex flex-col items-center justify-center h-screen bg-white">
                            <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
                            <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
                            <a href="/" className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                                Go to Feed
                            </a>
                        </div>
                    } />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;