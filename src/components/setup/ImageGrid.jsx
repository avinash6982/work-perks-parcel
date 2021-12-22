import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import AddImageDialog from "./AddImageDialog";

const ImageGrid = () => {
  const [images, setImages] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const displayImages = (
    <Grid item xs={6} md={4} lg={2}>
      <Button
        style={{
          //   backgroundImage: `url(${image01})`,
          backgroundSize: "cover",
          height: "5rem",
          width: "5rem",
          borderRadius: 5,
          display: "grid",
          placeItems: "center",
          color: "black",
        }}
        onClick={() => handleOpen()}
      >
        <AddIcon style={{ fontSize: "2.5rem", fontWeight: 100 }} />
      </Button>
    </Grid>
  );

  const addImageButton = (
    <Grid item xs={6} md={4} lg={2}>
      <Button
        style={{
          backgroundColor: "#E0E0E0",
          height: "5rem",
          width: "5rem",
          borderRadius: 5,
          display: "grid",
          placeItems: "center",
          color: "black",
        }}
        onClick={() => handleOpen()}
      >
        <AddIcon style={{ fontSize: "2.5rem", fontWeight: 100 }} />
      </Button>
    </Grid>
  );
  return (
    <Box
      style={{
        height: "40vh",
        width: "100%",
        paddingTop: 10,
        overflow: "scroll",
        display: "block",
      }}
    >
      <AddImageDialog open={open} handleClose={handleClose} />
      <Typography style={{ fontSize: "1rem" }} gutterBottom>
        Image
      </Typography>
      <Grid container spacing={10}>
        {images && displayImages}
        {addImageButton}
      </Grid>
    </Box>
  );
};

export default ImageGrid;
