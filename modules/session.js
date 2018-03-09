const requiredHeaders = ['authorization']
const errorMessages = {
  '01': 'Missing Header'
}

// Minimal session only!
const Session = function(req, res, next) {
  let error = false
  let errorMsg = ''

  // compare the session headers with the request
  for (let i = 0; i < requiredHeaders.length; i++) {
    const item = requiredHeaders[i]
    const header = req.headers[item.toLowerCase()]

    if (header === undefined) {
      error = true
      errorMsg = errorMessages['01']
    }
  }

  // nope, we has problem
  if (error === true) {
    res.status(401).json({ success: false, message: `Unauthorized - ${errorMsg}` })
    return
  }

  // everything is okay, continue
  next()
}

module.exports = Session
