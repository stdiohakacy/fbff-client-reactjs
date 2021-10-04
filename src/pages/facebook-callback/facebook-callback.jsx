import React, {Component} from 'react'
import axios from 'axios'
import * as queryString from 'query-string';

async function getAccessTokenFromCode(code) {
    const { data } = await axios({
      url: 'https://graph.facebook.com/v4.0/oauth/access_token',
      method: 'get',
      params: {
        client_id: '850715192299757',
        client_secret: '6cd04f04ddfc1fbcd4874bf941cab444',
        redirect_uri: 'https://tuihand-fb-client.web.app/auth/facebook/callback/',
        code,
      },
    });
    console.log(data); // { access_token, token_type, expires_in }
    return data.access_token;
  };

  async function getFacebookUserData(access_token) {
    const { data } = await axios({
      url: 'https://graph.facebook.com/me',
      method: 'get',
      params: {
        fields: ['id', 'email', 'first_name', 'last_name', 'link'].join(','),
        access_token,
      },
    });
    console.log(data); // { id, email, first_name, last_name }
    return data;
  };

  export const FBCallback = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        const urlParams = queryString.parse(window.location.search);
        const code = urlParams.code;
        const token = await getAccessTokenFromCode(code);
        const data = await getFacebookUserData(token);
        console.log(data);
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
  }
