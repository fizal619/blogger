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

	* It still uses the hardcoded postId of 2.
    
2. Great! Time to build the first big feature. We need to implement the get route in the post controller. Here's the outline for that route:
	```
    router.get("/:id/comments", (request, response)=>{
    	//lots of sequelize stuff.
        //make sure to respond in json
    })
    ```
    Resources:[Eager Loading](http://docs.sequelizejs.com/en/latest/docs/models-usage/#eager-loading) 