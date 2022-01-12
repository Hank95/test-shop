import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
        <meta name="description" content="First Post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  );
}

export default FirstPost;
