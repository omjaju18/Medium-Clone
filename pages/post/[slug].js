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
    // Check if posts and users data are available
    if (posts && users) {
      const foundPost = posts.find((post) => post.id === router.query.slug);
      const foundAuthor = users.find(
        (user) => user.id === foundPost?.data?.author
      );

      setPost(foundPost);
      setAuthor(foundAuthor);
    }
  }, [posts, users, router.query.slug]);

  // Add conditional rendering for when data is not available yet
  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Medium | OJ</title>
        <link rel="icon" href="/favicon.ico" />
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
