/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Written for the blog at Lawmatics and featured in the National Law Review, this piece introduces legal professionals to the role of sending domain and IP reputation in email deliverability.</p>";

				const frontmatter = {"title":"Understanding Domain and IP Reputation in Email Deliverability","date":"15 October 2023","url":"https://www.natlawreview.com/article/understanding-domain-and-ip-reputation-email-deliverability","url_name":"The National Law Review"};
				const file = "/root/hire_shay/astro_cv/src/pages/articles/legal-sender-rep.md";
				const url = "/articles/legal-sender-rep";
				function rawContent() {
					return "\nWritten for the blog at Lawmatics and featured in the National Law Review, this piece introduces legal professionals to the role of sending domain and IP reputation in email deliverability.\n";
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
