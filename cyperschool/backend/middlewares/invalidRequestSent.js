const handleInvalidRequest = (req, res, next) => {
    res.status(405).json({ error: "Method Not Allowed" })
}

module.exports = handleInvalidRequest