import Head from "next/head";
import { SerializeProposal } from "../src/serializeProposalParams";
import { WasmLoader } from "../src/WasmLoader";

export default function Home() {
  return (
    <WasmLoader>
      <Head>
        <title>Serialize error</title>
        <meta name="description" content="Bug repro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SerializeProposal />
    </WasmLoader>
  );
}
