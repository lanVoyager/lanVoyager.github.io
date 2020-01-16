---
title: Hexo-Edit Blog on Multiple Computers
tags: Hexo
categories: nerdyNotes
abbrlink: 1bde756e
date: 2020-01-14 11:51:05
---

Procrastination...I admit that I was back to my sweet home last year to be exact at midnight December 24, 2019 after 4+ months adventure in South America. Then I was on real do-nothing vacation first for couple of days followed by researching and planning my next Africa trip. Finally, I am back to update my blog...still before I can do that, I need to move the work to my desktop. Hopefully, this works. Let's check out the first push from the desk top!

<!-- more -->

# The Need for Working on Multiple PCs

You may say I am listing the excuses for not updating my blog in real-time during my travel. However, it was really difficult to find time between all the extreme hiking trails,  planning for my next stop, a decent table to put my laptop and most important WIFI connections many times.  Even if all the above conditions were met, I was just exhausted but to lay on my bed to have some rests...

Now I am back to home for a short break. Before my next adventure to Africa, I am determined to complete my travel trajectories in South America. Yes, step one is to find myself a better working environment which is a good computer desk with large monitor and a decent hard disk storage space! Dear friend, one suggestion, do be allured by cheaper price for a small SDD drive, you may pay higher price later. I was stupid for that to order my ultra book with only 128G several years ago. What I was thinking about?! What's worse is the monster Windows 10, it has system update all the time and requires 10+ G for that?! Enough! I am moving to my desktop for Hexo blog.

# Implementation 

Long story in short, I prepared my desktop so that I can publish Hexo blog from my desktop. 

**Step 1: Add Branch to Your Blog Repository**  

On the local PC, in my case, my Dell laptop, go to the blog folder and Git Bash there and do the following:

```
# Blog Initialization
$ git init  
# Add new branch (name: backup)
$ git checkout -b backup  
# add files in the working directory to the staging area
$ git add .  
# commit your files
$ git commit -m "commit message"  
# add remote repository
$ git remote set-url https://github.com/yourname/yourname.github.io.git
# push the local to remote
$ git push origin backup
```

**Step 2: Prepare New PC**

On the new computer, i.e. my desktop do the following:

2.1 Install Git

2.2 Install Nodejs

2.3 Prepare the Blog

- ​      Create a new folder for hexoBlog 
- ​      Git Bash and do the following:

```
# clone hexo blog branch to this working folder
$ git clone -b backup https://github.com/yourname/yourname.github.io.git
# enter yourname.github.io folder
$ cd yourname.github.io
# install hexo
$ npm install hexo --save
# install hexo command mode
$ npm install hexo-cli -g
# install all dependencies (according to package.json, this will automatically install previously installed dependencies)
$ npm install
```

2.4 Add SSH Key

```
# Generate SSH key
$ ssh-keygen -t rsa -C "youremail@example.com"
```

Then go to the .ssh folder (default: C:\\Users\\yourUserName\\.ssh), open "id_rsa.pub" and copy all the contents in this file.

Now go to Github.com and log in. Under 'Settings'\\'SSH and GPG keys' add the SSH key (the contents copied from id_rsa.pub)

2.5 Add Remote Repository

```
$ git remote set-url  https://github.com/yourname/yourname.github.io.git
```

2.6 Add your theme

In this case, my theme is `next`(https://github.com/theme-next/hexo-theme-next)

```
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

2.7 Test it out

```
$ hexo clean
$ hexo g -d
```

2.8 Push anything new to the backup branch

```
$ git add .
$ git commit -m "commit-message"
$ git push origin backup
```

The reference link is here:

https://liziczh.com/hexo-multimachine.html

# Issues

As always, there are some issues every time I implement something here :{

## Issue 1: git push failed

As listed in 2.8, I want to push my new posts to the repository branch, using `git push origin backup`, ended up with fatal error no repository found...

Reason: I am using SSH key

Solution: set-url differently

```
$ git remote set-url origin git@github.com:yourName/yourName.github.io.git
```

## Issue 2:  All custom theme lost

For some reasons, when I push local hexoBlog folder from my laptop, the `themes` folder was not pushed. That is why I need to install the theme again. However, I made several custom changes to this theme which were all lost...

Simple Solution: copy the entire `themes/next` folder to desktop. 

Yes, there are several approaches to push the themes folder to the repository. I tried some but nothing worked. To save time, just do the stupid and quick way. Otherwise, I will never get to update the real travel blog...

