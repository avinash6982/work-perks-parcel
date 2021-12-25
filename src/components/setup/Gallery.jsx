import React, { useState } from "react";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

import ImageGridItem from "./ImageGridItem";
import { useFiles } from "../../context/FileHandlerContext";
import { mockGalleryFetch } from "../../api/mockGalleryFetch";

const Gallery = () => {
  const filesContext = useFiles();
  const fetchItems = useQuery("galleryItems", mockGalleryFetch);
  const [selected, setSelected] = useState(null);

  const makeSelection = (item, key) => {
    filesContext.setSelected(item);
    setSelected(key);
  };

  return (
    <Box
      style={{
        height: "50vh",
        width: "100%",
        overflow: "scroll",
        display: "block",
      }}
    >
      <Grid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 6rem)",
        }}
        container
        spacing={2}
      >
        {fetchItems.status === "success" ? (
          Object.keys(fetchItems.data).map((key) => (
            <ImageGridItem
              key={key}
              onClick={() => makeSelection(fetchItems.data[key], key)}
              image={fetchItems.data[key]}
              selected={selected === key}
            />
          ))
        ) : fetchItems.status === "loading" ? (
          <ImageGridItem loading />
        ) : (
          <Typography gutterBottom>Something went wrong</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Gallery;
