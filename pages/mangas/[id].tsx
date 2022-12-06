import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function MangasId() {
  const router = useRouter();
  const [manga, setManga] = useState([]);
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      if (router.query.id) {
        const data = await fetch(
          `https://api.jikan.moe/v4/manga/${router.query.id}`
        );
        const json = await data.json();
        setManga(json.data);
      }
    };
    fetchData().catch(console.error);
  }, [router]);

  return (
    <div>
      <Head>
        <title>{manga.title}</title>
      </Head>
      <h1>{manga.title}</h1>
    </div>
  );
}

export default MangasId;

export async function getServerSideProps({query}) {
  console.log('server side',query)
  return {props:{malId:query.id}}
}