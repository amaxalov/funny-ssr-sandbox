import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Post } from "../../interfaces/post";

interface Props {
  posts: Post[];
}

const ItemCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const Item = styled.div`
  width: calc(33% - 24px);
  margin: 0 12px;
  cursor: pointer;
`;

const Posts: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>go back</button>
      <h1>Posts</h1>
      <ItemCont>
        {posts.map((item) => (
          <Link href={`/post/${item.id}`} key={item.id} passHref>
            <Item>
              <h3>{item.title}</h3>
              <p>{`${item.body.slice(0, 50)}${
                item.body.length > 50 && "..."
              }`}</p>
            </Item>
          </Link>
        ))}
      </ItemCont>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
