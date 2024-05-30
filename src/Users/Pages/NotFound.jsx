import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-xl text-gray-700 mt-4">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
