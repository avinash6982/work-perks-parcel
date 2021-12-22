import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import AddImageTabs from "./AddImageTabs";

const AddImageDialog = ({ open, handleClose }) => {
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Grid item style={{ width: "100%" }} xs={12} md={10} lg={8}>
          <Card sx={{ minWidth: 275, borderRadius: ".8rem" }}>
            <CardContent>
              <Box style={{ position: "relative" }}>
                <Typography style={{ fontSize: "1.5rem" }} gutterBottom>
                  Select image
                </Typography>
                <Button
                  onClick={() => handleClose()}
                  style={{ position: "absolute", right: 0, top: 0 }}
                >
                  <CloseIcon style={{ color: "black" }} />
                </Button>
              </Box>
              <AddImageTabs />
            </CardContent>
            <CardActions style={{ padding: 16, position: "relative" }}>
              <Grid
                container
                justifyContent="flex-end"
                style={{
                  width: "100%",
                  paddingTop: 20,
                  alignItems: "right",
                }}
                sx={{ borderTop: 1, borderColor: "divider" }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#CECECE",
                    color: "black",
                    marginRight: "1rem",
                  }}
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => onSubmit()}
                  variant="contained"
                  color="primary"
                >
                  Select
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Backdrop>
    </div>
  );
};
export default AddImageDialog;
