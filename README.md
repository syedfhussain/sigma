# Sigma Server

**Note: This application requires [sigma-server](https://github.com/farazsfh/sigma-server) to handle API requests. Please set up sigma-server before starting the front end application.**

Sigma is a web application that collects playlist data from Spotify and creates interactive data visualizations for them. You can use Sigma to explore your own playlists and see the relationship between variables or how certain variables change throughout the playlist.

# Setup
1. Ensure you have Node.js on your machine aswell as sigma-server running
2. In a terminal window, run `npm i`
3. In the same window, run `npm start`
4. Create an application in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/login). Set your applications' redirect url to `http://localhost:3000/playlists/`.
5. In server_files/Credentials.js enter your client ID and client secret.
6. Open [http://localhost:3000](http://localhost:3000) in your browser
7. Click login, sign in with your Spotify account and then select a playlist to analyze

If playlists are not being displayed, refresh the page.
