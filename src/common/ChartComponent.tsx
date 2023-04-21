import Chart, { ChartData } from "chart.js/auto";
import { useEffect, useRef } from "react";

interface ChartComponentProps {
  title?: string;
  data: ChartData;
}

export function ChartComponent(props: ChartComponentProps) {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;

    try {
      // const data = [
      //   { date: "12/10/2021", count: 10 },
      //   { date: "12/11/2021", count: 20 },
      //   { date: "12/12/2021", count: 15 },
      //   { date: "12/01/2022", count: 25 },
      //   { date: "12/02/2022", count: 22 },
      //   { date: "12/03/2022", count: 30 },
      //   { date: "12/04/2022", count: 28 },
      //   { date: "12/05/2021", count: 30 },
      //   { date: "12/06/2021", count: 27 },
      //   { date: "12/07/2021", count: 25 },
      //   { date: "12/08/2021", count: 25 },
      //   { date: "12/09/2021", count: 22 },
      //   { date: "12/10/2021", count: 30 },
      //   { date: "12/11/2021", count: 28 },
      // ];
      const data = props.data;
      new Chart(canvasRef.current, {
        type: "line",
        options: {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: props.title ? true : false,
              text: props.title,
            },
          },
        },
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <canvas ref={canvasRef} />;
}
