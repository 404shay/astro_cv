/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Home server goodness. Powered by Raspberry Pi and a serious frustration with subscription models.</p>";

				const frontmatter = {"title":"/nimbus/","url":"http://github.com/404shay/nimbus","tags":["Docker","Containerization","Self-Hosting","Media Server","Open Source","Debian","Personal Cloud"],"date":"Ongoing"};
				const file = "/root/hire_shay/astro_cv/src/pages/projects/1nimbus.md";
				const url = "/projects/1nimbus";
				function rawContent() {
					return "\nHome server goodness. Powered by Raspberry Pi and a serious frustration with subscription models.\n";
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
