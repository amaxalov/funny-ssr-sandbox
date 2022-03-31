import type { NextPage } from "next";
import { useRouter } from "next/router";

const About: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>go back</button>
      About
    </div>
  );
};

export default About;
