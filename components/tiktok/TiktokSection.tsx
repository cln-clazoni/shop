import React from 'react';

const videos = [
  "7498611549276228870",
  "7397563160892296453",
  "7526060255445306629",
  "7521497557474888965",
  "7461001600086101253",
  "7383552546201160965",
  "7384279960086744325",
  "7387263613628632325",
];
const TikTokSection = () => {
  return (
    <section id="tiktok" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros TikToks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map(videoId => (
            <div key={videoId} className="w-full h-full">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                style={{ width: "100%", height: "600px", border: "none" }}
                allow="encrypted-media;"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TikTokSection;
