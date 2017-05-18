# API Endpoints
## HTML API
### Root
- `GET /` - loads React web app

## JSON API
### Users
- `POST /api/users` - create User
- `POST /api/users/:id/subscribe/:podcast_id` - post subscription to user

### Session
- `POST /api/session` - login
- `DELETE /api/session` - logout

### Podcasts
- `GET /api/podcasts/search` - Search podcasts by title
- `GET /api/podcasts/top` - top 100 podcasts of all genres
- `GET /api/podcasts/top?genre_id=<#>` - top 100 podcasts of specified genre
- `GET /api/podcasts/:id` - get specified podcast information

***NB: *** *ITunes will handle back-end searching. Database will not cache any results until user either clicks on or listens to a podcast*
