import React from 'react';

const ErrorPage = ({ errorCode = "Error", message = "Something went wrong.", onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-600">{errorCode}</h1>
        <p className="mt-4 text-gray-700 text-lg">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
