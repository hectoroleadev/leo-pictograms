export const Spinner = () => {
  return (
    <div
      className='d-flex min-vh-100 text-center 
                 align-items-center justify-content-center'
    >
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
