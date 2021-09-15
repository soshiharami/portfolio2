import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Curl } from "../components/Curl";
import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import { Skills } from "../components/Skills";
import { Contacts } from "../components/Contacts";
import { Histories } from "../components/Histories";
import { me } from "../types/Me";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const swichLoading = () => {
    setIsLoading(false);
  };

  const me: me = data.me[0];

  return (
    <div className={styles.container}>
      <Head>
        <title>Soshi portfolio</title>
        <meta name="description" content="soshi harami portfolio" />
        <link rel="icon" href="/rentyon.jpg" />
      </Head>
      {!isLoading ? (
        <>
          <main className={styles.main}>
            <div className={styles.hello}>
              <Image
                src={"/rentyon.jpg"}
                width={200}
                height={200}
                alt={"icon"}
              />
              <h1 className={styles.iam}>hello, I am {me.name}</h1>
            </div>
            <Skills skills={me.skills} />
            <Contacts contacts={me.contact} />
            <Histories histories={me.histories} />
          </main>
          <footer className={styles.footer}>
            Powered by
            <p className={styles.soshikun}>そうしくん！</p>
          </footer>
        </>
      ) : (
        <main>
          <Curl swichLoading={swichLoading} />
        </main>
      )}
    </div>
  );
};

export default Home;
