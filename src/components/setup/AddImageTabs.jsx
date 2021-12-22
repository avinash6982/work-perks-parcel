import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Container } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AddImageTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Gallery" {...a11yProps(0)} />
          <Tab label="Upload" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}>
        <Box style={{ height: "40vh", display: "grid", placeItems: "center" }}>
          <label
            style={{
              border: "5px dotted #ccc",
              height: "100%",
              width: "100%",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            for="file-upload"
          >
            <Box>
              <Container align="center">
                <FileCopyIcon style={{ fontSize: "60", color: "secondary" }} />
              </Container>
              <Container>
                <Typography align="center">
                  DROP FILES HERE OR CLICK TO UPLOAD
                </Typography>
              </Container>
              <Container>
                <Typography align="center">
                  Drag files and folders here to upload or click here to browse
                  image from your computer
                </Typography>
              </Container>
              <Container align="center">
                <Button variant="contained">hi</Button>
              </Container>
            </Box>
            <Input
              id="file-upload"
              fullWidth
              disableUnderline
              style={{ display: "none" }}
              type="file"
            ></Input>
          </label>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default AddImageTabs;
