import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/mainLayout";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 1280px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
