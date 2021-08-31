const baseUrl = 'https://<app-url>.awesome-crowdin.com';

const {
  PORT,
  CROWDIN_CLIENT_ID,
  CROWDIN_CLIENT_SECRET,
} = process.env;

module.exports = {
  baseUrl,
  port: PORT,
  crowdinClientId: CROWDIN_CLIENT_ID,
  crowdinClientSecret: CROWDIN_CLIENT_SECRET,
  crowdinAuthUrl: "https://accounts.crowdin.com/oauth/token"
};