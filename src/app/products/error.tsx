'use client';

export default function ErrorBoundary({
 error,
 reset,
}: {
 error: Error;
 reset: () => void;
}) {
 return (
  <div>
   {error.message}
   <button style={{ background: 'gray' }} onClick={reset}>
    Try again
   </button>
  </div>
 );
}
//use error component to display error message for specific parts of ui that may fail
