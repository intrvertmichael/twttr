
![Twitter Banner](./readme-images/twitter.jpg)

# Twitter Clone
After completing [FullStackOpen](https://fullstackopen.com/en/) I wanted to work on a project to put all the backend skills that I learned to practice. I decided to work on a Twitter clone. The project began with the simple functionality, but after completing the base functions I kept adding to it.

## Technology Used
In order to create this app I used React and Redux in the front end, and Node and Express in the backend. MongoDB was used to store the information on the database from the backend.

![Entry Page](./readme-images/main-page.png)

## Entry Page
When you go on the web app the first thing you see is the list of posts from all users. The posts can be written after signing up for an account or logging in with a previous account with the buttons on the sidebar. On the bottom of the search bar is a searchfield that can be used to look for posts with a specific hashtag.

![Back End](./readme-images/back-end.png)

## Backend Authorization
The passwords are encrypted so no plain password is stored on the Database which will never be known by anyone other than the user. Once logged in a token from the Database is stored locally in order for you to stay logged in even after the page being closed or refreshed. What is really being sent back from the server is a token and the userId. The token will be used to take any actions from the website and the userId will be used to display your profile information on the appropriate places in the app.

![Entry Page](./readme-images/hashtag.png)

## Hashtags and Mentions
Hashtags are an important part of twitter. They help label posts for future reference and to group them together with other people who want to speak on the same topic. In this twttr clone when you write a post if you add a # symbol in front of it. In the same way if you add an @ symbol in front of the text the word will appear as a mention highlighting the name with the color the user uses as their profile identifier color.

## Search
On the bottom of the sidebar is a search field. Hashtags can be search with plain hashtag name or by using the # symbol infront of name. You can also search for more than one hashtag at a time. If you want to narrow your search to posts that only include those hashtags then you need to use either the & symbol or the word 'and'.

![Comments Page](./readme-images/new-comments.png)

## Comments and Likes
Every post is able to keep track of comments and likes. The likes are kept as an array that includes the user's id to let me know if the person has liked the post before. The comments are also kept as an array including the comment author's id so the appropriate user can delete their own comment.

## Compose
In order to write a tweet you must first be logged in then the compose button will appear. Compose started off as a basic text field but after adding the highlighting on the posts for hashtags and mentions I decided to add the hightlighting inside of the compose to be shown in real time as the post is being written. This way if the person you are trying to mention already exists they will be suggested for more accurate mentioning. The same will happen with the hashtags.