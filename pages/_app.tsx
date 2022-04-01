import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/mainLayout";
import { LoadingScreen } from "../components/loadingScreen";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 0 20px;
  max-width: 1280px;
`;

function App({ Component, pageProps }: AppProps) {
  const [isLoading, loading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      loading(true);
    };
    const handleStop = () => {
      loading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <MainLayout>
      {isLoading && <LoadingScreen />}
      <Container>
        <Component {...pageProps} />
      </Container>
    </MainLayout>
  );
}

export default App;
