import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      className='d-flex min-vh-100 text-center 
                 align-items-center justify-content-center'
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
