import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function MangaCard({ manga }: any) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={manga.title}
          height="100%"
          image={`https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {manga.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {manga.synopsis}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/mangas/${manga.mal_id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default MangaCard;
