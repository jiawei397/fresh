import { Head } from "$fresh/runtime.ts";
import { AppProps, bundleAssetUrl } from "$fresh/server.ts";

export default function App(props: AppProps) {
  const path = bundleAssetUrl("/ts/index.js");
  return (
    <>
      <Head>
        <meta name="description" content="Hello world!" />
        <script type="module" src={path}></script>
      </Head>
      <props.Component />
    </>
  );
}
