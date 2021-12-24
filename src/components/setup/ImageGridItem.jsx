import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ImageGridItem = ({ image, large }) =>
  large ? (
    <Grid item xs={8} md={6} lg={4}>
      <Button
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "15rem",
          width: "15rem",
          borderRadius: 5,
        }}
      ></Button>
    </Grid>
  ) : (
    <Grid item xs={6} md={4} lg={2}>
      <Button
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "5rem",
          width: "5rem",
          borderRadius: 5,
        }}
      ></Button>
    </Grid>
  );

export default ImageGridItem;
