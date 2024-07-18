/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Written for the blog at Lawmatics and featured in the National Law Review, this piece serves as an introduction to email authentication protocols for legal professionals.</p>";

				const frontmatter = {"title":"An Introduction to Email Authentication for Legal Professionals","date":"9 November 2023","url":"https://www.natlawreview.com/article/introduction-email-authentication-legal-professionals","url_name":"The National Law Review"};
				const file = "/root/hire_shay/astro_cv/src/pages/articles/legal-sender-auth.md";
				const url = "/articles/legal-sender-auth";
				function rawContent() {
					return "\nWritten for the blog at Lawmatics and featured in the National Law Review, this piece serves as an introduction to email authentication protocols for legal professionals.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
