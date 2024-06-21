import VideoLectureContent from "../../components/VideoLectureContent";
import data from '/src/data';

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

  const { slug } = params;
  const pageData = data.find((item) => item.url.endsWith(slug));

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <VideoLectureContent item={item} prevItem={prevItem} nextItem={nextItem} />
  );
}