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
