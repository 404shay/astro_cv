/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p style=\"text-align: center;\">\n<img src=\"about.gif\" alt=\"a GIF from Spirited Away with a lantern bowing to No-Face and Chihiro\" style=\"display: block; margin: 0 auto; width: 100%; max-width: 300px; height: auto;\">\n<br>\nHi, I'm Shay. \n<br><br>\nI've been helping platforms tackle all kinds of email and abuse problems since 2018.\n</p>";

				const frontmatter = {"title":"about","name":"Shay Paris","designation":"Deliverability Engineer","location":"Based in Atlanta, GA","pronouns":"she/her/ella","website":"http://hireshay.com"};
				const file = "/root/hire_shay/astro_cv/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "<p style=\"text-align: center;\">\n<img\n    src=\"about.gif\"\n    alt=\"a GIF from Spirited Away with a lantern bowing to No-Face and Chihiro\"\n    style=\"display: block; margin: 0 auto; width: 100%; max-width: 300px; height: auto;\"\n/>\n<br>\nHi, I'm Shay. \n<br><br>\nI've been helping platforms tackle all kinds of email and abuse problems since 2018.\n</p>";
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

export { _page as _, compiledContent as c, frontmatter as f };
