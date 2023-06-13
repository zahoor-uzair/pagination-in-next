import { Button, Box } from "@mui/material";
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
        <Link href={"/common"}>
          <Button sx={{ margin: 2 }} variant="contained" color="secondary">
            Common
          </Button>
        </Link>
      </main>
    </>
  );
}
