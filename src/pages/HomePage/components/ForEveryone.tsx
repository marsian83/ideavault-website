import { useState } from "react";

const lorem300 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam atque tempore modi. Quam laborum tempore maiores sapiente et, sed quae omnis labore unde dignissimos. Doloribus quisquam maxime aperiam sapiente voluptate quasi ab. Eligendi ratione, a pariatur, porro modi error soluta necessitatibus, voluptas dicta deleniti commodi quod cum dolores reprehenderit aut? Unde magnam quis ducimus. Praesentium veritatis consequuntur sequi animi officiis quaerat ea nostrum fugiat, cumque ab natus ullam molestiae tempora illum aliquam temporibus autem maxime eveniet, officia suscipit itaque delectus. Debitis harum blanditiis unde ex dignissimos nemo enim, maxime minus, labore adipisci assumenda iste praesentium, hic tenetur! Repellendus natus, architecto sint accusantium non unde consequatur quidem repudiandae impedit distinctio id ipsum maiores, rem quis. Laudantium, quia perspiciatis sunt pariatur consequuntur perferendis quisquam atque veniam natus amet minima facilis numquam dicta accusantium nisi nobis in obcaecati est doloribus illum? Sit et delectus a aperiam vitae, blanditiis molestias laboriosam provident placeat temporibus! Quisquam, quia itaque nam animi molestias eveniet voluptate earum quae. Corrupti provident modi voluptas voluptatibus praesentium dolorum temporibus accusantium illo consequuntur laudantium accusamus error repellendus cumque dicta, aspernatur tenetur saepe ipsam voluptatum dignissimos? Rem odio sint labore harum maxime molestias voluptatum delectus dolor laudantium aliquam est, at doloribus aliquid consequuntur quas, quidem nihil doloremque cumque numquam reiciendis nulla fuga ea? Accusantium quas esse possimus vitae saepe in nulla enim omnis sunt beatae soluta consectetur aspernatur eligendi accusamus, cum, unde ad! Iste autem in facere excepturi amet animi tempora adipisci id veritatis possimus incidunt iusto repudiandae suscipit laborum saepe, illum dolorem quasi, asperiores deleniti veniam fugiat molestias? Deserunt recusandae numquam nam corporis! Harum, commodi quam. Perferendis, alias! Totam neque autem, fugiat blanditiis, laboriosam iusto earum, excepturi natus libero quasi ducimus eius harum saepe in alias. Beatae, sed. Cumque vero deserunt, eaque, consequuntur dolore quod quasi eum eius eos natus saepe iusto!";

const items = [
  {
    imageUrl: "/images/low-beta.png",
    title: "Low-Volatility Investments",
    description: "Invest in Stable and Steady Growth",
    content:
      "At Ideavault, we understand that some investors prefer low-risk investments that offer stable growth over time. That's why we offer a range of low-volatility investment options designed to provide reliable returns with minimal risk. \nOur team of financial experts has carefully selected a diverse range of low-volatility investments, including bonds, dividend stocks, and mutual funds. We also offer customized investment solutions tailored to your unique risk profile and investment goals. \nWhether you're a seasoned investor looking to diversify your portfolio or a first-time investor seeking a safe investment option, our low-volatility investment products offer an attractive solution. ",
  },
  {
    imageUrl: "/images/thematic.png",
    title: "Thematic Investment",
    description: "Invest in the Trends of Tomorrow",
    content:
      "At Ideavault, we believe in investing in the future. Our thematic investment options are designed to help you capitalize on the latest trends and technologies that are shaping our world.\nOur team of investment experts has identified a range of exciting themes, including renewable energy, electric vehicles, e-commerce, and more. By investing in these themes, you can benefit from the growth potential of these industries while also supporting positive social and environmental change. \nWe offer a range of thematic investment products, including exchange-traded funds (ETFs) and mutual funds. Our team can also create customized investment solutions tailored to your unique investment goals and risk profile.",
  },
  {
    imageUrl: "/images/low.png",
    title: "Low Investment Amounts",
    description: "Start investing will small amounts",
    content:
      "At Ideavault, we believe that everyone should have the opportunity to invest, regardless of their financial situation. That's why we offer a range of low investment options designed to help you start investing with small amounts. \nOur investment experts have carefully selected a range of low-cost investment options, including mutual funds and exchange-traded funds (ETFs). These products allow you to invest in a diversified portfolio of stocks and bonds with a low investment amount. \nInvesting small amounts can be an excellent way to start building your wealth and achieving your long-term financial goals. Contact us today to learn more about our low investment options. ",
  },
  {
    imageUrl: "/images/tracker.png",
    title: "Trackers",
    description:
      "Track your portfolio efficiently, and compare with market trends",
    content:
      "Trackers are a vital tool in the world of investment, helping investors monitor the performance of their portfolios and make informed decisions about future investments. At Ideavault, we understand the importance of providing our users with the best possible investment tools, and that's why we've developed a suite of trackers designed to help you keep tabs on your investments and make the most of your money.\nOur trackers cover a wide range of investments, including stocks, ETFs, mutual funds, and more. With real-time data and customizable alerts, you can stay on top of the latest market trends and ensure that you're always making informed decisions about your investments.\nOur trackers are designed with the needs of modern investors in mind. Whether you're a seasoned pro or just starting out, our intuitive interface and user-friendly design make it easy to keep track of your investments and make informed decisions about your portfolio.\nAt Ideavault, we believe that investing should be accessible to everyone, which is why we offer a range of free and premium trackers to suit every budget and investment style. Our free trackers provide real-time data and basic analysis tools, while our premium trackers offer advanced features like in-depth research, custom alerts, and personalized investment recommendations.",
  },
];

export default function ForEveryone() {
  const [popup, setPopup] = useState<(typeof items)[0] | null>(null);

  return (
    <>
      <section className="py-28 mobile:py-14 p-page relative bg-gradient-to-b from-[#f3f5fd] to-transparent">
        <div className="text-center">
          <h2 className="font-semibold text-2xl">
            There is an ideavault for everyone
          </h2>
          <p className="py-3 text-front text-opacity-70 text-lg">
            Looking to start with a small investment or thinking of low
            volatililty? Choose from a diverse menu
          </p>
        </div>
        <div className="flex flex-col pt-16 pb-8 gap-y-24 mobile:gap-y-6">
          {[items.slice(0, 2), items.slice(2, 4)].map((row, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center gap-x-24 relative z-[1] mobile:gap-y-6"
            >
              {row.map((item, i) => (
                <div
                  key={i}
                  className="p-8 w-[35%] cursor-pointer group duration-300 hover:-translate-y-2 flex flex-col gap-y-2 bg-background rounded-lg border mobile:w-[100%]"
                  onClick={() => {
                    setPopup(item);
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-[20%]"
                  />
                  <h4 className="font-medium text-2xl group-hover:text-primary group-hover:brightness-75">
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {popup && (
        <div
          className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-front bg-opacity-20 z-[1010]"
          onClick={() => {
            setPopup(null);
          }}
        >
          <div className="bg-background shadow-md rounded-lg pb-8 pt-4 px-8 w-[50vw] mobile:w-[98vw] mobile:max-h-[80vh] mobile:overflow-y-scroll">
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
