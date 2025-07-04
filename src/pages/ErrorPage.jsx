import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); // <-- Will log full stack in dev

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-gray-700">
        {isRouteErrorResponse(error)
          ? `${error.status} - ${error.statusText}`
          : error.message || 'Unknown error'}
      </p>

      {error.stack && (
        <pre className="mt-4 p-4 bg-gray-100 text-left text-xs text-red-700 overflow-auto">
          {error.stack}
        </pre>
      )}
    </div>
  );
}
