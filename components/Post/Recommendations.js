import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

import Om from "../../static/om.jpg";
import Author from "../../static/author.jpg";
import Blog from "../../static/blog 1.avif";
import Web from "../../static/web.avif";
import MyBack from "../../static/Myback.jpeg";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
  recommendationContainer: ``,
  title: `my-[1rem]`,
  articlesContainer: ``,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
};

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <>
        {/* Top section  */}
        <div className={styles.accentedButton}>Get unlimited access</div>
        <div className={styles.searchBar}>
          <AiOutlineSearch />
          <input
            className={styles.searchInput}
            placeholder="Search"
            type="text"
          />
        </div>
        <div className={styles.authorContainer}>
          <div className={styles.authorProfileImageContainer}>
            <Image src={Om} width={100} height={100} alt="Profile Image" />
          </div>
          <div className={styles.authorName}>Om Jaju</div>
          <div className={styles.authorFollowing}>100 followers </div>
          <div className={styles.authorActions}>
            <button className={styles.actionButton}>Follow</button>
            <button className={styles.actionButton}>
              <MdMarkEmailUnread />
            </button>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className={styles.recommendationContainer}>
          <div className={styles.title}>More from Medium</div>
          <div className={styles.articlesContainer}>
            {recommendedPosts.map((post) => (
              <div key={post.id} className={styles.articleContentWrapper}>
                <div className={styles.articleContent}>
                  <div className={styles.recommendationAuthorContainer}>
                    <div
                      className={
                        styles.recommendationAuthorProfileImageContainer
                      }
                    >
                      <Image
                        src={post.author.image}
                        alt="author"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className={styles.recommendationAuthorName}>
                      {post.author.name}
                    </div>
                  </div>
                  <div className={styles.recommendationTitle}>{post.title}</div>
                </div>
                <div className={styles.recommendationThumbnailContainer}>
                  <Image
                    className={styles.recommendationThumbnail}
                    src={post.image}
                    alt="thumbnail"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Recommendations;

const recommendedPosts = [
  {
    title: "Introducing OJ: Navigating Uncertainty with Tech and Passion🚀",
    image: Blog,
    author: {
      name: "OJ",
      image: Om,
    },
  },
  {
    title: "Things they don't tell you",
    image: MyBack,
    author: {
      name: "Shivaay Kohli ",
      image: Author,
    },
  },
  {
    title: "🚀 Your Roadmap to Web Development Mastery: From Zero to Pro 🌟",
    image: Web,
    author: {
      name: "OJ",
      image: Om,
    },
  },
];
