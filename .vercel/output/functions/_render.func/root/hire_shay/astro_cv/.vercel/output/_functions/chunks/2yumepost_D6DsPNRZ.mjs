/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Exploring how to turn my experience diagnosing delivery errors and developing smart deliverability strategies for clients into intuitive open-source web tools. Hosted on a VPS running Django, Gunicorn, and Nginx.</p>";

				const frontmatter = {"title":"/yumepost/","url":"http://yumepost.net","tags":["Deliverability Tools","DNS","Diagnostics","Django","Open Source","Gunicorn","Nginx"],"date":"Ongoing"};
				const file = "/root/hire_shay/astro_cv/src/pages/projects/2yumepost.md";
				const url = "/projects/2yumepost";
				function rawContent() {
					return "\nExploring how to turn my experience diagnosing delivery errors and developing smart deliverability strategies for clients into intuitive open-source web tools. Hosted on a VPS running Django, Gunicorn, and Nginx.\n";
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
