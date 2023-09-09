import ArticleMain from "@/components/Post/ArticleMain";
import ReadersNav from "@/components/Post/ReadersNav";
import Recommendations from "@/components/Post/Recommendations";
import Head from "next/head";

const styles = {
  content: `flex`,
};
const Post = () => {
  return (
    <>
      <Head>
        <title>Medium | Clever Programmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <ReadersNav />
        <ArticleMain />
        <Recommendations />
      </main>
    </>
  );
};

export default Post;
