import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Faqs.module.css";

type FAQ = { id: number; title: string; description: string };

export interface IProps {
  data: FAQ[];
}

const FAQS: NextPage<IProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RandomIn - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Frequently Asked Questions of RandomIn"
        />
      </Head>
      <h2 className={styles.colorText}>Frequently Asked Questions</h2>
      {data.map(({ id, title, description }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://my-json-server.typicode.com/PedagogiaDHBrasil/ctd-esp-fe3-class6-completed/db"
  );

  const data = await response.json();

  return {
    props: { data: data.faqs },
  };
}

export default FAQS;
