import { useState } from "react";
import useCache from "../../../contexts/cacheContext";

export default function Faqs() {
  const cache = useCache();

  return (
    <section className="p-page flex flex-col gap-y-5">
      <h1 className="text-center text-3xl font-bold">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-between mobile:flex-col">
        {cache.data.faqs.map((section, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-2"
            style={{ width: `${Math.floor(100 / cache.data.faqs.length)}%` }}
          >
            <h4 className="text-lg font-medium my-4">{section.title}</h4>
            {section.items.map((item, j) => (
              <FaqItem content={item.content} title={item.title} key={j} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

interface FaqitemProps {
  title: string;
  content: string;
}

function FaqItem(props: FaqitemProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <h6
        className="hover:text-primary cursor-pointer flex items-center text-front text-opacity-80 select-none"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span
          className="pr-2 text-primary duration-300 font-black"
          style={{ rotate: show ? "0deg" : "-90deg" }}
        >
          &#9660;
        </span>
        {props.title}
      </h6>
      <p
        className="p-2 text-front text-opacity-80"
        style={{
          display: !show ? "none" : "",
        }}
      >
        {props.content}
      </p>
    </>
  );
}
