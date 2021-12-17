const CLIENT_ID = "cout98ttfqn7omvi4ryoz5bm3ltz9w";
const REDIRECT_URI = "http://127.0.0.1:8000/";
const RESPONSE_TYPE = "token";
const SCOPES = [
    "bits:read",
    "channel:read:hype_train",
    "channel:read:redemptions",
    "channel:read:subscription",
    "user:read:email"].join(" ");
const URL_OAUTH = "https://id.twitch.tv/oauth2/authorize";

function encodeQueryString(params){
    let items = [];
    for(let key in params){
        let value = encodeURIComponent(params[key]);
        items.push(`${key}=>${value}`);
    }
    return items.join("&");
}

function twitchAuth(){
    const params = {
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: RESPONSE_TYPE,
        scopes: SCOPES
    };
    const url = `${URL_OAUTH}?${encodeQueryString(params)}`;
    console.log(url);
}