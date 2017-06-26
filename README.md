# Corey's React | Reddit Project

## Overview
This is a full MERN Stack application.  This is a Reddit style application that allows users to make posts about topics of their choosing.  They can created new categories and leave comments about existing posts.   

### Routing
#### Express Routes
The following requests are routed with Express and Node.js:  
* /by-subreddit/:subreddit GET route retrieves the saved documents from the posts collection in MongoDB using Mongoose.  The saved documents are returned the Main compent where they are dynamically rendered into the Listing component.
* /by-subreddit/:subreddit route saves the new post into MongoDB.
* /categories GET route returns only unique subredditId names to be rendered in the cateogories section on the main component
* comments/:subreddit/:title GET component is called when the Comments component is mounted to retreive the different titles for each categories.  The titles can then be selected to leave comments.

#### React Routes
The following paths are routed using React router methodoligy:
* /add renders the CategoryForm component as a child of the Main component to add new categories
* /listing/:subredditId renders the Listing component as a child of the Main component.  The Listing component displays the current posts for the given category, and renders the Form component to add new posts to the category.


### Components --needs updating
* Main Component:  The Main component is the React parent component, it renders the CategoryForm component when the add new category link is selected.  The Main component also renders the Listing, ListItems, and Form components as children.
* Listing Componet: The Listing component renders the ListItems and Form children components.  The Listing component uses the ListItems component to dynamically generate the unique post titles from MongoDB within a given category.
* Comment Component:  The Comment component renders the CommentItem and CommentForm components.  The  Comment component uses the CommentItems component to dynamically generate the comments for each post.  Users can leave new comments using the CommentForm component.
* Header and Footer components are rendered on each page.

This application is deployed on Heroku and can be viewed here: [coreys-reddit-react-project](https://coreys-reddit-react-project.herokuapp.com/)