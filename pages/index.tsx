import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Link href={"/product"}>
          <Button sx={{ margin: 2 }} variant="contained" color="secondary">
            Products
          </Button>
        </Link>
      </main>
    </>
  );
}
