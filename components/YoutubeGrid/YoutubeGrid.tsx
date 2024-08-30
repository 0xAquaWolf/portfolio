import ScrollingTestimonials from "./ScrollingTestimonials";
import { commentsData } from "./CommentData";

export default function YoutubeGrid() {
  return (
    <div className="">
      {/* <div className="text-sm font-thin">Loved by Thousands of People</div>
      <div>{"Here's what some of my viewers have to say about 0xAquaWolf"}</div> */}
      <div className="min-h-screen relative">
        <ScrollingTestimonials testimonials={commentsData} />
      </div>
    </div>
  );
}
