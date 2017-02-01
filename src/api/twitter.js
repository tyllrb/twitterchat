const nodeTwitterApi = require('node-twitter-api');
const twitter = new nodeTwitterApi({
  consumerKey: 'TRSSCUWzWmbhEoycDfvKhre23',
  consumerSecret: 'cuYwjzSITN35C0lRiBEjtGLSGpzCUPR65OD0HgAcGT2zDOhmPS',
  callback: 'http://localhost:3000/'
});

export function requestToken () {
  return new Promise((resolve, reject) => {
    twitter.getRequestToken((error, requestToken, requestTokenSecret, results) => {
      if (!error) {
        resolve({
          toke: requestToken,
          secret: requestTokenSecret
        });
      } else {
        reject({
          reason: error
        });
      }
    });
  });
}
