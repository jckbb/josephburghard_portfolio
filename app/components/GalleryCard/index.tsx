import ScreenshotVideo from "../../assets/screenshot_video.png";
import ScreenshotHome from "../../assets/screenshot_home.png";
import ScreenshotCollection from "../../assets/screenshot_collection.png";
import ScreenshotFilter from "../../assets/screenshot_filter.png";

const GalleryCard = () => {
  return (
    <div className="w-3/4 h-1/2 flex flex-1 items-center justify-end">
      <div className="h-full w-1/3 flex items-center">
        <img
          alt="Screenshot Home"
          src={ScreenshotHome}
          height={300}
          width={150}
          className="absolute -rotate-17"
        />
        <img
          alt="Screenshot Video"
          src={ScreenshotVideo}
          height={300}
          width={150}
          className="absolute"
        />
        <img
          alt="Screenshot Video"
          src={ScreenshotFilter}
          height={300}
          width={150}
          className="absolute rotate-17 group-hover:rotate-90"
        />
        <img
          alt="Screenshot Video"
          src={ScreenshotCollection}
          height={300}
          width={150}
          className="absolute rotate-45 group-hover:rotate-90"
        />
      </div>
    </div>
  );
};

export default GalleryCard;
