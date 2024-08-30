import ScrollingTestimonials from "./ScrollingTestimonials";
import { commentsData } from "./CommentData";

export default function YoutubeGrid() {
  return (
    <div className="min-h-screen relative">
      <ScrollingTestimonials testimonials={commentsData} />
    </div>
  );
}
