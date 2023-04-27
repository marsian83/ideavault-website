import useCache from "../../../contexts/cacheContext";

export default function Team() {
  const cache = useCache();

  return (
    <section className="p-page relative py-10">
      <div className="absolute top-0 left-0 w-full -z-[100]">
        <img
          src="https://www.smallcase.com/static/images/svg/InvIdeasPatternLeft.svg"
          className="absolute top-0 left-0"
        />

        <img
          src="https://www.smallcase.com/static/images/svg/InvIdeasPatternRight.svg"
          className="absolute top-0 right-0"
        />
      </div>

      <h1 className="font-bold text-center text-3xl">Meet Our Team</h1>
      <div className="flex flex-wrap justify-evenly gap-y-6 py-10">
        {cache.data.team.map((person, i) => (
          <div
            key={i}
            className="w-[22%] flex flex-col gap-y-3 p-4 rounded-lg shadow-lg items-center bg-background bg-opacity-50 backdrop-blur-sm"
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
