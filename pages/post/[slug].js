import ArticleMain from "@/components/Post/ArticleMain";
import ReadersNav from "@/components/Post/ReadersNav";
import Recommendations from "@/components/Post/Recommendations";
import { MediumContext } from "@/context/MediumContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";

const styles = {
  content: `flex`,
};
const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    setPost(posts.find((post) => post.id === router.query.slug));
    
    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]);

  return (
    <>
      <Head>
        <title>Medium | OJ</title>
        <link rel="icon" href="/static/logo.png" />
      </Head>
      <main className={styles.content}>
        <ReadersNav />
        <ArticleMain post={post} author={author} />
        <Recommendations />
      </main>
    </>
  );
};

export default Post;
