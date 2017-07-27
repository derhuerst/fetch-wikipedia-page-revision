'use strict'

const {stringify} = require('query-string')
const {fetch} = require('fetch-ponyfill')({Promise: require('pinkie-promise')})
const cheerio = require('cheerio')

const endpoint = 'https://en.wikipedia.org/wiki/'

const fetchPageRevision = (slug, revision) => {
	const target = endpoint + slug + '?' + stringify({
		useformat: 'mobile',
		oldid: revision + ''
	})

	return fetch(target, {
		mode: 'cors',
		redirect: 'follow',
		headers: {
			'user-agent': 'https://gtihub.com/derhuerst/wikipedia-articles-feed'
		}
	})
	.then((res) => {
		if (!res.ok) {
			const err = new Error(res.statusText)
			err.statusCode = res.status
			throw err
		}
		return res.text()
	})
	.then((html) => {
		const $ = cheerio.load(html)

		$('link[rel="stylesheet"]').remove()
		$('link[rel="dns-prefetch"]').remove()
		$('script').remove()
		$('.banner-container').remove()
		$('.header-container').remove()
		$('.mw-revision').remove()

		const fileLink = '/wiki/File:'
		$('a.image').each((i, node) => {
			if (node.attribs.href && node.attribs.href.slice(0, 11) === fileLink) {
				const $a = $(node)
				const isLazyLoaded = !!$a.find('.lazy-image-placeholder').length
				if (isLazyLoaded) $a.html($a.find('noscript').text())
			}
		})

		$('head').append($('<link rel="stylesheet" href="/static/mobile.css"/>'))

		return $.html()
	})
}

module.exports = fetchPageRevision
