import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      
      <main className="">
        <h1>This is Ricardo's page</h1>
          </main>
          <Link className="flex max-w-xs flex-col gap-4 rounded-xl p-4 hover:bg-white/20" href="/" >
              <p>Go To Home Page</p>
          </Link>
    </>
  );
};

export default Home;
