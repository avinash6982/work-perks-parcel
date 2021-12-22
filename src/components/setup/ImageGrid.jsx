import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const ImageGrid = () => {
  const [images, setImages] = useState(null);
  const addImageButton = (
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
    >
      <AddIcon style={{ fontSize: "2.5rem", fontWeight: 100 }} />
    </Button>
  );
  return (
    <Box
      style={{
        height: "40vh",
        width: "100%",
        paddingTop: 10,
        overflow: "scroll",
      }}
    >
      <Typography style={{ fontSize: "1rem" }} gutterBottom>
        Image
      </Typography>
      {addImageButton}
    </Box>
  );
};

export default ImageGrid;
