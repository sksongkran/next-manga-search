import { Box, Button, Card, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import MangaCard from "../components/MangaCard";

const ButtonClick = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.jikan.moe/v4/manga?q=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json.data);
      });
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Keyword"
        variant="outlined"
        sx={{ width: "100%" }}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <Grid container justifyContent="center" marginTop={"10px"}>
        <Button onClick={fetchData}>search manga</Button>
      </Grid>
      <Box marginTop={5}>
        {data.length > 0 && (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((manga) => (
              
              <Grid
                justifyContent="center"
                item
                xs={2}
                sm={4}
                md={4}
                key={manga.mal_id}
              >
                <MangaCard manga={manga}></MangaCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default ButtonClick;
