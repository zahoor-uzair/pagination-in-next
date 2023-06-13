import React from "react";
import { useState, ChangeEvent } from "react";
import InputField from "@/Customframework/textfield";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Common = () => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Link href={"/"}>
        <Button
          sx={{ marginX: 2, marginY: 1 }}
          variant="contained"
          color="secondary"
        >
          <ArrowBackIcon />
        </Button>
      </Link>
      <Box sx={{ width: 350, margin: 3 }}>
        <InputField
          style={{ height: "45px" }}
          placeholder="Enter Text"
          valur={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </Box>
    </>
  );
};

export default Common;
