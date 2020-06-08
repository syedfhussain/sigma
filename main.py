import sys
import webbrowser
import spotipy
import spotipy.util as util

scope = 'playlist-modify-public playlist-modify-private user-library-read streaming'

if len(sys.argv) == 2:
    username = sys.argv[1]
else:
    print("usage: %s username" % (sys.argv[0],))
    sys.exit()

token = util.prompt_for_user_token(username, scope)

if not token:
    print("Can't get token for", username)
    
sp = spotipy.Spotify(auth=token)


results = sp.current_user_saved_tracks()
for item in results['items']:
    track = item['track']
    print(track['name'] + ' - ' + track['artists'][0]['name'])

print("")