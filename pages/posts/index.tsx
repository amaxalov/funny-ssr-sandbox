import type { NextPage } from "next";
import { useRouter } from "next/router";

const Posts: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>go back</button>
      Posts
    </div>
  );
};

export default Posts;
