import './VideoItem.scss';

const VideoItem = ({ video }) => {
  const { date, link, author } = video;

  return (
    <>
      <p>{date}</p>
      <p>{author}</p>
      <a href={link}>Youtube</a>
    </>
  );
};

export default VideoItem;
