import Head from "next/head";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container: `max-w-7xl flex-1`,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
};
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Medium Clone | OJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
