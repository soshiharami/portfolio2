import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import dynamic from "next/dynamic";
import { Json } from "../components/Json";

const Home: NextPage = () => {
  const query = gql`
    query {
      me {
        name
        about
        age
        skills {
          id
          name
          types {
            name
            id
          }
        }
        histories {
          id
          time
          title
          about
        }
        contact {
          name
          url
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <p>loading...</p>;
  }

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  const JsonComponent = dynamic(
    () => import("../components/Json").then((modules) => modules.Json),
    { ssr: false }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Soshi portfolio</title>
        <meta name="description" content="そうしくんのポートフォリオ" />
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1386250147827372034/EhGcAlPk_400x400.jpg"
        />
      </Head>

      <main className={styles.main}>
        <h1>hello, I am {data.me[0].name}</h1>
        <h1>This is {data.me[0].name}`s portFolio</h1>
        <JsonComponent json={data.me[0]} />
      </main>

      <style jsx>
        {`
          .json {
            width: 100%;
            height: 100%;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        `}
      </style>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
