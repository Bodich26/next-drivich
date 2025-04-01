type Props = {
  error: unknown;
  entities: string;
};
export const DisplayLoadingErrors = ({ error, entities }: Props) => {
  return (
    <div className="w-full bg-color-white rounded-md text-center p-4 hover-shadow-block">
      <h1 className="text-xl font-bold mb-1">Loading {entities} Error</h1>
      <p>
        {error
          ? `Oops, ${entities} loading error: ${error}!`
          : `Oops, an unknown error occurred while loading the ${entities}!`}
      </p>
    </div>
  );
};
