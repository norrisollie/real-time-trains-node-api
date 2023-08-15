const url = require("url")
const express = require("express")
const router = express.Router()
const needle = require("needle")
const apicache = require("apicache")

const options = require("../../helpers/headers")

// env variables
const API_BASE_URL = process.env.API_BASE_URL

// init cache
let cache = apicache.middleware

router.get("/:code", cache("2 minutes"), async (req, res) => {
	console.log(req.params)

	try {
		// get CRS code from station query in URL
		const stationCode = req.params.code

		// construct URL to make request
		const apiRes = await needle(
			`${API_BASE_URL}/search/${stationCode}`,
			options
		)
		const data = apiRes.body
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({error})
	}
})

module.exports = router
