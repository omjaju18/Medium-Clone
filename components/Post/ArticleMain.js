import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

import Om from "../../static/om.jpg";
import Blog from "../../static/blog 1.avif";
import Thumbnail from "../../static/thumbnail.webp";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r `,
  content: `h-screen w-full p-[2rem]`,
  referencesContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  image: `object-cover`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
};
const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.referencesContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.image}
                src={Om}
                alt="author"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Om Jaju</div>
              <div className={styles.postDetails}>
                <span>September 2 • 10 min read </span> •
                <span className={styles.listenButton}>
                  <AiFillPlayCircle />
                  Listen
                </span>
              </div>
            </div>
          </div>

          {/*  Social Icons */}
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>

        {/* Article  */}
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image src={Blog} alt="banner" height={600} width={600} />
          </div>
          <h1 className={styles.title}>
            Introducing OJ: Navigating Uncertainty with Tech and Passion🚀
          </h1>
          <h4 className={styles.subtitle}>
            <div>Om Jaju , September 2 , 2023</div>
            <div>
              Brirf: Exploring the Tech Universe: A Journey through Web
              Development, Cybersecurity, and Beyond
            </div>
          </h4>
          <div className={styles.articleText}>
            👋 Hello, Tech Enthusiasts! I'm Om Jaju, and I'm thrilled to have
            you here on "OJ," my corner of the internet where technology,
            passion, and creativity collide. Today, I want to take you on a
            journey through my tech-filled life, from my beginnings as a B.Tech
            student specializing in Electronics and Computer Engineering to my
            current role as a passionate tech enthusiast. Join me as we explore
            my love for ReactJS, front-end development, cybersecurity, and more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
