DROP DATABASE IF EXISTS reddit_data;
CREATE DATABASE reddit_data;

\c reddit_data;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  age INT NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  profile_url TEXT
);

CREATE TABLE subreddits (
  id SERIAL PRIMARY KEY,
  subreddit_name VARCHAR NOT NULL
);

CREATE TABLE subscriptions (
  user_id INT REFERENCES users(id),
  subreddit_id INT REFERENCES subreddits(id),
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  poster_id INT REFERENCES users(id),
  subreddit_id INT REFERENCES subreddits(id),
  body TEXT,
  title TEXT NOT NULL
);

CREATE TABLE chats (
  id SERIAL PRIMARY KEY,
  community_id INT REFERENCES subreddits(id),
  message_body TEXT NOT NULL,
  sender_id INT REFERENCES users(id),
  message_id INT REFERENCES users(id),
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  thread_id SERIAL,
  sender_id INT REFERENCES users(id),
  recipient_id INT REFERENCES users(id),
  body TEXT NOT NULL,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  commenter_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id)
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  liker_id INT REFERENCES users(id),
  like_type INT NOT NULL,
  post_id INT REFERENCES posts(id),
  comment_id INT REFERENCES comments(id),
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



BEGIN;

insert into users (username, age, email, password_digest, profile_url) values ('eweatherell0', 57, 'mthirlaway0@msu.edu', 'zavIgc9iQA', 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('alassey1', 84, 'icrowcroft1@deliciousdays.com', 'qsJRlKzx', 'http://dummyimage.com/250x250.png/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('lmoncur2', 10, 'fpedro2@state.gov', 'BZFEw5Lyv', 'http://dummyimage.com/250x250.png/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('hdukesbury3', 8, 'sshepeard3@ustream.tv', 'OX5lrniAPutN', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('bdella4', 51, 'swellbeloved4@berkeley.edu', 'S6vsBzpBR', 'http://dummyimage.com/250x250.png/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('dcastagneri5', 54, 'jwixey5@china.com.cn', 'ErcwRkR', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('imcbrearty6', 30, 'gdobrowlski6@toplist.cz', 'niKBmzJKnBN', 'http://dummyimage.com/250x250.png/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('wham7', 64, 'mfegan7@dailymotion.com', 'AEXa51', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('dheselwood8', 59, 'alankham8@sphinn.com', '72QVnoRfUm', 'http://dummyimage.com/250x250.jpg/dddddd/000000');
insert into users (username, age, email, password_digest, profile_url) values ('bberthon9', 52, 'jrevie9@nature.com', 'R2omvIujVas', 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('jdoya', 35, 'mbilbya@sogou.com', '3vhOcSPgr', 'http://dummyimage.com/250x250.png/dddddd/000000');
insert into users (username, age, email, password_digest, profile_url) values ('ahiscoeb', 95, 'rtretterb@cmu.edu', 'PlmrgKIb2yj', 'http://dummyimage.com/250x250.png/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('eoronanc', 89, 'ahealeyc@sitemeter.com', '9BVJ4UxHv', 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('jmccloyd', 35, 'cduffetd@amazon.co.jp', 'IDc9P3C', 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('rastlatte', 14, 'amcguffoge@mapy.cz', 'gDCg8OwUWr3', 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('esanbrookf', 3, 'gwyclifff@eventbrite.com', 'WVPMtPhO8', 'http://dummyimage.com/250x250.png/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('bdunwoodyg', 69, 'ebrillg@alexa.com', 'DHwgjwQaUym', 'http://dummyimage.com/250x250.png/cc0000/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('wberzonsh', 11, 'rsorrellh@dailymail.co.uk', 'pCNi5FfV8ZXq', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('mchristenei', 15, 'afeatherstoni@youtube.com', '6z5wUeouWuu', 'http://dummyimage.com/250x250.jpg/cc0000/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('lfannerj', 83, 'klarawayj@google.ca', 'JgrmZt', 'http://dummyimage.com/250x250.png/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('dgrimditchk', 82, 'bmcclaughlink@house.gov', '9MNeOhWLDBJ', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('iyashnovl', 41, 'dcasesl@gizmodo.com', 'tgs7EaNitA', 'http://dummyimage.com/250x250.png/dddddd/000000');
insert into users (username, age, email, password_digest, profile_url) values ('gshovelbottomm', 39, 'wchartresm@washingtonpost.com', 'u467H1', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('tgrinvaldsn', 44, 'jandrissn@google.com.hk', 'HdwfPf1wsz', 'http://dummyimage.com/250x250.png/5fa2dd/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('sbesemero', 58, 'ekembleyo@nih.gov', 'gHqeCyrqskG', 'http://dummyimage.com/250x250.png/dddddd/000000');
insert into users (username, age, email, password_digest, profile_url) values ('rwashtellp', 39, 'tblaineyp@odnoklassniki.ru', 'QIL3hpi3V', 'http://dummyimage.com/250x250.png/dddddd/000000');
insert into users (username, age, email, password_digest, profile_url) values ('mbarnsdaleq', 44, 'rlympenieq@state.tx.us', 'HGdV0M', 'http://dummyimage.com/250x250.jpg/ff4444/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('mhovyr', 82, 'tblunsdenr@narod.ru', 'q1wmO5u', 'http://dummyimage.com/250x250.png/dddddd/000000');
insert into users (username, age, email, password_digest, profile_url) values ('trulers', 59, 'bdibatistas@ibm.com', 'ivyzFcC5', 'http://dummyimage.com/250x250.png/cc0000/ffffff');
insert into users (username, age, email, password_digest, profile_url) values ('anovillt', 85, 'tpoachert@soundcloud.com', 'RsIn0752PQQ', 'http://dummyimage.com/250x250.png/cc0000/ffffff');

insert into subreddits (subreddit_name) values ('Assimilated');
insert into subreddits (subreddit_name) values ('dynamic');
insert into subreddits (subreddit_name) values ('User-friendly');
insert into subreddits (subreddit_name) values ('optimal');
insert into subreddits (subreddit_name) values ('archive');
insert into subreddits (subreddit_name) values ('service-desk');
insert into subreddits (subreddit_name) values ('user-facing');
insert into subreddits (subreddit_name) values ('projection');
insert into subreddits (subreddit_name) values ('ability');
insert into subreddits (subreddit_name) values ('hub');
insert into subreddits (subreddit_name) values ('infrastructure');
insert into subreddits (subreddit_name) values ('background');
insert into subreddits (subreddit_name) values ('task-force');
insert into subreddits (subreddit_name) values ('Secured');
insert into subreddits (subreddit_name) values ('Networked');

insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='1'), (SELECT id FROM subreddits WHERE id='1'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='2'), (SELECT id FROM subreddits WHERE id='2'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='3'), (SELECT id FROM subreddits WHERE id='3'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='4'), (SELECT id FROM subreddits WHERE id='4'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='5'), (SELECT id FROM subreddits WHERE id='5'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='6'), (SELECT id FROM subreddits WHERE id='6'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='7'), (SELECT id FROM subreddits WHERE id='7'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='8'), (SELECT id FROM subreddits WHERE id='8'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='9'), (SELECT id FROM subreddits WHERE id='9'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='10'), (SELECT id FROM subreddits WHERE id='10'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='11'), (SELECT id FROM subreddits WHERE id='11'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='12'), (SELECT id FROM subreddits WHERE id='12'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='13'), (SELECT id FROM subreddits WHERE id='13'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='14'), (SELECT id FROM subreddits WHERE id='14'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='15'), (SELECT id FROM subreddits WHERE id='15'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='16'), (SELECT id FROM subreddits WHERE id='1'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='17'), (SELECT id FROM subreddits WHERE id='2'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='18'), (SELECT id FROM subreddits WHERE id='3'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='19'), (SELECT id FROM subreddits WHERE id='4'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='20'), (SELECT id FROM subreddits WHERE id='5'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='21'), (SELECT id FROM subreddits WHERE id='6'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='22'), (SELECT id FROM subreddits WHERE id='7'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='23'), (SELECT id FROM subreddits WHERE id='8'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='24'), (SELECT id FROM subreddits WHERE id='9'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='25'), (SELECT id FROM subreddits WHERE id='10'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='26'), (SELECT id FROM subreddits WHERE id='11'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='27'), (SELECT id FROM subreddits WHERE id='12'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='28'), (SELECT id FROM subreddits WHERE id='13'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='29'), (SELECT id FROM subreddits WHERE id='14'));
insert into subscriptions (user_id, subreddit_id) values ((SELECT id FROM users WHERE id='30'), (SELECT id FROM subreddits WHERE id='15'));

insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='2'), (SELECT id FROM subreddits WHERE id='8'), 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Coding Cool Tips');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='1'), (SELECT id FROM subreddits WHERE id='13'), 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 'Ipsum Random Eat Sum');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='3'), (SELECT id FROM subreddits WHERE id='14'), 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 'Senatus E Populus Que Romanus');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='4'), (SELECT id FROM subreddits WHERE id='8'), 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', 'Nutella yummy as hell');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='5'), (SELECT id FROM subreddits WHERE id='12'), 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 'Life hack for devs');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='6'), (SELECT id FROM subreddits WHERE id='4'), 'Ut tellus.', 'Crazy things happening in NYC');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='7'), (SELECT id FROM subreddits WHERE id='8'), 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Westeros Dragon Conservation Movement');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='8'), (SELECT id FROM subreddits WHERE id='14'), 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'Loud Noise Cancelling Headphones found to permanently cancel noises for users');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='9'), (SELECT id FROM subreddits WHERE id='10'), 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.', 'Green Lives Matter: Ganja for Social Justice');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='10'), (SELECT id FROM subreddits WHERE id='3'), 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'Title is vague as hell');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='11'), (SELECT id FROM subreddits WHERE id='13'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Cellphones explode for a reason');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='12'), (SELECT id FROM subreddits WHERE id='7'), 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 'Trump needs to be impeached');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='13'), (SELECT id FROM subreddits WHERE id='3'), 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 'Build walls around Wall street');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='14'), (SELECT id FROM subreddits WHERE id='10'), 'Nulla justo.', 'Fortnite is dope');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='15'), (SELECT id FROM subreddits WHERE id='5'), 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 'PUBG destroyed all sales record');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='16'), (SELECT id FROM subreddits WHERE id='6'), 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Deport JRJ! He is too awesome for America');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='18'), (SELECT id FROM subreddits WHERE id='12'), 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.', 'Local Florida Man Identified');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='19'), (SELECT id FROM subreddits WHERE id='9'), 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Teenage Integalactic Aliens steal cows for fun');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='17'), (SELECT id FROM subreddits WHERE id='10'), 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 'Nutella sandwich with Mayo is the worst thing');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='21'), (SELECT id FROM subreddits WHERE id='12'), 'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 'Gordon Ramsey to create new McDonalds Menu');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='25'), (SELECT id FROM subreddits WHERE id='4'), 'Etiam faucibus cursus urna. Ut tellus.', 'How to cure weed hangover');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='14'), (SELECT id FROM subreddits WHERE id='3'), 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.', 'This will not stand, dude');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='1'), (SELECT id FROM subreddits WHERE id='2'), 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Bible verse of the day: Ezakiel 25:17');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='2'), (SELECT id FROM subreddits WHERE id='1'), 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.', 'Jarule to host JRJ Birthday Party');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='3'), (SELECT id FROM subreddits WHERE id='7'), 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Fyre Festival was a CIA conspiracy');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='4'), (SELECT id FROM subreddits WHERE id='15'), 'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Study shows Memory Foam Matresses do not improve memories');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='22'), (SELECT id FROM subreddits WHERE id='12'), 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '2Pac birth record shows he is actually a Korean');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='23'), (SELECT id FROM subreddits WHERE id='8'), 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 'CEO of Pfizer mistook Viagra for Skittles and died from over-erection');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='29'), (SELECT id FROM subreddits WHERE id='4'), 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.', 'Flushing man finds meaning of life while inhaling Cannabis but quickly forgot');
insert into posts (poster_id, subreddit_id, body, title) values ((SELECT id FROM users WHERE id='28'), (SELECT id FROM subreddits WHERE id='6'), 'Nam nulla.', 'Barney fossil found in Nickelodeon studio');

