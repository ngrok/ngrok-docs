export const YouTubeEmbed = ({ className, title, videoId, ...props }) => {
  return (
    <div className={`relative aspect-video mb-3 ${className}`} {...props}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title={title}
      />
    </div>
  );
};
