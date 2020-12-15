import { GridElement } from "../CoreUI/Grid/GridElement";
import { Grid } from "../CoreUI/Grid/Grid";
import { Chart } from "../CoreUI/Chart/Chart";
import { SimpleText } from "../CoreUI/Text/SimpleText";
import { GridElementHeaderProps } from "../../utils/styleUtils/commonTextProps";
import { MultiText } from "../CoreUI/Text/MultiText";
import styled from "styled-components";
import { centerMixin } from "../../utils/styleUtils/generalCSSUtils";
import { TabSectionHeaderProps } from "../../utils/styleUtils/commonTextProps";
import { useStats } from "../../hooks/useStats";

const StreamPerformanceChart = ({ dailyViews }) => {
  const {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  } = dailyViews;
  return (
    <Chart
      chartConfig={{
        chart: {
          type: "column",
        },
        title: {
          text: null,
        },
        legend: {
          verticalAlign: "top",
        },
        xAxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: null,
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "Average Viewers",
            color: "#A4A1FB",
            data: [
              Monday.total,
              Tuesday.total,
              Wednesday.total,
              Thursday.total,
              Friday.total,
              Saturday.total,
              Sunday.total,
            ],
          },
          {
            name: "Unique Viewers",
            color: "#56D9FE",
            data: [
              Monday.unique,
              Tuesday.unique,
              Wednesday.unique,
              Thursday.unique,
              Friday.unique,
              Saturday.unique,
              Sunday.unique,
            ],
          },
        ],
        credits: {
          enabled: false,
        },
      }}
    />
  );
};

const ViewSourceDistributionChart = ({
  followers,
  searches,
  channels,
  other,
}) => {
  return (
    <Chart
      chartConfig={{
        chart: {
          type: "pie",
        },
        title: {
          text: null,
        },
        legend: {
          align: "right",
          layout: "vertical",
          verticalAlign: "middle",
          itemMarginBottom: 12,
        },
        plotOptions: {
          pie: {
            shadow: false,
            center: ["50%", "50%"],
            showInLegend: true,
          },
        },
        tooltip: {
          valueSuffix: "%",
        },
        series: [
          {
            name: "Distribution",
            data: [
              { name: "Followers", y: followers, color: "blue" },
              { name: "Searches", y: searches, color: "red" },
              { name: "Other", y: other, color: "green" },
              { name: "Channels", y: channels, color: "purple" },
            ],
            size: "80%",
            innerSize: "60%",
            dataLabels: {
              enabled: false,
            },
            id: "distribution",
          },
        ],
        responsive: {
          rules: [
            {
              condition: {},
              chartOptions: {
                series: [
                  {},
                  {
                    id: "versions",
                    dataLabels: {
                      enabled: false,
                    },
                  },
                ],
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
      }}
    />
  );
};

const SingleStatMetricWrapper = styled.div`
  ${centerMixin}
  flex-direction: column;
  height: 100%;
`;

const SingleStatMetric = ({
  textTheme: { styles, sizes, colors },
  percentChangeColor,
  textData,
}) => {
  return (
    <SingleStatMetricWrapper>
      <MultiText
        textConfigs={[
          {
            content: textData[0],
            style: styles.primary,
            size: sizes.medium,
            color: colors.secondary,
            moreStyles: "opacity: 50%",
          },
          {
            content: textData[1],
            style: styles.bold,
            size: sizes.xxlarge,
            color: colors.primary,
            weight: 700,
          },
          {
            content: textData[2],
            style: styles.bold,
            size: sizes.xsmall,
            color: percentChangeColor,
            weight: 700,
          },
        ]}
      />
    </SingleStatMetricWrapper>
  );
};

export const Dashboard = ({ theme }) => {
  const { stats, error } = useStats();

  if (!stats) {
    if (error) {
      return <div>Error loading stats</div>
    }
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <SimpleText {...TabSectionHeaderProps(theme)}>Stream Overview</SimpleText>
      <Grid numCols={12} numRows={4} rowUnit="135px" colUnit="56px" key={1}>
        <GridElement
          position={{
            startCol: 1,
            endCol: 7,
            startRow: 2,
            endRow: 4,
          }}
        >
          <SimpleText {...GridElementHeaderProps(theme)}>
            View Source Distribution
          </SimpleText>
          <ViewSourceDistributionChart
            followers={stats.followers}
            searches={stats.searches}
            channels={stats.channels}
            other={stats.other}
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 7,
            endCol: 13,
            startRow: 2,
            endRow: 4,
          }}
        >
          <SimpleText {...GridElementHeaderProps(theme)}>
            Stream Performance
          </SimpleText>
          <StreamPerformanceChart dailyViews={stats.daily_views} />
        </GridElement>
        <GridElement
          position={{
            startCol: 1,
            endCol: 5,
            startRow: 1,
            endRow: 2,
          }}
        >
          <SingleStatMetric
            textData={["Total Views", stats.total_views, "13%"]}
            textTheme={theme.text}
            percentChangeColor={theme.text.colors.other.e}
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 5,
            endCol: 9,
            startRow: 1,
            endRow: 2,
          }}
        >
          <SingleStatMetric
            textData={["Engagements", stats.engagements, "12%"]}
            textTheme={theme.text}
            percentChangeColor={theme.text.colors.other.e}
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 9,
            endCol: 13,
            startRow: 1,
            endRow: 2,
          }}
        >
          <SingleStatMetric
            textData={["Follower Reach", stats.followers, "12%"]}
            textTheme={theme.text}
            percentChangeColor={theme.text.colors.other.e}
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 1,
            endCol: 5,
            startRow: 4,
            endRow: 5,
          }}
        >
          <SingleStatMetric
            textData={["Total Views", stats.total_views, "13%"]}
            textTheme={theme.text}
            percentChangeColor={theme.text.colors.other.e}
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 5,
            endCol: 9,
            startRow: 4,
            endRow: 5,
          }}
        >
          <SingleStatMetric
            textData={["Engagements", stats.engagements, "12%"]}
            textTheme={theme.text}
            percentChangeColor={theme.text.colors.other.e}
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 9,
            endCol: 13,
            startRow: 4,
            endRow: 5,
          }}
        >
          <SingleStatMetric
            textData={["Follower Reach", stats.followers, "12%"]}
            textTheme={theme.text}
            percentChangeColor={theme.text.colors.other.e}
          />
        </GridElement>
      </Grid>
    </React.Fragment>
  );
};
