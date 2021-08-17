import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="container" style={{ width: "100%" }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="text/javascript"
        src="/static/libs/dat.gui.min.js"
        strategy="beforeInteractive"
      />
      <Script
        type="text/javascript"
        src="/static/libs/script.js"
        strategy="afterInteractive"
      />

      <main style={{ width: "100%" }}>
        <canvas
          style={{
            width: "100%",
          }}
        ></canvas>
      </main>
    </div>
  );
}
