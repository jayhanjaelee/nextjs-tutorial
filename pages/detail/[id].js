import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Axios from "axios";
import Item from "@/src/component/item";
import { Loader } from "semantic-ui-react";
import Head from "next/head";

const Post = ({ item, name }) => {
  const router = useRouter();

  console.log("router.isFallback: ", router.isFallback);

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <p>{name} 환경 입니다.</p>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const API_URL = process.env.API_URL;
  const res = await Axios.get(API_URL);
  const data = res.data;

  return {
    // paths: [
    //   { params: { id: "495" } },
    //   { params: { id: "488" } },
    //   { params: { id: "477" } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true, // can also be true or 'blocking'
  };
}

// server 환경 (Node.js)
export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
