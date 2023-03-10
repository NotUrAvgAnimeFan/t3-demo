import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LoginHero from "~/components/loginHero";

import { api } from "~/utils/api";

const Ricardo: NextPage = () => {
  return (
    <>
      
      <main className="">
        <h1>This is Ricardo&apos;s page</h1>
          </main>
          <Link href="/" className="flex max-w-xs flex-col gap-4 text-blue-600 rounded-xl p-4 hover:bg-white/20"  >
              <p>Go To Home Page</p>
          </Link>
          <LoginHero></LoginHero>
    </>
  );
};
//added a comment
export default Ricardo;
