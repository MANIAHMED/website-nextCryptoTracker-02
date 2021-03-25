import Head from "next/head";
import Coin from "../components/Coins";
import SearchBar from "../components/SearchBar";


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1>moiz</h1>
  <SearchBar type='text' placeholder='Search' />
  <Coin />

    </div>
  );
}
