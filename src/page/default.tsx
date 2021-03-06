import React from 'react'
import { renderHtmlAstToReact } from '../util/renderHtmlToReact'
import { SiteMetaData, Page } from '../site'
import PageTemplate from '../templates/page'
import { Title } from '../design/Title'
import { graphql } from 'gatsby'

export const query = graphql`
	query DefaultPageQuery {
		site {
			siteMetadata {
				title
				tagLine
				description
				gitHubUrl
				twitter
				defaultCard
			}
		}
	}
`

const DefaultPage = ({
	data,
	pageContext,
}: {
	data: {
		site: {
			siteMetadata: SiteMetaData
		}
	}
	pageContext: {
		page: Page
		pagePath: string
		Footer: Page
	}
}) => (
	<PageTemplate siteMetadata={data.site.siteMetadata} pageContext={pageContext}>
		{pageContext.page.remark.frontmatter.noheadline !== true && (
			<Title page={pageContext.page} />
		)}
		{pageContext.page.remark?.htmlAst !== undefined &&
			renderHtmlAstToReact(pageContext.page.remark.htmlAst)}
	</PageTemplate>
)

export default DefaultPage
