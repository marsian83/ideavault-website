const founders = [
  {
    name: "Aman Kaya",
    imageUrl: "/images/people/AmanKaya.jpg",
    description:
      "Meet Aman Kaya, the visionary co-founder of Ideavault. Aman is a rising star in the fintech industry with a wealth of experience in wealth and asset management, private equity, and venture capital. He has previously worked with some of the largest firms in these sectors, including EY and Parthenon Financial Services. Despite his young age, Aman has already established himself as an accomplished investor, with a strong track record of success in global equities. He is currently studying industrial engineering at HKU, where he continues to hone his skills and expertise. Prior to founding Ideavault, Aman also launched several startups, including Lytebryte and Holistic Tech. He has also served as the head of exports at Big Wig Ply, where he played a key role in driving growth and expanding the company's reach. Aman's passion for innovation and his deep understanding of the fintech industry make him the perfect leader for Ideavault. With his expertise and vision, he is determined to revolutionize the wealth management industry in Hong Kong and beyond.",
  },
  {
    name: "Rahul Agarwal",
    imageUrl: "/images/people/RahulAgarwal.jpg",
    description:
      "Rahul is a brilliant mind in the tech industry and is one of the co-founders of Ideavault. With his extensive experience in software development and entrepreneurship, Rahul has played a critical role in the growth and success of the company. Throughout his career, Rahul has shown an incredible talent for turning complex ideas into functional and user-friendly software. He has a deep understanding of the latest trends in technology and is always looking for ways to integrate new ideas into his work.  As a co-founder of Ideavault, Rahul has been instrumental in building the company's reputation as a leader in the tech industry. He has worked tirelessly to build a team of talented developers and has fostered a culture of creativity and innovation within the company. In addition to his technical expertise, Rahul is also a skilled entrepreneur who understands the business side of the tech industry. He has a keen sense of market trends and is always looking for ways to improve the company's bottom line. ",
  },
];

export default function Founders() {
  return (
    <section className="py-16 p-page">
      <h1 className="text-3xl font-semibold text-center">Meet Our Founders</h1>
      <div className="my-8 flex flex-col gap-y-10">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="flex mobile:flex-col gap-x-8 items-center justify-between"
          >
            <img
              src={founder.imageUrl}
              alt={founder.name}
              className="w-[20%] mobile:w-[80%] m-5 rounded-full border aspect-square border-front border-opacity-50"
            />
            <div className="md:flex flex-col gap-y-5">
              <h3 className="text-xl font-medium">{founder.name}</h3>
              <p className="text-sm text-front text-opacity-90 mobile:mt-3">
                {founder.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
