# Blogger: Part Two

![](https://media.giphy.com/media/3oD3YQKOzj8cjVoOAg/giphy.gif)

Your readers are complaining that there's no way for them to leave their opinions on your awesome blog posts. You better finish implementing that feature soon or you might have less **daily active users** on your platform!

----

##By The End of This Exercise

- The `CommentBox` component should be able to tell the `App`when to refetch comments for the `CommentList`. 

- The `CommentBox` component should clear its contents when submitted.

##Objectives

1. Make sure to get to the point we left off in class. That means, before attempting this you should get your own folder up to date, or clone down an updated version. *Remember when cloning to change the database configuration in both /db.js and /config/config.json*. 

	* You should have an app that tried to fetch comments from a route that doesn't exist(`/posts/:id/comments`) on load spawning a beautiful 404 in your javascript console. 

	* It should also submit a new comment, which shows up when the page is refreshed.  

	* It uses the hardcoded postId of 2.
    
2. Great! Time to build the first big feature. We need to implement the get route in the post controller. Remember you want the comments associated with the post's id. Here's the outline for that route:
	```JavaScript
    router.get("/:id/comments", (request, response)=>{
    	//lots of sequelize stuff.
        //make sure to respond in JSON
    })
    ```
    Resources:[Eager Loading Documentation](http://docs.sequelizejs.com/en/latest/docs/models-usage/#eager-loading)

3. **TEST WHAT YOU MADE!** You can use the following curl command or download [Postman](https://www.getpostman.com/apps). 
	```
    curl http://localhost:3000/posts/2/comments
    ```
Should return the appropriate JSON. 

4. **GUESS WHAT! MORE TESTING!** You have a working request in your react app, as well as a working route on the server side. Go ahead and check out if they work together. If they did on the first try, you're pretty amazing. If not, don't worry, get your debugging gloves out. Pro-tips:
	* Maybe the JSON is responding with the wrong object format?
    * Check the names of the attributes in the JSON being sent over.
    * **Console.log("everything")** when in doubt.

5. Everything works on load, **what about on comment submit?** Clearly you have your work cut out for you. Take a break now if you haven't already, because things are about to return to **React** land. 

6. Some things to remember:
	* Right now the *state* of comments are held in `App`.
    * The comment form exists in `CommentBox`.
    * They're both children components of `App`.
    
7. How would the comment form needs to communicate with [the comment list](https://github.com/amyhua/react-messages/blob/master/src/components/App/App.jsx) using [inverse data flow](https://facebook.github.io/react/docs/thinking-in-react.html#step-5-add-inverse-data-flow); and maybe the **hints** in this sentence would help. Make `CommentBox` use a method called fetchComments on the `App` component.

8. **TEST IT!** Add a comment to the comment box, and submit it; looking to see if it was auto-added to the comment list. Notice that we test after each iteration of the feature we're building. 

###BONUSES!

* Make the comment box clear its input box when a comment is submitted.
* Unused asynchronous calls can lead to memory leaks that can bog down a user's computer. [This](http://www.thecave.info/how-to-abort-a-previous-ajax-request-in-jquery/) blog post does a good job of highlighting this. It should be implemented in or around your `fetchComments()` function. 