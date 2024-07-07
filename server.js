require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const app = express();
const referralRoutes = require('./routes/referralRoutes');

app.use(cors());

app.use(express.json());
app.use('/api/referrals', referralRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
