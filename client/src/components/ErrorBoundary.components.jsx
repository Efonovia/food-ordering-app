import React from 'react';
import ErrorPage from '../pages/ErrorPage.page';


function ErrorBoundary({ children }) {
    const [hasError, setHasError] = React.useState(false);
  
    React.useEffect(() => {
      const handleErrors = () => {
        setHasError(true);
      };
  
      window.addEventListener('error', handleErrors);
  
      return () => {
        window.removeEventListener('error', handleErrors);
      };
    }, []);
  
    if (hasError) {
      return <ErrorPage />;
    }
  
    return children;
  }
  
  export default ErrorBoundary;