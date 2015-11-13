## Installation ##




### Populating The Database ###

The database contains data for *Services*, *Clients*, *The Team*, *Gallery*, *Blog Posts* & *Comments*.


### Adding Twitter Authentication ###
For Twitter authentication you will need to set the environment variables:

`process.env.TWITTER_CONSUMER_KEY`
`process.env.TWITTER_CONSUMER_SECRET`
`process.env.TWITTER_ACCESS_TOKEN_KEY`
`process.env.TWITTER_ACCESS_TOKEN_SECRET`

You can do this in two ways:

1. Create a file named `.env` in the root directory of the application containing:

    TWITTER_CONSUMER_KEY = *consumer key*
    TWITTER_CONSUMER_SECRET = *consumer secret*
    TWITTER_ACCESS_TOKEN_KEY = *access token key*
    TWITTER_ACCESS_TOKEN_SECRET = *access token secret*

2. Passing them as arguments when starting the server. This will be demonstrated in the next section **Starting The Server**.



### Starting The Server ###

___


## Admin API REST Routes ##


---
