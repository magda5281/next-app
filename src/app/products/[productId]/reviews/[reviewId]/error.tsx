'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
 return <div>{error.message}</div>;
}
//use error component to display error message for specific parts of ui that may fail
