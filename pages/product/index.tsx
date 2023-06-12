import { useEffect, useState } from "react";
import { Box, Pagination, Typography, Button, Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import MediaCard from "@/components/card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import toast, { Toaster } from "react-hot-toast";

const PAGE_SIZE = 15; // Number of data items per page

interface ApiData {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<ApiData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=150"
      );
      const json = await res.json();
      setData(json.photos);
    };
    getData();
    // toast("Each Page Contains 15 Posts");
  }, []);

  // Calculate the total number of pages based on the data length
  const totalPages = Math.ceil(data?.length / PAGE_SIZE);

  // Get the data for the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = data?.slice(startIndex, endIndex);

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
    router.push(`/product?page=${page}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const { page } = router.query;
    if (typeof page === "string") {
      setCurrentPage(parseInt(page, 10));
    }
  }, [router.query]);

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
      {/* <Toaster /> */}
      <Link href={"/"}>
        <Button
          sx={{ marginX: 2, marginY: 1 }}
          variant="contained"
          color="secondary"
        >
          <ArrowBackIcon />
        </Button>
      </Link>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingY: 2,
        }}
      >
        {currentData.map((item: ApiData) => (
          <Box key={item.id}>
            <MediaCard
              id={item.id}
              title={item.title}
              body={item.description}
              url={item.url}
            />
          </Box>
        ))}
      </Box>
      <Divider />
      <Pagination
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: 2,
        }}
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="secondary"
      />
    </>
  );
}
