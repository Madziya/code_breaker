'use client'

import Image from "next/image";
import Head from 'next/head';
import Chatbox from '../components/Chatbox';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatbox</title>
      </Head>
      <main>
        <h1>Welcome to Extratime Chatbot</h1>
        <Chatbox />
      </main>
    </div>
  );
}
