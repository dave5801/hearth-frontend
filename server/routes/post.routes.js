import { Router } from 'express';
import * as SpotifyController from '../controllers/spotify.controller';
const router = new Router();

// Get Spotify Authorize URL for user to go to
router.route('/spotify/getAuthorizeURL').get(SpotifyController.getAuthorizeURL);

export default router;
