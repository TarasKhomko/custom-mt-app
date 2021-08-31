const baseUrl = '';
const isDev = false;

let keys = {
  baseUrl,
  port: 6262,
  crowdinClientId: '',
  crowdinClientSecret: '',
  crowdinAuthUrl: isDev
    ? "https://accounts.tarask.crowdin.dev/oauth/token"
    : "https://accounts.crowdin.com/oauth/token",
};

if (isDev) {
  keys.crowdinBaseApiUrl = "https://tarask.crowdin.dev/api/v2";
}

module.exports = keys;