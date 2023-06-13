import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
interface Props {
  id: number;
  title: string;
  body: string;
  url: string;
}
export default function MediaCard({ id, title, body, url }: Props) {
  return (
    <>
      <Link style={{ textDecoration: "none" }} href={`/product/${id}`}>
        <Card className="card" sx={{ width: 320, height: 330, marginY: 3 }}>
          <CardMedia sx={{ height: 200 }} image={url} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title.slice(0, 20)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body.slice(0, 100)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
