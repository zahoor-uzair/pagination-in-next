import React from "react";
import { useState, ChangeEvent } from "react";
import InputField from "@/Customframework/textfield";
import { Box } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@/Customframework/card";
import Navbar from "@/Customframework/navbar";
import Button from "@/Customframework/button";
import Sidebar from "@/Customframework/sidebar";
import Modal from "@/Customframework/modal";
import Alert from "@/Customframework/alert";
import Accordion from "@/Customframework/accordion";
import Stepper from "@/Customframework/stepper";
import Tooltip from "@/Customframework/tooltip";
import {
  menuItems,
  options,
  steps,
  body,
  url,
} from "@/Customframework/utils/menudata";
import Select from "@/Customframework/select";
import CarouselSlider from "@/Customframework/slider";
import Pagination from "@/Customframework/pagination";
const slides = [
  {
    src: "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg?w=2000",
    title: "hjwekhywevy",
    desc: "wkhcbwebiud ydwqekbyewg hdbvqwekudeg",
  },
  {
    src: "https://wallpaperaccess.com/full/8354413.jpg",
    title: "uhduwedbweh",
    desc: "hdbvqwekudeg wkhcbwebiud ydwqekbyewg ",
  },
  {
    src: "https://s1.picswalls.com/wallpapers/2014/08/08/beautiful-house-high-quality-wallpaper_015601810_146.jpg",
    title: "jwhduehiuy",
    desc: "  ydwqekbyewg wkhcbwebiud hdbvqwekudeg",
  },
];

const Common = () => {
  const [value, setValue] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  const [sideBarWidth, setSideBarWidth] = useState("0px");
  return (
    <>
      <Navbar
        url={url}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        showBar={setSideBarWidth}
      />
      {loggedIn && (
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: sideBarWidth,
              position: "fixed",
              top: 60,
              height: "calc(100vh - 60px)",
              overflowY: "auto",
              transitionProperty: "all",
              transitionDuration: "0.4s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Sidebar
              url={url}
              hideBar={setSideBarWidth}
              menuItems={menuItems}
            />
          </Box>
          <Box
            sx={{
              marginLeft: sideBarWidth,
              width: "100%",
              height: "calc(100vh - 60px)",
              overflow: "auto",
              transitionProperty: "all",
              transitionDuration: "0.4s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Link href={"/"}>
              <Tooltip title="Back">
                <Button style={{ margin: "8px", width: 80, height: 40 }}>
                  <ArrowBackIcon />
                </Button>
              </Tooltip>
            </Link>
            {/* slider */}
            <Box sx={{ margin: 3, width: "60%" }}>
              <CarouselSlider slides={slides} />
            </Box>
            {/* pagination */}
            <Box sx={{ margin: 3, width: "80%" }}>
              <Pagination
                totalPages={5}
                currentPage={3}
                onPageChange={() => {
                  console.log("hello");
                }}
              />
            </Box>

            {/* modal */}
            <Box sx={{ margin: 3, width: "50%" }}>
              <Button className="primary" onClick={() => setModal(true)}>
                Modal
              </Button>
              {modal && <Modal close={setModal} />}
            </Box>
            {/* select */}
            <Box sx={{ margin: 2, width: "50%" }}>
              <Select options={options} />
            </Box>
            {/* accordion */}
            <Box sx={{ margin: 2, width: "92%" }}>
              <Accordion title="Title" content={body} />
            </Box>
            {/* stepper */}
            <Box sx={{ margin: 3, width: "92%" }}>
              <Stepper steps={steps} />
            </Box>
            {/* alert */}
            <Box sx={{ margin: 3, width: "92%" }}>
              <Alert severity="info">Info</Alert>
              <Alert severity="success">Succes</Alert>
              <Alert severity="error">Error</Alert>
              <Alert severity="warning">Warning</Alert>
            </Box>
            <Box sx={{ width: 350, margin: 3 }}>
              <Card title="Card Title" body={body} url={url} />
            </Box>
            <Box sx={{ width: "50%", margin: 3 }}>
              <InputField
                style={{ height: "45px" }}
                placeholder="Enter Text"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
            </Box>
            <Box sx={{ width: "50%", margin: 3 }}>
              <Tooltip title="Primary">
                <Button style={{ marginLeft: "8px" }}>Button</Button>
              </Tooltip>
              <Tooltip title="Danger" color="danger">
                <Button className="danger" style={{ marginLeft: "8px" }}>
                  Button
                </Button>
              </Tooltip>
              <Tooltip title="Success" color="success">
                <Button className="success" style={{ marginLeft: "8px" }}>
                  Button
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Common;
