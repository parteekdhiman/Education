import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <p className="mb-4 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col gap-2 sm:flex-row justify-center">
          <button 
            onClick={handleGoBack}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
          <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;