---
title: Hexo - Add Site Map
tags: Hexo
categories: nerdyNotes
abbrlink: 9a962e6d
date: 2019-07-16 23:41:51

---

Float up to the top in Google search! Yes, only Google not Baidu the second largest search engine in the world.

<!-- more -->

# Why Sitemap

Day 7 with Hexo, another task done.

Goal: add sitemap for search engines

Why: I just realized today, to let search engines, like Google, to find your blog, you need to create a sitemap.

Lan's Complain: I failed to add my sitemap to dear Baidu.com (Chinese alternative to Google). I don't have a Baidu account and it requires Chinese phone number for registration. This is one of the hundreds trails failed during this Hexo development project. How difficult to be a Chinese aboard?! I don't mention the time wasted try different plugins and services.

# Sitemap Creation

This is the easy part. The time consuming part will follow in the next section. 

Step 1: install the plug-in 

```
npm install hexo-generator-sitemap --save
```

Step 2: setup sitemap in blog _conf.yml. Add the following:

```yaml
sitemap:
path: sitemap.xml
```

Step 3: generation

```
hexo g
```

Step 4: check `public` folder and you should see `sitemap.xml`

# Submit Sitemap to Google

Go to Google Search Console and login with your Google account. 

Step 1: Add Property

<img src='https://www.dropbox.com/s/mvn7lzh6yahwosu/site1.png?raw=1'  width="500" height="333"/>

Step 2: Verification File

Lan: here I chose `HTML Tag`

<img src='https://www.dropbox.com/s/gxen5skvfjen2bj/site2.png?raw=1'  width="500" height="333"/>

<img src='https://www.dropbox.com/s/4e0wv2a2f6grjlv/site3.png?raw=1'  width="500" height="333"/>

Step 3: Add Verification Code

Go to theme_name\layout\_partial\head\head.swig and add the HTML tag:

<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2"/>
<meta name="theme-color" content="{{ theme.android_chrome_color }}"/>
<meta name="google-site-verification" content="yourVerificatoinCodeFromStep2" />
Step 4: Deploy your Hexo blog and Google Search Console will show 

<img src='https://www.dropbox.com/s/0vqk3xf6tp73t9u/site_4.png?raw=1'  width="500" height="333"/>Step 5: Submit sitemap

<img src='https://www.dropbox.com/s/anrd7nrkky7qhpu/site5.png?raw=1'  width="500" height="333"/>

Step 6: Click URL inspection. Important: Wait Patiently! 

Lan: It took me approximately 1 hour until I saw the following picture. I did lots of research to figure out why I encountered nth failure today during this very long hour...instead I suggest you just relax and maybe go to bed. Miracle will happen tomorrow morning when you get up fresh. 

<img src='https://www.dropbox.com/s/d3o7nimeb4u21us/site6.png?raw=1'  width="500" height="333"/>

Step 7: You are on Google finally! Let me celebrate my 8th Day with Hexo...

<img src='https://www.dropbox.com/s/as4q5ql73cva5wi/site7.png?raw=1'  width="500" height="333"/>



