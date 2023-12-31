import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import Spotify from "next-auth/providers/spotify";

const clientIdSpotify = process.env.SPOTIFY_CLIENT_ID;
const clientSecretSpotify = process.env.SPOTIFY_CLIENT_SECRET;

const clientIdGoogle = process.env.GOOGLE_CLIENT_ID;
const clientSecretGoogle = process.env.GOOGLE_CLIENT_SECRET;

if (!clientIdSpotify || !clientSecretSpotify) {
	throw new Error("Missing enviroment variables");
}

const authOptions: AuthOptions = {
	providers: [
		Spotify({
			clientId: clientIdSpotify,
			clientSecret: clientSecretSpotify,
		}),
		Google({
			clientId: clientIdGoogle as string,
			clientSecret: clientSecretGoogle as string,
		}),
	],
	secret: process.env.SPOTIFY_SECRET,
	pages: {
		signIn: "/login",
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
