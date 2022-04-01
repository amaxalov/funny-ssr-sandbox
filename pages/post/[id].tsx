import type { GetServerSidePropsContext } from "next";
import Link from "next/link";
import styled from "styled-components";
import { Post } from "../../interfaces/post";

interface Props {
  post: Post;
}

const GoBack = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

const PostPage = ({ post }: Props) => {
  return (
    <div>
      <Link passHref href="/posts">
        <GoBack>ᐸ Go to the all posts</GoBack>
      </Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

interface PostPageContext extends GetServerSidePropsContext {
  query: { id: string };
}

export async function getServerSideProps({ query, req }: PostPageContext) {
  console.log(req);
  const { id } = query;
  const res = await fetch(`http://localhost:4200/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
