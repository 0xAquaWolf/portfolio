import ScrollingTestimonials from "./ScrollingTestimonials";
import { commentsData } from "./CommentData";

export default function YoutubeGrid() {
  return (
    <div className="relative min-h-screen">
      <ScrollingTestimonials testimonials={commentsData} />
    </div>
  );
}
