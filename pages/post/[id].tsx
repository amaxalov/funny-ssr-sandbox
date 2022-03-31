import { useRouter } from "next/router";

const Post = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>My id is {id}</div>;
};

export default Post;
