import ResponsiveYouTube from '@/components/ui/ResponsiveYouTube';

export default function FeaturedVideo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ResponsiveYouTube 
          video="4Q85SxxnUZc" // Introduction video
          title="Introduction Video"
          className="max-w-4xl mx-auto"
        />
      </div>
    </section>
  );
}