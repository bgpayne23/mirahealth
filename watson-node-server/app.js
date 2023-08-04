const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

const WATSON_API_KEY = 'ZxLqSwjFfrVvQ0i6YG82fMGt05j47TpHfib3FU4t_eDD';
const WATSON_SERVICE_URL = 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/b80ae04a-ea88-4d65-8694-dc28af13db0a';

app.post('/sentiment-analysis', async (req, res) => {
  const textToAnalyze = req.body.text;

  try {
    const response = await axios.post(
      `${WATSON_SERVICE_URL}/v1/analyze?version=2019-07-12`,
      {
        text: textToAnalyze,
        features: {
          sentiment: {},
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(
            `apikey:${WATSON_API_KEY}`
          ).toString('base64')}`,
        },
      }
    );

    const sentimentScore = 
      response.data.sentiment.document.score || 0; // Score ranges from -1 to 1
      

      let roundedScore = "no sentiment";

      switch (true) {
        case sentimentScore < -0.2:
          roundedScore = -1;
          break;
        case sentimentScore < 0.2:
          roundedScore = 0;
          break;
        case sentimentScore >= 0.2:
          roundedScore = 1;
          break;
      }

    res.json({ roundedScore });
  } catch (error) {
    console.error('Error analyzing sentiment:', error.message);
    res.status(500).json({ error: 'Error analyzing sentiment' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
