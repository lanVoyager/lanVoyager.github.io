---
title: Hexo - Add Gitalk Comment
tags: Hexo
categories: nerdyNotes
abbrlink: 66a6d538
date: 2019-07-16 22:09:17
---

A simple instruction on how to add Gitalk but lengthy discussion on why I selected Gitalk and some further issues with this plugin after implementation.

<!-- more -->

# The Comment Plug-In

Today is my day 7 with Hexo. Goal is to add comment feature here. 

My requirements:

- Simple and elegant
- Easy to manage
- Allow **Anonymous** comments
- FREE

As always, let's begin with some google search to find the popular ones. 

- [Gitment](https://github.com/imsun/gitment): no maintenance anymore --> OUT
- [LiveRe](https://www.livere.com/): a Korean plug-in; it allows people to login with most popular social media account or just use email to comment. Sorry, don't like its appearance --> OUT
- [hypercomment](https://www.hypercomments.com/): it has everything I wanted but it's not a free plug-in --> OUT
- **[Gitalk](https://github.com/gitalk/gitalk)**: only problem is that it requires a Github account. --> CHOOSEN as of today
- [Valine](https://valine.js.org/en/index.html): after implemented Gitalk, checked Valine and it seems good. --> will test in the future

<span class='lanComment'> 

Updated on August 2, 2019:

- Valine: it requires to have a [LeanCloud](https://leancloud.cn/) account. Surprisingly, it accepts international phone number for account registration. However, after successfully proved I am a human via image verification more than 5 times, the website refused to send me verification code to my US number. Fine, you are OUT!
- [Disqus](https://disqus.com/): I just don't like your appearance. Sorry, OUT!

To conclude, Gitalk is the final winner here! 

</span>

# Gitalk Implementation

Step 1: Register Application on Github

https://github.com/settings/applications/new

<img src='https://www.dropbox.com/s/bsf7apqj5squnbk/token.png?raw=1'/>

Step 2: Obtain Client ID & Client Secret

<img src='https://www.dropbox.com/s/jx0sskx73342rai/clientID.png?raw=1'/>

Step 3: I created a new repo to store all the comments. You can skip this step.

Step 4: Gitalk setup

It's really easy with `next` theme. At the time of writing this post, my `next` version is v7.2.0. It comes with all the specifications for Gitalk. So there is no need to change several swig files as one would find from Google search. To implement Gitalk, one just need to change the `theme` _config.yml as follows:

```yaml
gitalk:
  enable: ture
  github_id: lanVoyager # GitHub repo owner
  repo: gitalkHexoComment # Repository name to store issues
  client_id: obtained from Step 2 # GitHub Application Client ID
  client_secret: obtained from Step 2 # GitHub Application Client Secret
  admin_user: lanVoyager # GitHub repo owner and collaborators, only these guys can initialize gitHub issues
  distraction_free_mode: true # Facebook-like distraction free mode
  language: [en, zh-CN]
```

Step 5: Blog deployment 

# Gitalk Initialization

Another issue with Gitalk after implementation?!

It require admin to initialize the comment blocks for each and every post?!?! The good news is that you only need to initialize once and then for each newly pushed post, you have to manually initialize it. Just click it and login your Github.

There is scripts available online which does initialization automatically. I have decided postpone further time & efforts investing into Gitalk. I may switch to Valine. Yes, Valine you are welcome to fail me in other ways. But not today! 

# Gitalk Comment Count in Title Block

Added on August 14, 2019

I don't like to have a pair of 'critical' eyes and being picky here. However, I just found that the comment count icon under the title block does not show ACURATE comment counts under each post with Gitalk. Yesterday, I complained about the word count estimates provided by `hexo-symbols-count-time`(here) and the very next day, another complain on inaccurate count for comments...Yes, I just can't withstand BAD data and those things made my soul itching...

Here is the problem:

<img src='https://drive.google.com/uc?export=download&id=1c3YACtDJmX7Wn_mFh5y6G6UJfXLO0Wdp'/>

## **Quick Google Results**

I maybe wrong, but it seems that at the moment (8/14/2019), Gitalk does not provide `nexT` comment counts. Basically, the two values are not linked. I believe that there is a way to correct it. However, I don't have the time to dig it out. For now, the comment count will be removed.

FYI, `nexT` v7.2.0 comment counts seem to be working with (refer to post.swig):

- facebook_comments
- disqus
- valine
- changyan

## **How to Remove Comment Icon**

This can be changed in `post.swig` (.\themes\next\layout\\_marco). Search for `if post.comments` and remove the entire block.

<span class='lanComment'>

For my own record, the backup file with the original comment block is named as post_08142019.swig.

</span>







