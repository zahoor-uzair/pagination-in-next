import React from "react";
import { useState, ChangeEvent } from "react";
import InputField from "@/Customframework/textfield";
import { Box, Container } from "@mui/material";
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

const steps = [
  {
    label: "1",
    content: (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente porro
        sint doloribus sequi eligendi obcaecati, rerum, quisquam ipsam eum hic
        sed excepturi saepe ipsum laboriosam officia aut, minus consectetur
        repellat!
      </div>
    ),
  },
  {
    label: "2",
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquam
        tenetur nobis distinctio, quisquam, reiciendis nam nisi laboriosam sit
        quos quae dolore ut ipsam eos consequatur itaque atque ipsa repudiandae.
      </div>
    ),
  },
  {
    label: "3",
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ex
        sed harum doloremque, id quae non, accusantium alias labore, dignissimos
        saepe eveniet quaerat nostrum. Ab laudantium fugit in eligendi earum.
      </div>
    ),
  },
  {
    label: "4",
    content: (
      <div>
        met, consectetur adipisicing elit. Aspernatur ex sed harum doloremque,
        id quae non, accusantium alias labore, dignissimos saepe eveniet quaerat
        nostrum. Ab lLorem ipsum dolor sit aaudantium fugit in eligendi earum.
      </div>
    ),
  },
];
const body =
  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis eos, reprehenderit, soluta maxime labore assumenda, velit dolores aliquid corporis accusantium! Recusandae nulla modi dicta, tempora impedit beatae eveniet atque.";
const url =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
const Common = () => {
  const [value, setValue] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Navbar url={url} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn && (
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "260px",
              position: "fixed",
              top: 60,
              height: "calc(100vh - 60px)",
              overflowY: "auto",
            }}
          >
            <Sidebar url={url} />
          </Box>
          <Box
            sx={{
              marginLeft: "260px",
              width: "100%",
              height: "calc(100vh - 60px)",
              overflow: "auto",
            }}
          >
            <Link href={"/"}>
              <Tooltip title="Back">
                <Button style={{ margin: "8px", width: 80, height: 40 }}>
                  <ArrowBackIcon />
                </Button>
              </Tooltip>
            </Link>
            {/* modal */}
            <Box sx={{ margin: 3 }}>
              <Button className="primary" onClick={() => setModal(true)}>
                Modal
              </Button>
              {modal && <Modal close={setModal} />}
            </Box>
            {/* accordion */}
            <Box sx={{ margin: 3, width: 600 }}>
              <Accordion title="Title" content={body} />
            </Box>
            {/* stepper */}
            <Box sx={{ margin: 3, width: 600 }}>
              <Stepper steps={steps} />
            </Box>
            {/* alert */}
            <Box sx={{ margin: 3, width: 600 }}>
              <Alert severity="info">Info</Alert>
              <Alert severity="success">Succes</Alert>
              <Alert severity="error">Error</Alert>
              <Alert severity="warning">Warning</Alert>
            </Box>
            <Box sx={{ width: 350, margin: 3 }}>
              <Card title="Card Title" body={body} url={url} />
            </Box>
            <Box sx={{ width: 350, margin: 3 }}>
              <InputField
                style={{ height: "45px" }}
                placeholder="Enter Text"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
            </Box>
            <Box sx={{ width: 350, margin: 3 }}>
              <Button style={{ margin: "8px" }}>Button</Button>
              <Button className="danger" style={{ margin: "8px" }}>
                Button
              </Button>
              <Button className="success" style={{ margin: "8px" }}>
                Button
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Common;
