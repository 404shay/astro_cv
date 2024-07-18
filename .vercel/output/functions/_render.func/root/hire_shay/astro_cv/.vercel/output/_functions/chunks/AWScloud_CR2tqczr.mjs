/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6yGBdhM3.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I am currently preparing for the AWS Certified Cloud Practitioner exam as part of my Engineering degree program. Although I regularly use Route 53 and CloudFront at work and am familiar with cloud computing, this preparation is helping me solidify my foundational knowledge.</p>";

				const frontmatter = {"title":"AWS Certified Cloud Practitioner","org":"Amazon Web Services","tags":["AWS","Cloud Computing","Virtualization","Route 53","Cloud Architecture","Serverless","Cloudfront"],"url":"http://aws.amazon.com","date":"IN PROGRESS"};
				const file = "/root/hire_shay/astro_cv/src/pages/certificates/AWScloud.md";
				const url = "/certificates/AWScloud";
				function rawContent() {
					return "\nI am currently preparing for the AWS Certified Cloud Practitioner exam as part of my Engineering degree program. Although I regularly use Route 53 and CloudFront at work and am familiar with cloud computing, this preparation is helping me solidify my foundational knowledge.\n";
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