insert into comments (body, commenter_id, post_id) values ('Curabitur convallis.', (SELECT id FROM users WHERE id='1'), (SELECT id FROM posts WHERE id='1'));
insert into comments (body, commenter_id, post_id) values ('Duis ac nibh.', (SELECT id FROM users WHERE id='1'), (SELECT id FROM posts WHERE id='2'));
insert into comments (body, commenter_id, post_id) values ('Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', (SELECT id FROM users WHERE id='4'), (SELECT id FROM posts WHERE id='1'));
insert into comments (body, commenter_id, post_id) values ('Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.', (SELECT id FROM users WHERE id='3'), (SELECT id FROM posts WHERE id='1'));
insert into comments (body, commenter_id, post_id) values ('Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', (SELECT id FROM users WHERE id='1'), (SELECT id FROM posts WHERE id='3'));
insert into comments (body, commenter_id, post_id) values ('Etiam vel augue.', (SELECT id FROM users WHERE id='3'), (SELECT id FROM posts WHERE id='3'));
insert into comments (body, commenter_id, post_id) values ('Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', (SELECT id FROM users WHERE id='3'), (SELECT id FROM posts WHERE id='3'));
insert into comments (body, commenter_id, post_id) values ('Nullam molestie nibh in lectus.', (SELECT id FROM users WHERE id='5'), (SELECT id FROM posts WHERE id='2'));
insert into comments (body, commenter_id, post_id) values ('Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', (SELECT id FROM users WHERE id='6'), (SELECT id FROM posts WHERE id='6'));
insert into comments (body, commenter_id, post_id) values ('Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.', (SELECT id FROM users WHERE id='8'), (SELECT id FROM posts WHERE id='7'));
insert into comments (body, commenter_id, post_id) values ('Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', (SELECT id FROM users WHERE id='4'), (SELECT id FROM posts WHERE id='8'));
insert into comments (body, commenter_id, post_id) values ('Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', (SELECT id FROM users WHERE id='5'), (SELECT id FROM posts WHERE id='5'));
insert into comments (body, commenter_id, post_id) values ('Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', (SELECT id FROM users WHERE id='9'), (SELECT id FROM posts WHERE id='4'));
insert into comments (body, commenter_id, post_id) values ('Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', (SELECT id FROM users WHERE id='6'), (SELECT id FROM posts WHERE id='21'));
insert into comments (body, commenter_id, post_id) values ('Suspendisse potenti. Cras in purus eu magna vulputate luctus.', (SELECT id FROM users WHERE id='10'), (SELECT id FROM posts WHERE id='12'));
insert into comments (body, commenter_id, post_id) values ('Integer ac neque.', (SELECT id FROM users WHERE id='5'), (SELECT id FROM posts WHERE id='23'));
insert into comments (body, commenter_id, post_id) values ('Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', (SELECT id FROM users WHERE id='8'), (SELECT id FROM posts WHERE id='18'));
insert into comments (body, commenter_id, post_id) values ('Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', (SELECT id FROM users WHERE id='1'), (SELECT id FROM posts WHERE id='15'));
insert into comments (body, commenter_id, post_id) values ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', (SELECT id FROM users WHERE id='5'), (SELECT id FROM posts WHERE id='17'));
insert into comments (body, commenter_id, post_id) values ('Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', (SELECT id FROM users WHERE id='23'), (SELECT id FROM posts WHERE id='25'));
insert into comments (body, commenter_id, post_id) values ('Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', (SELECT id FROM users WHERE id='20'), (SELECT id FROM posts WHERE id='26'));
insert into comments (body, commenter_id, post_id) values ('Phasellus in felis. Donec semper sapien a libero.', (SELECT id FROM users WHERE id='19'), (SELECT id FROM posts WHERE id='27'));
insert into comments (body, commenter_id, post_id) values ('Curabitur convallis.', (SELECT id FROM users WHERE id='18'), (SELECT id FROM posts WHERE id='28'));
insert into comments (body, commenter_id, post_id) values ('In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', (SELECT id FROM users WHERE id='17'), (SELECT id FROM posts WHERE id='29'));
insert into comments (body, commenter_id, post_id) values ('Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', (SELECT id FROM users WHERE id='16'), (SELECT id FROM posts WHERE id='14'));
insert into comments (body, commenter_id, post_id) values ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.', (SELECT id FROM users WHERE id='15'), (SELECT id FROM posts WHERE id='13'));
insert into comments (body, commenter_id, post_id) values ('Etiam vel augue.', (SELECT id FROM users WHERE id='14'), (SELECT id FROM posts WHERE id='12'));
insert into comments (body, commenter_id, post_id) values ('Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', (SELECT id FROM users WHERE id='13'), (SELECT id FROM posts WHERE id='9'));
insert into comments (body, commenter_id, post_id) values ('Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', (SELECT id FROM users WHERE id='11'), (SELECT id FROM posts WHERE id='7'));
insert into comments (body, commenter_id, post_id) values ('Donec semper sapien a libero. Nam dui.', (SELECT id FROM users WHERE id='12'), (SELECT id FROM posts WHERE id='8'));


insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='1'), -1, (SELECT id FROM posts WHERE id='1'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='2'), 1, (SELECT id FROM posts WHERE id='1'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='3'), 1, (SELECT id FROM posts WHERE id='1'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='4'), -1, (SELECT id FROM posts WHERE id='3'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='5'), -1, (SELECT id FROM posts WHERE id='4'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='6'), -1, (SELECT id FROM posts WHERE id='5'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='7'), -1, (SELECT id FROM posts WHERE id='6'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='8'), 1, (SELECT id FROM posts WHERE id='7'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='9'), -1, (SELECT id FROM posts WHERE id='8'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='10'), 1, (SELECT id FROM posts WHERE id='9'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='11'), 1, (SELECT id FROM posts WHERE id='10'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='12'), -1, (SELECT id FROM posts WHERE id='10'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='13'), -1, (SELECT id FROM posts WHERE id='10'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='14'), 1, (SELECT id FROM posts WHERE id='1'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='15'), -1, (SELECT id FROM posts WHERE id='3'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='16'), -1, (SELECT id FROM posts WHERE id='10'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='17'), 1, (SELECT id FROM posts WHERE id='5'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='18'), 1, (SELECT id FROM posts WHERE id='7'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='19'), 1, (SELECT id FROM posts WHERE id='1'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='20'), -1, (SELECT id FROM posts WHERE id='10'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='21'), -1, (SELECT id FROM posts WHERE id='3'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='22'), 1, (SELECT id FROM posts WHERE id='5'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='23'), -1, (SELECT id FROM posts WHERE id='13'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='24'), -1, (SELECT id FROM posts WHERE id='1'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='25'), 1, (SELECT id FROM posts WHERE id='15'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='26'), -1, (SELECT id FROM posts WHERE id='16'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='27'), -1, (SELECT id FROM posts WHERE id='17'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='28'), 1, (SELECT id FROM posts WHERE id='18'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='29'), -1, (SELECT id FROM posts WHERE id='20'), NULL);
insert into likes (liker_id, like_type, post_id, comment_id) values ((SELECT id FROM users WHERE id='30'), -1, (SELECT id FROM posts WHERE id='16'), NULL);

COMMIT;
