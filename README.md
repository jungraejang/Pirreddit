# Personal Project: Reddit Clone - Project Summary

# Introduction:
Reddit is a popular social news aggregation and discussion website where users can share latest news, memes, and information in forms of posts, messages, and subreddit discussions.
Reddit's success can be attributed to its large user base, ease of use, and amount of contents posted by users covering various topics, if not unconventional time to time.

As a personal project, I want to make clone version of Reddit with similar functionalities that are within the bound my timeline and technical skills. It will include most notable features such as posts, direct messages, forum chat(or subreddit chat room), and ability to upvote or downvote a post. It will also sort posts based on user's interest and popularity of posts.

Reddit clone will be built on React/Redux for front-end, and back-end will be built using SQL and Express.

# Website Snapshots
![pic](https://lh3.googleusercontent.com/wAO3JS77-qI3nfSXVrXCQ9SXw0swrz7ldN3NLHyX7VSqh3yXygZz70r0-yXxieJRTXjuObo7wMtBlh4BBvhul5FcOI5-xTnrV08BLbuH2n8ibFo5EdU2VvoziwsIQOqM3Gx3y5gQ=w2400)

![pic](https://lh3.googleusercontent.com/4VJ8ne9nXC7XVccASIfnHuqcRLkRklfZ2ZanVmuSxN63FxIuhBy2pveB-i5rpKIUeMIGy4q3thZIFwRzsFAZLhBNqq4ejfiI_5L4O0iCCYD8ISym3JSsyCQ7BDs7YPMMlJ-6MhCC=w2400)

![pic](https://lh3.googleusercontent.com/cnr4AFjqgZ46kf72OHmXO0EASMqnHrG-MTrrO63VZRSHOGbS3PF9nnT03R33gkIf4O8LC9B8Ft7ZR4wSL1mPM35yhU26UtUc1UywHjsJeaOxigk42Jog8fOCZpPnYITU9ub486jv=w2400)

![pic](https://lh3.googleusercontent.com/XCJNawaC9TcnVrYvuLQCa_ZyQuWOmpxnK9MLCCghZM3hSlWizjGBp-hCu5TpGOwp2gQV1Z38shiNVVv2G41QKEKq5yJiLQgB4Kn8d9ydcVm_EWLrVY0vl17YfEb20Q1GpibVmnst=w2400)

# Database Schema:
POST:
- id
- poster_id USER(id)
- time_stamp
- subreddit_id SUBREDDIT(id)
- body  

USER:
- id
- username
- age
- email
- password

SUBREDDIT:
- id
- subreddit_name

CHAT:
- id
- community_id SUBREDDIT(id)
- message_body
- sender_id USER(id)
- message_id
- time_stamp

MESSAGE:
- id
- thread_id
- receipient_id USER(id)
- sender_id USER(id)
- body
- time_stamp

LIKE:
- id
- liker_id USER(id)
- like_type
- post_id POST(id)
- comment_id COMMENT(id)
- time_stamp

COMMENT:
- id
- body
- commenter_id USER(id)
- post_id POST(id)

SUBSCRIPTION:
- user_id USER(id)
- subreddit_id SUBREDDIT(id)
- time_stamp

# API Endpoints
POST:
- Create new post: post(api/posts)
- Get popular posts: get(api/posts/popular)
- Get popular posts in subreddit: get(api/posts/(subreddit name)/hot)
- Get all posts by user: get(api/posts/user)
- Get all posts by subreddit: get(api/r/(subreddit name))
- Get new posts: get(api/posts/new)
- Get most downvoted posts: get(api/posts/(subreddit_name)/controversial)

USER:
- Create new user: post(api/newuser)
- Delete user: delete(api/userid)
- Update user info: patch(api/userid)

SUBREDDIT/SUBSCRIPTION:
- Get list of all subreddits: get(api/subreddit/all)
- Get list of subscriptions by user: get(api/subscription/userid)
- Subscribe to a subreddit: post(api/subscription/(subreddit name)/userid)

LIKE:
- Get likes for a post: get(api/likes/postid)
- Upvote a post: post(api/likes/1/postid)
- Downvote a post: post(api/likes/-1/postid)
- Unlike a post: delete(api/likes/postid)
- Get likes for a comment: get(api/likes/commentid)
- Upvote a comment: post(api/likes/commentid)
- Downvote a comment: post(api/likes/commentid)
- Unlike a comment: delete(api/likes/commentid)

COMMENT:
- Get comments for a post: get(api/comments/postid)
- Add comment to a post: post(api/comments/postid)
- Edit a comment: patch(api/comments/postid)
- Delete a comment on a post: delete(api/comments/postid)

MESSAGE:
- Get inbox messages: get(api/messages/receipient_id)
- Get sent messages: get(api/messages/sender_id)
- Get messages in a thread: get(api/messages/thread_id)
- Compose a message: post(api/messages/thread_id)
- Delete a message: delete(api/messages/message_id)
- Delete a thread: delete(api/messages/thread_id)

CHAT:
- Get messages for a subreddit chat: get(api/(subreddit_id)/chat/messages)
- Post message for a subreddit chat: post(api/(subreddit_id)/chat/messages)

# REACT COMPONENTS:
- Navbar
  - Search
  - Nav Options
  - Message Button
  - Post Button
  - Post Display Settings
- Post
  - Post Display
  - Generate Post
  - Popular Post Display
  - Most Downvoted Post Display
  - Subreddit Specific Display
- Message
  - Message Display
  - Generate Message
  - Delete Message
- Home
  - Main Index
- Chat
  - Chat Message Display
  - Generate Chat Message
- Comment
  - Add a Comment
  - Delete a Comment
  - Upvote a Comment
  - Downvote a Comment
- Like
  - Post Like
- Subscription
  - Subscription to Subreddit
