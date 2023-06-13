import Button from "@/Customframework/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Link href={"/product"}>
          <Button style={{ margin: 6 }}>Products</Button>
        </Link>
        <Link href={"/common"}>
          <Button style={{ margin: 6 }}>Common Components</Button>
        </Link>
      </main>
    </>
  );
}
