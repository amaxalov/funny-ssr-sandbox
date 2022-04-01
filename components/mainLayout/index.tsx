import Head from "next/head";
import Link from "next/link";
import { Nav, StyledLink, Main } from "./styled";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>
        <Link href="/" passHref>
          <StyledLink>home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>about</StyledLink>
        </Link>
        <Link href="/posts" passHref>
          <StyledLink>posts</StyledLink>
        </Link>
      </Nav>
      <Main>{children}</Main>
    </>
  );
};
