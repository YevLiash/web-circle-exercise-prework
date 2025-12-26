import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import MenuItemDetails from './components/MenuItem/MenuItemDetails.jsx'
import RestaurantView from './views/RestaurantView.jsx'

import './App.css'
import FavoritesPage from './components/FavoritesPage/FavoritesPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={<RestaurantView />}
        />
        <Route
          path="/meals/:id"
          element={<MenuItemDetails />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="/*"
          element={<p>404 Page not found</p>}
        />
      </Routes>
    </Router>
  )
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  return import.meta.env.MODE === 'development' ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  )
}
