## Installation ##

1. Download and install **Node.js** from [https://nodejs.org/en/download/stable/](https://nodejs.org/en/download/stable/).

2. Download and install **MongoDB** from [https://www.mongodb.org/downloads](https://www.mongodb.org/downloads).

3. Clone the Git repo by issuing the command `git clone https://github.com/jacobwarduk/burfield-dev-test.git`


Sass and JavaScript files are compiled and minified using [Grunt](http://gruntjs.com/). Details can be found in `Gruntfile.js`.

Front end resources are managed by [Bower](http://bower.io) and back end resources by [npm](https://www.npmjs.com). Details can be found in `bower.json` and `package.json`, respectively.



### Populating The Database ###

The database stores data for *Services*, *Clients*, *The Team*, *Gallery*, *Blog Posts* & *Comments*.

1. Enter the root directory of the application by issuing the command `cd burfield-dev-test
`.

2. Import the test database using the command `mongorestore -d burfield ./burfielddb`.


### Adding Twitter Authentication ###
Twitter authentication is required to display the 'latest tweets' in the footer and elsewhere around the site.

1. Create a new Twitter application at [https://apps.twitter.com](https://apps.twitter.com). If you need help, follow the instructions at [http://www.ning.com/help/?p=4955](http://www.ning.com/help/?p=4955).

2. Set the environment variables.

Create a file named `.env` in the root directory of the application containing your Twitter authentication details:

    TWITTER_CONSUMER_KEY = YourConsumerKey
    TWITTER_CONSUMER_SECRET = YourConsumerSecret
    TWITTER_ACCESS_TOKEN_KEY = YourAccessTokenKey
    TWITTER_ACCESS_TOKEN_SECRET = YourAccessTokenSecret


### Starting The Server ###

1. Enter the root directory of the application by issuing the command `cd burfield-dev-test
`.

2. Start a **MongoDB** instance in the background by issuing the command `mongod &`.

3. Start the **Node.js** web application by issuing the command `npm start`.

4. Visit [http://localhost:3000](http://:3000) in a web browser.

___


## Admin API REST Routes ##
There is no back-end interface or authentication system implemented, however the following API REST routes are available that can be used to make limited type of GET and POST requests.

All requests respond in JSON format.

### Clients ###

#### GET /clients ####

Returns a collection of all clients' data.

#### GET /clients/:id ####

Returns a single client's data specified by `:id`.

#### POST /clients ####

Adds a new client.

**Parameters**
 - name
 - logo

Example usage: `curl --data 'name=nike&logo=/img/clients/nike-logo.png' http://localhost:3000/clients`

Response: `{"_id":"5646081bf1148f3e1ac2cf7e","name":"Nike","logo":"/img/clients/nike-logo.png"}`


### Team Members ###

#### GET /team ####

Returns a collection of all team members.

#### GET /team/:id ####

Returns a single team member's details specified by `:id`.

#### POST /team ####

Adds a new team member.

**Parameters**
 - name
 - position
 - description
 - photo

Example usage: `curl --data 'name=Meg Mosley&position=Digital Marketing Director&description=Meg has funny bones and will most likely think you’re a hoot! She finds her creative inspiration everywhere and in everyone.&photo=/img/team/meg-mosley-profile.png' http://localhost:3000/team`

Response: `{"_id":"56460d0b9d1838a21c714a44","name":"Meg Mosley","position":"Digital Marketing Director","description":"Meg has funny bones and will most likely think you’re a hoot! She finds her creative inspiration everywhere and in everyone.","photo":"/img/team/meg-mosley-profile.png","__v":0}`


### Gallery ###

#### GET /gallery ####

Returns a collection of all gallery items.

#### GET /gallery/:id ####

Returns a single gallery item specified by `:id`.

#### POST /gallery ####

Adds a new gallery item.

**Parameters**
 - title
 - description
 - image


### Services ###

#### GET /services ####

Returns a collection of all services.

#### GET /services/:id ####

Returns a single service's details specified by `:id`.

#### POST ####

Adds a new service.

**Parameters**
 - title
 - excerpt
 - description
 - image


### Blog Posts ###

#### GET /posts ####

Returns a collection of all blog posts.

#### GET /posts/:id ####

Returns a single blog post specified by `:id`.

#### POST /posts ####

Adds a new blog post.

**Parameters**
 - title
 - body
 - category
 - author
 - image


### Blog Comments ###

#### GET /posts/:id/comments ####

Returns a collection of all comments for blog post specified by `:id`.

#### POST /posts/:id/comments ####

Adds a new comment to blog post specified by `:id`.

**Parameters**
 - body
 - author
 - post


---

## To Do ##

 - Make more suitable break points for responsive layout.
 - Create an authentication system and API end points.
 - Create REST API routes for `DELETE` and `PUT` HTTP requests.
 - Create a back end interface for managing content.
