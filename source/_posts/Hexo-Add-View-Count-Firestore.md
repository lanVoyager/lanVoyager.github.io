---
title: Hexo - Add View Count based on FireBase
tags: Hexo
categories: nerdyNotes
abbrlink: 2ef3ae62
date: 2019-08-14 21:24:17

---

To be dynamic, or not to be dynamic? That is the question. As a novice in this web/blog field, I even did NOT know the question exists. Static site was just chosen based on the GOOGLE search keyword ‘How to create a personal blog’ when I started this blog. As a person knows some DTA stuff, let’s add some dynamic favor to this static site using Firestore by Google Cloud!

<!-- more -->

~~Day 35 with Hexo...~~

Maiden Voyager Day 1 (08-20-2019) @Fort Lauderdale Airport. See how I like this dynamic feature! I am writing this after 8 hours air-transportation since 0:50AM today! 

The goal here is to display view counts (clicks on each of the post) in real time. How fancy, now it looks like some keywords in my dissertation. This requires dynamic, user interactive and probably a database to store the counts which are not built to [static site](https://en.wikipedia.org/wiki/Static_web_page). To add this feature, we will deploy Firestore by Goolge Cloud service. Of course, there are many other similar services. For Chinese readers, there are lots of available resources online. Just Baidu it. After so many failures and denials by Chinese websites/services, I didn’t even bother to try those.

# The Approach

Step 1: On [Firebase](https://firebase.google.com/), create an account and a new project.

<img src='https://drive.google.com/uc?export=download&id=1Xta3itrjiiTeeono-WJz6k7u28lLUCnA'/>

Step 2: Create a database

<img src='https://drive.google.com/uc?export=download&id=1Y7JaKSfcDuS3HyZNC-ALUUCEjqXV4Z8r'/>

Step 3: modify `.\themes\next\\_config.yml`

```yaml
firestore:
  enable: true
  collection: yourDatabaseName # Required, a string collection name to access firestore database
  apiKey: seePic # Required
  projectId: seePic # Required
  bluebird: false # Enable this if you want to include bluebird 3.5.1 (core version) Promise polyfill
```

<img src='https://drive.google.com/uc?export=download&id=1ugehD7bSPqvJCfSrm2eF5_KJHRkP4RKd'/>

<img src='https://drive.google.com/uc?export=download&id=1LvyDVOUBD6IzNCo7oCugmvA38qW036Wp'/>

Step 4: Go back to Firebase console, enter **Rules** in **Database** section and slightly modify the code, and then **Publish** it.



<img src='https://drive.google.com/uc?export=download&id=1kg2YYcmpopzNeXlmqj4EZdH1h1o3rGqU'/>

Note: [Hexo NexT](https://github.com/theme-next) theme version should be above `v5.1.3`, otherwise you may encounter the issue that count numbers appear on index page. [Bug#1984](https://github.com/iissnan/hexo-theme-next/pull/1984) is fixed [here](https://github.com/iissnan/hexo-theme-next/commit/3d4cccd048fd95bd7b5b10ac51c9180ea5341721).

Step 5: Deploy and you will find view icon with ‘view count’ in real time on your blog. Also, you can check the database in Firebase to for the real-time count data. As Lan being in the ‘static world’, this feature is REALLY COOL for the first time I implemented probably a week ago. I was very proud of myself. It was not a trivial task and I spent sometime Goolging for the solution to add view count and finally reside on Fi. The n-th time complaint, still a lot easier than the trial to connect mainland China which is still a failure as of today!<img src='https://drive.google.com/uc?export=download&id=1NQYX3wa-OLWGs04ql1npEnJj6yEhlrqS'/> 

<img src='https://drive.google.com/uc?export=download&id=1b66I5KFpDIzG7v5JJw2P4-QbkHJLRip0'/>

# Cosmetic Issue

There is a minor issue with ‘Abstract’ and ‘View Icon’.

If the [abstract](https://lanvoyager.github.io/posts/a6eb593f) was added by adding ‘description’ in the front-matter. The location of view icon in the post page (if you click ‘MORE’) will be placed after the abstract. 

<img src='https://drive.google.com/uc?export=download&id=1fV4B8Lo-gb_YD7B9mpfEsW2f2JQWTq4x'/>

To avoid this, use `<!-- more -->`  to add your abstract!