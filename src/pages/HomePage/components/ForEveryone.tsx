import { useState } from "react";

const lorem300 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam atque tempore modi. Quam laborum tempore maiores sapiente et, sed quae omnis labore unde dignissimos. Doloribus quisquam maxime aperiam sapiente voluptate quasi ab. Eligendi ratione, a pariatur, porro modi error soluta necessitatibus, voluptas dicta deleniti commodi quod cum dolores reprehenderit aut? Unde magnam quis ducimus. Praesentium veritatis consequuntur sequi animi officiis quaerat ea nostrum fugiat, cumque ab natus ullam molestiae tempora illum aliquam temporibus autem maxime eveniet, officia suscipit itaque delectus. Debitis harum blanditiis unde ex dignissimos nemo enim, maxime minus, labore adipisci assumenda iste praesentium, hic tenetur! Repellendus natus, architecto sint accusantium non unde consequatur quidem repudiandae impedit distinctio id ipsum maiores, rem quis. Laudantium, quia perspiciatis sunt pariatur consequuntur perferendis quisquam atque veniam natus amet minima facilis numquam dicta accusantium nisi nobis in obcaecati est doloribus illum? Sit et delectus a aperiam vitae, blanditiis molestias laboriosam provident placeat temporibus! Quisquam, quia itaque nam animi molestias eveniet voluptate earum quae. Corrupti provident modi voluptas voluptatibus praesentium dolorum temporibus accusantium illo consequuntur laudantium accusamus error repellendus cumque dicta, aspernatur tenetur saepe ipsam voluptatum dignissimos? Rem odio sint labore harum maxime molestias voluptatum delectus dolor laudantium aliquam est, at doloribus aliquid consequuntur quas, quidem nihil doloremque cumque numquam reiciendis nulla fuga ea? Accusantium quas esse possimus vitae saepe in nulla enim omnis sunt beatae soluta consectetur aspernatur eligendi accusamus, cum, unde ad! Iste autem in facere excepturi amet animi tempora adipisci id veritatis possimus incidunt iusto repudiandae suscipit laborum saepe, illum dolorem quasi, asperiores deleniti veniam fugiat molestias? Deserunt recusandae numquam nam corporis! Harum, commodi quam. Perferendis, alias! Totam neque autem, fugiat blanditiis, laboriosam iusto earum, excepturi natus libero quasi ducimus eius harum saepe in alias. Beatae, sed. Cumque vero deserunt, eaque, consequuntur dolore quod quasi eum eius eos natus saepe iusto!";

const items = [
  {
    imageUrl: "/images/low-beta.png",
    title: "Low Beta portfolio",
    description:
      "Invest in Bonds and low beta asset classes to ensure stable returns",
    content: lorem300,
  },
  {
    imageUrl: "/images/thematic.png",
    title: "Thematic",
    description:
      " It focuses on investing in companies that are expected to benefit from a particular trend or theme",
    content: lorem300,
  },
  {
    imageUrl: "/images/low.png",
    title: "Micro Investing",
    description: "Start with as low as 500 HKD",
    content: lorem300,
  },
  {
    imageUrl: "/images/tracker.png",
    title: "Trackers",
    description:
      "Track your portfolio efficiently, and compare with market trends",
    content: lorem300,
  },
];

export default function ForEveryone() {
  const [popup, setPopup] = useState<(typeof items)[0] | null>(null);

  return (
    <>
      <section className="pt-28 pb-14 p-page relative bg-gradient-to-b from-[#f3f5fd] to-transparent">
        <img
          src="https://www.smallcase.com/static/images/svg/InvIdeasPatternLeft.svg"
          className="absolute top-0 left-0"
        />

        <img
          src="https://www.smallcase.com/static/images/svg/InvIdeasPatternRight.svg"
          className="absolute top-0 right-0"
        />

        <div className="text-center">
          <h2 className="font-semibold text-2xl">
            There is an ideavault for everyone
          </h2>
          <p className="py-3 text-front text-opacity-70 text-lg">
            Looking to start with a small investment or thinking of low
            volatililty? Choose from a diverse menu
          </p>
        </div>
        {[items.slice(0, 2), items.slice(2, 4)].map((row, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-center gap-x-3 relative z-[1] py-3"
          >
            {row.map((item, i) => (
              <div
                key={i}
                className="p-8 w-[30%] cursor-pointer group duration-300 hover:-translate-y-2 flex flex-col gap-y-2 bg-background rounded-lg border"
                onClick={() => {
                  setPopup(item);
                }}
              >
                <img src={item.imageUrl} alt={item.title} className="w-[20%]" />
                <h4 className="font-medium text-2xl group-hover:text-primary group-hover:brightness-50">
                  {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
      {popup && (
        <div
          className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-front bg-opacity-20 z-[1010]"
          onClick={() => {
            setPopup(null);
          }}
        >
          <div className="bg-background shadow-md rounded-lg py-4 px-8 w-[70vw]">
            <div className="flex justify-center gap-x-5 py-6 items-center">
              <img
                src={popup.imageUrl}
                className="aspect-square w-16"
                alt={popup.title}
              />
              <h2 className="text-2xl font-medium">{popup.title}</h2>
            </div>
            <p className="text-center">{popup.content}</p>
          </div>
        </div>
      )}
    </>
  );
}
