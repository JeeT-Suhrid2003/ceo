import { motion } from "framer-motion";
import Image from 'next/image';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  publishedAt: string;
}

const YouTubeVideo = ({ videoId, title, publishedAt }: YouTubeVideoProps) => {
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-neutral-800/50 rounded-lg overflow-hidden border border-neutral-700"
    >
      <a
        href={`https://youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-video"
      >
        <Image
          src={thumbnailUrl}
          alt={title}
          width={320}
          height={180}
          className="rounded-md"
        />
      </a>
      <div className="p-4">
        <h3 className="font-mono text-lg mb-2 text-green-400">{title}</h3>
        <p className="text-neutral-400 text-sm">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
};

export default YouTubeVideo;