import ResponsiveYouTube from "@/components/ui/ResponsiveYouTube";

// Example usage of the ResponsiveYouTube component
export default function YouTubeExample() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">Responsive YouTube Examples</h1>
      
      {/* Basic usage with video ID */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Usage (Video ID)</h2>
        <ResponsiveYouTube video="dQw4w9WgXcQ" title="Never Gonna Give You Up" />
      </section>

      {/* Full URL with options */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Full URL with Options</h2>
        <ResponsiveYouTube
          video="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Never Gonna Give You Up - Full URL"
          noCookie={true}
          start={30}
          controls={true}
          lazy={true}
          maxWidthClass="max-w-2xl mx-auto"
        />
      </section>

      {/* Different aspect ratios and sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Different Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Small (max-w-md)</h3>
            <ResponsiveYouTube
              video="https://youtu.be/dQw4w9WgXcQ"
              title="Small size example"
              maxWidthClass="max-w-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Medium (max-w-lg)</h3>
            <ResponsiveYouTube
              video="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              title="Medium size example"
              maxWidthClass="max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Immediate load (no lazy loading) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Immediate Load (No Lazy Loading)</h2>
        <ResponsiveYouTube
          video="dQw4w9WgXcQ"
          title="Immediate load example"
          lazy={false}
          maxWidthClass="max-w-3xl mx-auto"
        />
      </section>
    </div>
  );
}