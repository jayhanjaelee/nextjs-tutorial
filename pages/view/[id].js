import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Axios from "axios";
import Item from "@/src/component/item";
import { Loader } from "semantic-ui-react";
import Head from "next/head";

const Post = ({ item, name }) => {
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

// server 환경 (Node.js)
export async function getServerSideProps(context) {
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
