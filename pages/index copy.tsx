import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Datum, Manga } from "../types/type";

function index() {
  const [keyword, setKeyword] = useState("naruto");
  const [results, setResults] = useState("");

  const searchManga = async () => {
    const url = `https://api.jikan.moe/v4/manga?q=${keyword}`;
    const response = await fetch(url);
    const json = await response.json();
    setResults(json.data[2].title);
    console.log(results);
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
        <Button onClick={searchManga}>search manga</Button>
      </Grid>
     {JSON.stringify(results)}
    </div>
  );
}

export default index;
