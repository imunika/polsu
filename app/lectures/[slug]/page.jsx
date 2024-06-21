import VideoLectureContent from "../../components/VideoLectureContent";
import data from '/src/data';
import { useEffect } from "react";
import Head from "next/head";

export async function generateStaticParams() {
  const lectures = data.filter(item => item.category === "lectures");
  return lectures.map((elem) => ({
    slug: elem.url.substring(10),
  }));
}

export default function VideoLecturePage({ params: { slug } }) {
  const item = data.find(elem => elem.url === `/lectures/${slug}`);
  const prevItem = data.find(elem => elem.url === item.prev);
  const nextItem = data.find(elem => elem.url === item.next);

  useEffect(() => {
    document.title = item.title;
    document.querySelector('meta[name="description"]').setAttribute("content", item.description);
  }, [item]);
  
  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta name="description" content={item.description} />
        {/* Add more dynamic metadata here if needed */}
      </Head>
      <VideoLectureContent item={item} prevItem={prevItem} nextItem={nextItem} />
    </>
  );
}