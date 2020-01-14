---
title: Hexo - Add RSS
tags: Hexo
categories: nerdyNotes
abbrlink: 252dd1fe
date: 2019-07-18 20:38:29
---

Another feature for my imaginary readers :)

<!-- more -->

Day 9 with Hexo. Yes, I took a night off yesterday.

# An Intro to RSS

> **RSS** (originally **RDF Site Summary**; later, two competing approaches emerged, which used the backronyms  **Rich Site Summary** and **Really Simple Syndication** respectively) is a type of web feed which allows users and applications to access updates to websites in a standardized, computer-readable format.

Long story in short, it's sort of a 'subscription' to a website. In our case, if you hit the 'RSS' button of this blog, whenever a new post is up, you will recieve the content in your RSS reader. So the information comes to you instead of you checking for it. Wait, we are in 2019, an era of `BIG DATA, AI, MACHINE LEARNING, DEEP LEARNING` with all these fancy names. The data and storage units now come with terabyte, petabyte, exabyte, zettabyte and yottabyte. We already have all the stories/ads 'machine picked' for us from our Facebook page, WeChat app, Google Story etc. And also, I don't know you guys, I sometimes hit the 'subscribe button' & provide my shopping email account for weekly ads, which I am very regret doing this. My email acount is full of promotion emails and it's REALLY DIFICULT to unsubscribe them. First, the 'unsubcribe' link is so difficult to find in the email. Second, some websites say 'It will take about 10 business days for us to remove you from our list.' ╯﹏╰ And the worst thing is, I am still receiving them!!!

So why RSS?

- It's active selection. You choose to what to follow.
- You don't provide your email account. No spam and you don't even receive a notification email.
- Unsubcription is just a click of button. 
- Honestly, it's a new 'old' thing to me and after my quick research, it seems to be cool on my blog. I know my potential readers will be counted in bytes. It's for your convenience. 

# Add RSS to Hexo Blog

Step 1: install the RSS plugin

```
npm install hexo-generator-feed --save
```

Step 2: setup in blog _config.yml:

```yml
Plugins:
- hexo-generator-feed
feed:
  type: atom
  path: atom.xml
  limit: 20
```

For acceptable args, please refer to its github page:

https://github.com/hexojs/hexo-generator-feed

Step 3: setup in theme _config.yml:

```yaml
# hexo-generator-feed required for rss support. Leave rss as blank to use site's feed link.

# Set rss to false to disable feed link. Set rss to specific value if you have burned your feed already.

rss: /atom.xml
```

Step 4: deploy Hexo blog

The RSS icon can be found on the side navbar.

<img src='https://www.dropbox.com/s/g8d0kpqn2lneq2x/rss1.png?raw=1'  width="500" height="333"/>

# Subscription & RSS Reader

Now, we have 'RSS' feature enabled on my blog. In order to use it, you need to have some RSS reader.

For Chrome Users, I recommend [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp/related?hl=en) extension. This is what you will see when a new feed comes, pretty neat.

<img src='https://www.dropbox.com/s/5jhznejen2anogw/rss2.png?raw=1'  width="500" height="333"/>



Enjoy reading! It's a short Day 9 <o>