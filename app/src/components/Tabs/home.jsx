import Icon from "../../../public/SVG/twitch_logo.svg";
import { GridElement } from "../CoreUI/Grid/GridElement";
import { Grid } from "../CoreUI/Grid/Grid";
import { FeaturedItem } from "../CoreUI/FeaturedItem/FeaturedItem";
import { DecoratedMultiText } from "../CoreUI/Text/DecoratedMultiText";
import MoneyBagIcon from "../../../public/SVG/money-bag-icon.svg";
import CartIcon from "../../../public/SVG/cart-icon.svg";
import TrendUpIcon from "../../../public/SVG/trend-up-icon.svg";
import { centerMixin } from "../../utils/styleUtils/generalCSSUtils";
import { TabSectionHeaderProps } from "../../utils/styleUtils/commonTextProps";
import { SimpleText } from "../CoreUI/Text/SimpleText";
import { ItemStyler } from "../CoreUI/FeaturedItem/FeaturedItem";

const RevenueStatsGrid = ({ theme }) => {
  const {
    text: {
      styles: { primary: primaryStyle },
      colors: {
        primary: primaryColor,
        other: { b, c, d },
      },
      sizes: { small, large },
    },
  } = theme;

  const sharedFirstTextConfig = {
    style: primaryStyle,
    size: large,
  };

  const sharedSecondTextConfig = {
    style: primaryStyle,
    size: small,
    color: primaryColor,
  };

  return (
    <Grid numCols={12} numRows={1} rowUnit="85px" colUnit="56px" key={1}>
      <GridElement
        position={{
          startCol: 1,
          endCol: 5,
          startRow: 1,
          endRow: 1,
        }}
        customStyles={centerMixin}
      >
        <DecoratedMultiText
          textConfigs={[
            {
              content: "$45,000",
              color: b,
              ...sharedFirstTextConfig,
            },
            {
              content: "Total Revenue",
              ...sharedSecondTextConfig,
            },
          ]}
          decoration={{ start: <MoneyBagIcon />, startWidth: 32 }}
        />
      </GridElement>
      <GridElement
        position={{
          startCol: 5,
          endCol: 9,
          startRow: 1,
          endRow: 1,
        }}
        customStyles={centerMixin}
      >
        <DecoratedMultiText
          textConfigs={[
            {
              content: "$1,250",
              color: c,
              ...sharedFirstTextConfig,
            },
            {
              content: "Monthly Revenue",
              ...sharedSecondTextConfig,
            },
          ]}
          decoration={{ start: <CartIcon />, startWidth: 32 }}
        />
      </GridElement>
      <GridElement
        position={{
          startCol: 9,
          endCol: 13,
          startRow: 1,
          endRow: 1,
        }}
        customStyles={centerMixin}
      >
        <DecoratedMultiText
          textConfigs={[
            {
              content: "+2.0%",
              color: d,
              ...sharedFirstTextConfig,
            },
            {
              content: "Growth",
              ...sharedSecondTextConfig,
            },
          ]}
          decoration={{ start: <TrendUpIcon />, startWidth: 32 }}
        />
      </GridElement>
    </Grid>
  );
};

export const Home = ({ theme }) => {
  return (
    <React.Fragment>
      <SimpleText {...TabSectionHeaderProps(theme)}>
        Featured Campaigns
      </SimpleText>
      <Grid numCols={12} numRows={5} rowUnit="56px" colUnit="56px" key={0}>
        <GridElement
          position={{
            startCol: 1,
            endCol: 5,
            startRow: 1,
            endRow: 6,
          }}
          customStyles={ItemStyler}
        >
          <FeaturedItem
            icon={<Icon />}
            text="PRODUCT PLACEMENT"
            theme={theme}
            brand="Brand: Brawndo"
            campaign="Campaign: The Thirst Mutilator"
            product="Free Product"
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 5,
            endCol: 9,
            startRow: 1,
            endRow: 6,
          }}
          customStyles={ItemStyler}
        >
          <FeaturedItem
            icon={<Icon />}
            text="SHOUTOUT"
            theme={theme}
            brand="Brand: Hammond Robotics"
            campaign="Campaign: Titans Release"
            product="$5.00/mo"
          />
        </GridElement>
        <GridElement
          position={{
            startCol: 9,
            endCol: 13,
            startRow: 1,
            endRow: 6,
          }}
          customStyles={ItemStyler}
        >
          <FeaturedItem
            icon={<Icon />}
            text="OVERLAYS"
            theme={theme}
            brand="Brand: Brawndo"
            campaign="Campaign: The Thirst Mutilator"
            product="$25.00/mo"
          />
        </GridElement>
      </Grid>
      <SimpleText {...TabSectionHeaderProps(theme)}>Your highlights</SimpleText>
      <RevenueStatsGrid theme={theme} />
    </React.Fragment>
  );
};
