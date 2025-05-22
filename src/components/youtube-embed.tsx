import { cx } from "@ngrok/mantle/cx";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"div">, "children"> & {
	/**
	 * The ID of the YouTube video to embed.
	 * @example "dQw4w9WgXcQ" from https://www.youtube.com/watch?v=dQw4w9WgXcQ
	 */
	videoId: string;
	/**
	 * Accessible video title
	 * @example "Rick Astley - Never Gonna Give You Up (Video)"
	 */
	title: string;
};

function YouTubeEmbed({ className, title, videoId, ...props }: Props) {
	return (
		<div className={cx("relative aspect-video mb-3", className)} {...props}>
			<iframe
				src={`https://www.youtube.com/embed/${videoId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="absolute inset-0 w-full h-full"
				title={title}
			/>
		</div>
	);
} 

export {
	//,
	YouTubeEmbed,
};
