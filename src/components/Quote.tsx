import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { IconButton } from "@mui/material";

export default function Quote({
  author,
  text,
}: {
  author: string;
  text: string;
}) {
  return (
    <Card
      sx={{
        maxWidth: 800,
        bgcolor: "orange",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        <Typography
          sx={{ textAlign: "end", fontStyle: "italic" }}
          variant="subtitle1"
        >
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ThumbUpIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <ThumbDownIcon sx={{ color: "white" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
