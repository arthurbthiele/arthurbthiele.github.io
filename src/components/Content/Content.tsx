import React, { CSSProperties } from "react";
import { Grid } from "./Grid";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { wordJourney, healthAnalytics } from "ui";

interface Props {
  style: CSSProperties;
}

export function Content({ style }: Props): React.ReactElement {
  return (
    <Grid style={style}>
      {[
        {
          url: "https://arthurbthiele.github.io/word-journey/",
          image: wordJourney,
        },
        {
          url: "https://arthurbthiele.github.io/health-analytics/",
          image: healthAnalytics,
        },
      ].map(({ url, image }) => (
        <LinkPreview
          url={url}
          width={400}
          key={url}
          explicitImageSrc={image}
          imageHeight={240}
          descriptionLength={81}
        />
      ))}
    </Grid>
  );
}
