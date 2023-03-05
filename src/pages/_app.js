import '../styles/globals.css'
import { QueryClientProvider } from "react-query";
import { useQueryClientAndsettings } from "@config/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
export default function App({ Component, pageProps }) {
  const { queryClient } = useQueryClientAndsettings();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )


}
