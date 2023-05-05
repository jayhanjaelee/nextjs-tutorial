import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import ItemList from "@/src/component/itemList";
import { Divider, Header, Loader } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Hanjae Lee | Blog</title>
        <meta name="description" content="hanjaelee blog."></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />

        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL;
  const res = await Axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
