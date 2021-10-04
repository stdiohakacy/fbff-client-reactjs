// export function HomePage() {
//     function handleSubmit(e) {
//       e.preventDefault();
//       window.location.href = "https://18-140-150-238.nip.io/api/auth/facebook/"
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

import * as queryString from 'query-string';

const stringifiedParams = queryString.stringify({
  client_id: '850715192299757',
  redirect_uri: 'https://tuihand-fb-client.web.app/auth/facebook/callback/',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});

const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

export function HomePage() {
  return (
    <a href={facebookLoginUrl}>
      Login with Facebook
    </a>
  );
}