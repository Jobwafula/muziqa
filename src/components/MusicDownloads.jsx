import React from 'react';

const musicTracks = [
  {
    title: 'Electro/pops Mix(Heartbreak overdose)',
    artist: 'HacktivitistDj',
    Duration: '1hour',
    downloadLink: 'https://example.com/download/track1.mp3',
  },
  {
    title: 'Reggaeton mix (From old to top rated hits)',
    artist: 'HacktivitistDj',
    Duration: '2hrs',
    downloadLink: 'https://example.com/download/track2.mp3',
  },
  // Add more tracks as needed
];

const MusicDownloads = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12">
      <div className="container mx-auto px-4">
         {/* div */}
         <section className='h-48 flex items-center justify-center bg-gray-700 '>
            <h1 className='uppercase text-3xl text-center text-white'>Download links for all mixes</h1>
        </section>
        <div className="mt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicTracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{track.title}</h2>
              <p className="text-gray-400 mb-4">Artist: {track.artist}</p>
              <p className="text-gray-400 mb-4">Album: {track.album}</p>
              <a
                href={track.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicDownloads;
