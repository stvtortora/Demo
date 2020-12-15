import HighCharts from "react-highcharts";
import { WithContainerDimensions } from "../Auxiliary/WithContainerDimensions";

export const Chart = ({ chartConfig }) => {
  const RenderHighChart = ({ height }) => {
    const { chart, ...rest } = chartConfig;
    return (
      <HighCharts
        config={{
          ...rest,
          chart: {
            ...chart,
            height,
          },
        }}
      />
    );
  };

  return <WithContainerDimensions Component={RenderHighChart} />;
};
