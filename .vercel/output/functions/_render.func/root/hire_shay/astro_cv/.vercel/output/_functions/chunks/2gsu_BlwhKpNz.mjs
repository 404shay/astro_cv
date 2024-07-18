/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>testing</p>";

				const frontmatter = {"title":"Bachelor of Arts, Advanced Rhetoric & Composition","location":"Atlanta, GA","url":"http://gsu.edu","institute":"Georgia State University","date":2016,"tags":["Professional & Technical Writing","Rhetorical Strategy","Public Discourse","Critical Analysis","Digital Rhetoric","Content Strategy & Development","User Experience Writing","Multimodal Communication"]};
				const file = "/root/hire_shay/astro_cv/src/pages/studies/2gsu.md";
				const url = "/studies/2gsu";
				function rawContent() {
					return "\ntesting";
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
