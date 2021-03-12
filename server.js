const express = require('express')
const app = express();
app.enable('etag')
app.get('/api', (req, res) => {
  res.json([1, 2, 3])
})
app.use(express.static('.'));
app.listen(9000, () => {
  console.log(`Listening at http://localhost:9000`)
})
