import React, { CSSProperties } from "react";
import { Grid } from "./Grid";
import { wordJourney, healthAnalytics, Colors } from "ui";

interface Props {
  style: CSSProperties;
}

export function Content({ style }: Props): React.ReactElement {
  return (
    <Grid style={style}>
      {[
        {
          url: "https://arthurbthiele.github.io/health-analytics",
          image: healthAnalytics,
          text: "Analysis for Apple Health Data",
        },
        {
          url: "http://arthurbthiele.github.io/word-journey",
          image: wordJourney,
          text: "A game about connections in the English language",
        },
      ].map(({ url, image, text }, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 16,
            fontWeight: 300,
            color: Colors.DARKEST.toString(),
            borderColor: "black",
            border: "2px solid black",
            borderRadius: 4,
            padding: 5,
          }}
          key={index}
        >
          <img src={image} alt={"Some text"} width={"500"} />
          <div
            style={{
              border: "1px solid black",
              marginTop: 5,
              marginBottom: 5,
              marginLeft: -5,
              marginRight: -5,
            }}
          />
          <div style={{ alignSelf: "center", padding: 5 }}>
            <a href={url}>{text}</a>
          </div>
        </div>
      ))}
    </Grid>
  );
}
