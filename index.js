const express = require('express');
const bodyParser = require('body-parser');
const keys  = require('./keys');
const manifest = require('./config/manifest');
const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate({key: 'key'});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/manifest.json', (req, res) => res.json(manifest));
app.post('/installed', async(req, res) => {
  res.status(200).send('{}');
});

app.post('/translate', async(req, res) => {
  try {
      const translations = await translateText(req.body.strings, req.query.target);

      res.json({data: {
              translations: translations
          }});
  } catch(e) {
      console.log('error', e)
  }
});

async function translateText(text, target) {
  try {
      let [translations] = await translate.translate(text, target);
      console.log(translations);
      return  Array.isArray(translations) ? translations : [translations];
  } catch(e) {
      console.log('error', e)
  }
}

app.listen(keys.port, () => {
  console.log(`Crowdin apps listening on ${keys.port}! Good luck!!!`);
});