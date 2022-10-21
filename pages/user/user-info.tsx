import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function UserInfo() {
  return (
    <>
      <Head>
        <title>Title User Info</title>
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={function() {
          return console.log(`script loaded correctly, window.FB has been populated`);
        }}
      />
      <h1>User Info</h1>
      <Image
        src="/images/Sample_User_Icon.jpg"
        height={144}
        width={144}
        alt="Image"
        style={{ backgroundColor: "white" }}
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
