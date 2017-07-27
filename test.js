'use strict'

const cheerio = require('cheerio')
const assert = require('assert')
const fetchPageRevision = require('.')

const isValidHTML = (html) => {
	try {
		const $ = cheerio.load(html)
		return $('body')[0]
	} catch (err) {
		return false
	}
}

const slug = 'Barack_Obama'
const revId = 792351024

fetchPageRevision(slug, revId)
.then((html) => {
	assert.ok(isValidHTML(html), 'invalid HTML returned')
})
.catch(assert.ifError)
