/*
Sounds good! Just peaking at the DOM. @0xAquaWolf you just need to make a tweet card component, I'm sure there are tons out there you could pick from, then map over that component with each testimonial. That'll give you 1 column. The tag wrapping the map should have a marquee animation on it with a duration you can specify. Then wrap that in a container that has mobile styles and desktop styles (1 -> 3 columns).  Finally, split the list into 3 groups on desktop and have 3 columns, each column 1+3 w/ the same duration and column 2 being slower
*/

import Image from "next/image";
import ScrollingTestimonials from "./ScrollingTestimonials";

const commentsData = [
  {
    username: "Bob Koss",
    handle: "@bobkoss280",
    avatarUrl: "/images/png/youtube-pfp/bob-koss.png",
    comment:
      "Just found your channel. Great content. Thank you for taking the time to make the videos",
    isYouTuber: true,
  },
  {
    username: "LUFFY",
    handle: "@dhanuzh.d",
    avatarUrl: "/images/png/youtube-pfp/luffy.png",
    comment:
      "bro can you give me your vscode vim setup code, I like that very much",
    isYouTuber: true,
  },
  {
    username: "Computer Engineer",
    handle: "@computerengineercemberkera3490",
    avatarUrl: "/images/png/youtube-pfp/computer-engineer.png",
    comment: "i liked it!!",
    isYouTuber: true,
  },
  {
    username: "Nine",
    handle: "@Nineiscomplete",
    avatarUrl: "/images/png/youtube-pfp/nine.png",
    comment: "Streams are fire 🔥🔥",
    isYouTuber: true,
  },
  {
    username: "GR3Y'S ORG4N1CS",
    handle: "@GR3YSORG4N1CS",
    avatarUrl: "/images/png/youtube-pfp/GR3Ys-0RG4N1CS.png",
    comment:
      "From the thumbnail it looks like you're missing rainbow-delimiters.nvim but other than that, looks pretty much exactly the same (within reason) as vscode",
    isYouTuber: true,
  },
  {
    username: "Val Alexander",
    handle: "@OxBuns",
    avatarUrl: "/images/png/youtube-pfp/Val-Alexander.png",
    comment: "Not surprised one bit — well deserved 👏",
    isYouTuber: true,
  },
  {
    username: "Douglas",
    handle: "@Douglas-PC",
    avatarUrl: "/images/png/youtube-pfp/Douglas.png",
    comment:
      "Subbed, keep it up good explainers on technical, programming, reviewing the IDE and coding information.",
    isYouTuber: true,
  },
  {
    username: "Joffrey",
    handle: "@joffrey5601",
    avatarUrl: "/images/png/youtube-pfp/Joffrey.png",
    comment: "You deserve it.",
    isYouTuber: true,
  },
  {
    username: "Andriy Pashynnyk",
    handle: "@andriypashynnyk4278",
    avatarUrl: "/images/png/youtube-pfp/Andriy-Pashynnyk.png",
    comment: "very nice stream!",
    isYouTuber: true,
  },
  {
    username: "Someone You've Never Heard of",
    handle: "@someoneyouveneverheardof",
    avatarUrl: "/images/png/youtube-pfp/Someone-You've-Never-Heard-of.png",
    comment: "Loved it!",
    isYouTuber: true,
  },
  {
    username: "cariyaputta",
    handle: "@cariyaputta",
    avatarUrl: "/images/png/youtube-pfp/cariyaputta.png",
    comment: "Nice.",
    isYouTuber: true,
  },
  {
    username: "Improving Cow",
    handle: "@improving_cow",
    avatarUrl: "/images/png/youtube-pfp/Improving-Cow.png",
    comment: "Best tutorial",
    isYouTuber: true,
  },
];

export default function YoutubeGrid() {
  return (
    <div className="">
      <div>Loved by Thousands of People</div>
      <div>Here's what some of my viewers have to say about 0xAquaWolf</div>
      {/* This is the grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"> */}
      <div className="min-h-screen">
        <ScrollingTestimonials testimonials={commentsData} />
      </div>
      {/* </div> */}
    </div>
  );
}
{
  /* <div>
  {commentsData.map((comment, index) => (
    <div key={index} className="bg-gray-600/20 p-4 rounded-lg">
      <div className="flex items-center space-x-2 mb-2 justify-between">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={comment.avatarUrl}
              alt={`${comment.username}'s avatar`}
              width={40}
              height={40}
              className="rounded-full select-none"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white font-semibold truncate">
              {comment.username}
            </p>
            <p className="text-gray-400 text-sm truncate">
              {comment.handle}
            </p>
          </div>
        </div>
        <div>
          {comment.isYouTuber && (
            <svg
              className="w-5 h-5 text-red-500 ml-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          )}
        </div>
      </div>
      <p className="text-white">{comment.comment}</p>
    </div>
  ))} 
</div> */
}
