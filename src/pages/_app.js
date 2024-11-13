import "@/styles/globals.css";
import { DataProvider } from "./api/client";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}
