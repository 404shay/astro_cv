/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>During my time at Mailchimp, I frequently handled issues related to trust &#x26; safety, compromised accounts, phishing campaigns, social engineering, and spoofing. When the COVID-19 pandemic began, these problems rapidly evolved.</p>\n<p>To build on this professional experience and gain a deeper understanding of the changing security landscape, I completed a 6-month Cybersecurity course through Georgia Tech’s Professional Education division.</p>";

				const frontmatter = {"title":"Cyber and Network Security Professional","org":"Georgia Institute of Technology","tags":["Network Security","Cybersecurity","Linux Administration","GRC","ELK Stack","Azure"],"url":"http://gatech.edu","date":2021};
				const file = "/root/hire_shay/astro_cv/src/pages/certificates/cyber-network-pro.md";
				const url = "/certificates/cyber-network-pro";
				function rawContent() {
					return "\nDuring my time at Mailchimp, I frequently handled issues related to trust & safety, compromised accounts, phishing campaigns, social engineering, and spoofing. When the COVID-19 pandemic began, these problems rapidly evolved. \n\nTo build on this professional experience and gain a deeper understanding of the changing security landscape, I completed a 6-month Cybersecurity course through Georgia Tech's Professional Education division.\n";
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
