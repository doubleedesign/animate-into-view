// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Animate-Into-View',
	tagline: 'Uses IntersectionObservers and CSS animations to have page elements make grand entrances.',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://doubleedesign.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/animate-into-view',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'doubleedesign', // Usually your GitHub org/user name.
	projectName: 'animate-into-view', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js')
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				},
				blog: false
			}),
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			navbar: {
				title: 'Animate-Into-View',
				items: [{
					href: 'https://www.npmjs.com/package/@doubleedesign/animate-into-view',
					label: 'NPM',
					position: 'right',
				},
					{
						href: 'https://github.com/doubleedesign/animate-into-view',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [],
				copyright: `Copyright © ${new Date().getFullYear()} by Leesa Ward. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
