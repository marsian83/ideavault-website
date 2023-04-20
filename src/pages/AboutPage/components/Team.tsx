import useCache from "../../../contexts/cacheContext";

export default function Team() {
  const cache = useCache();

  return (
    <section className="p-page py-10">
      <h1 className="font-bold text-center text-3xl">Our Team</h1>
      <div className="flex flex-wrap justify-evenly gap-y-6 py-10">
        {cache.data.team.map((person, i) => (
          <div
            key={i}
            className="w-[22%] flex flex-col gap-y-3 p-4 rounded-lg shadow-lg items-center"
            onClick={() => {
              person.link && window.open(person.link, "__never");
            }}
          >
            <img
              className="w-2/3 rounded-full aspect-square object-cover"
              src={person.imageUrl}
              alt={person.name}
            />
            <h3 className="text-lg font-medium">{person.name}</h3>
            <p className="text-sm">{person.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
