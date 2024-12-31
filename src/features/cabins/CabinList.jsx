import { useCabins } from "./useCabins";

export function CabinList() {
  const { isPending, error, cabins } = useCabins();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!cabins || cabins.length === 0) return <div>No cabins available</div>;

  return (
    <div>
      {cabins.map((cabin) => (
        <div key={cabin.id}>
          <h3>{cabin.name}</h3>
          {cabin.imageUrl ? (
            <img src={cabin.imageUrl} alt={cabin.name} />
          ) : (
            <div>No image available</div>
          )}
        </div>
      ))}
    </div>
  );
}
