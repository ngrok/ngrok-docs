import {
	HtmlClassNameProvider,
	PageMetadata,
	ThemeClassNames,
} from "@docusaurus/theme-common";
import ContentVisibility from "@theme/ContentVisibility";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/MDXPage";
import TOC from "@theme/TOC";
import clsx from "clsx";
import React, { type ReactNode } from "react";

import EditMetaRow from "@theme/EditMetaRow";
import styles from "./styles.module.css";

export default function MDXPage(props: Props): ReactNode {
	const { content: MDXPageContent } = props;
	const { metadata, assets } = MDXPageContent;
	const {
		title,
		editUrl,
		description,
		frontMatter,
		lastUpdatedBy,
		lastUpdatedAt,
	} = metadata;
	const {
		keywords,
		wrapperClassName,
		hide_table_of_contents: hideTableOfContents,
	} = frontMatter;
	const image = assets.image ?? frontMatter.image;

	console.log("Content", MDXPageContent);

	const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

	return (
		<HtmlClassNameProvider
			className={clsx(
				wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
				ThemeClassNames.page.mdxPage,
			)}
		>
			<Layout>
				<PageMetadata
					title={title}
					description={description}
					keywords={keywords}
					image={image}
				/>
				<main className="container container--fluid margin-vert--lg">
					<div className={clsx("row", styles.mdxPageWrapper)}>
						<div className={clsx("col", !hideTableOfContents && "col--8")}>
							<ContentVisibility metadata={metadata} />
							<article>
								<MDXContent>
									<MDXPageContent />
								</MDXContent>
							</article>
							{canDisplayEditMetaRow && (
								<EditMetaRow
									className={clsx(
										"margin-top--sm",
										ThemeClassNames.pages.pageFooterEditMetaRow,
									)}
									editUrl={editUrl}
									lastUpdatedAt={lastUpdatedAt}
									lastUpdatedBy={lastUpdatedBy}
								/>
							)}
						</div>
						{!hideTableOfContents && MDXPageContent.toc.length > 0 && (
							<div className="col col--2">
								<TOC
									toc={MDXPageContent.toc}
									minHeadingLevel={frontMatter.toc_min_heading_level}
									maxHeadingLevel={frontMatter.toc_max_heading_level}
								/>
							</div>
						)}
					</div>
				</main>
			</Layout>
		</HtmlClassNameProvider>
	);
}
