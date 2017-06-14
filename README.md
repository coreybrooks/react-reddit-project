# Week 20 HW: Reddit

### Overview /changes to readme

Today, you will re-creating a version of https://www.reddit.com.

The starting point that you have been provided allows you to go to any "subreddit" to see a page with all the posts.

ie: If you go to localhost:3000/austin, you should see a listing of all posts in your database that have the subredditid: "austin".

It will be your job to create the following functionality:

### Listing Page `http://localhost:3000/austin`

* Create a form to submit a new post to the reddit you're currently looking at.
  - `http://localhost:3000/austin/new`

* Each post that is shown on the listing page should only show the title. When you click the post, you should be taken to a "Post" page which shows details for just that page.
  - -> href: `http://localhost:3000/austin/<post_id>`

### Post `http://localhost:3000/austin/<post_id>`

* You should have a page that shows all the detauls about an individual post:
  - Title
  - Content
  - Comments

* You should add another form on this page which allows users to comment on a post.
  - `http://localhost:3000/austin/<post_id>/comment` OR create the comment form in-line on the same page.

### API

* Your API will need to support the functionality listed above. As of right now, there is a `/posts/:subredditId` route which provides all posts in a given subreddit.

* In order to make this work you will need to create the following API routes as well:

* POST `/posts/:subredditId`

  - Creates a post inside the given subredditId

* GET `/posts/:postId`

  - Does a findOne on a single post of the given ID

### Deploy

* Deploy your app to Heroku

- - -

### One More Thing

* If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2017. All Rights Reserved.
