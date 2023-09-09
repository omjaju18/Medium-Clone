import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";

const styles = {
  wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorName: `font-semibold`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  bookmarkContainer: `cursor-pointer`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  thumbnailContainer: `flex-1`,
};

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          {/*       Author section */}
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                className={styles.authorImage}
                width={40}
                height={40}
                alt="author image"
              />
            </div>
            <div className={styles.authorName}>Om Jaju</div>
          </div>

          <h1 className={styles.title}>
            🚀 Your Roadmap to Web Development Mastery: From Zero to Pro 🌟
          </h1>
          <div className={styles.briefing}>
            Part 1: Introduction to Web Development and Front-End Fundamentals
          </div>

          {/*  Details section */}
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              9 Sepetember • 20 min read •{" "}
              <span className={styles.category}>productivity</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image height={100} width={100} src={Logo} alt="Thumbnail" />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
