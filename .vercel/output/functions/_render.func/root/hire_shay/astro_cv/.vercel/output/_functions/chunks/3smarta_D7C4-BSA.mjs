/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This is a fun experiment that involves adapting code from multiple engineers and MARTA’s transportation data feed to create a virtual Solari board for Atlanta public transit system.</p>";

				const frontmatter = {"title":"/smarta/","url":"https://github.com/404shay/smarta","tags":["Transit APIs","Split-flap Displays","Python","Ride MARTA, It's Smarta","JSON"],"date":"Ongoing"};
				const file = "/root/hire_shay/astro_cv/src/pages/projects/3smarta.md";
				const url = "/projects/3smarta";
				function rawContent() {
					return "\nThis is a fun experiment that involves adapting code from multiple engineers and MARTA's transportation data feed to create a virtual Solari board for Atlanta public transit system.";
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
