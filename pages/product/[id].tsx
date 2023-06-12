import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

interface ApiData {
  id: number;
  title: string;
  description: string;
  url: string;
}
const SinglePost = () => {
  const [data, setData] = useState<ApiData | undefined>();
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const json = await res.json();
    setData(json.photo);
  };
  useEffect(() => {
    id ? getData() : null;
  }, [id]);
  if (!data) {
    return (
      <>
        <Typography
          sx={{
            width: "100%",
            marginTop: 20,
            textAlign: "center",
          }}
          variant="h6"
        >
          Loading...
        </Typography>
      </>
    );
  }

  return (
    <>
      <Box sx={{ marginTop: 2, marginX: 2 }}>
        <Box
          sx={{
            width: "50%",
            height: "60vh",

            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={data?.url}
            alt="image"
          />
        </Box>
        <Typography variant="h5" sx={{ marginY: 2 }}>
          {data?.title}
        </Typography>
        <Typography variant="subtitle1">
          {data?.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi
          consequuntur illum ipsam placeat nesciunt incidunt, cumque deleniti
          sequi, sed ea! Accusamus, quae id. Eius vero repudiandae molestias
          fuga quam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum nostrum maiores, ullam atque accusamus, dolore optio voluptate
          eaque ducimus voluptatem voluptatum, laboriosam minus aliquid ut
          magnam perferendis! Suscipit, saepe beatae?
        </Typography>
      </Box>
    </>
  );
};

export default SinglePost;
