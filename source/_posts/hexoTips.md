---
title: hexoTips
tags: Hexo
categories: nerdyNotes
abbrlink: a6eb593f
date: 2019-07-15 21:56:58

---

This is just my study note archiving useful tricks & tips for Hexo blog development. Another boring technical post.

<!-- more -->

# Adding Abstract on The Landing Page

Goal: only post the abstract on the landing page with a link to access the full page.

**Approach 1**: Add description into the front-matter of the markdown file

```markdown
---
title: hexoTips
tags: Hexo
categories: nerdyNotes
description: This is just my study note archiving useful tricks & tips for Hexo blog development. Another boring technical post.
---
```

**Approach 2**: edit theme_config file `yourBlog\themes\themeName\_config.yml`:

```yaml
auto_excerpt:
  enable: false
  length: 150
```

The above script will show the first 150 words of your post as abstract on the landing page. The length can be changed if needed.

**Approach 3**: manually add Abstract in your post (md file) directly.

```markdown
---
title: hexoTips
tags: Hexo
categories: nerdyNotes
---

<img scr='sample.png' width = "900" height = "600" alt="sample" align=center />

Add your Abstract...

<!-- more -->

Add the body of the post...
```

# Adding Customized Blocks

Date: August 2, 2019

Goal: add comment block

<span class='lanComment'>

This is a comment block

</span>

Solution: add customerized CSS 

Step 1: add the following block in your CSS file under yourBlog/theme/next/source/css (details refer to post on [LeafLet Map](https://lanVoyager.github.io/posts/ddb3530))

```html
span.lanComment {
  display: block;
  width: 100%;
  padding: 5px;
   background-color: #FFFACD; 
}
```

Step 2: in your mark down post, use the following when a comment block is needed.

```html
<span class='lanComment'>

This is a comment block

</span>
```

# Add Centered Quotation Block

Date: August 14, 2019

Goal: add centered quotation block

{% cq %}

This is a test!

{% endcq %}



Three approaches:

```
<!-- 1. HTML Approach: directly write in Markdown -->
<blockquote class="blockquote-center">blah blah blah</blockquote>

<!-- 2. Use Tag -->
{% centerquote %}blah blah blah{% endcenterquote %}

<!-- 3. cq == centerquote -->
{% cq %} blah blah blah {% endcq %}
```

# Pin A Post at Top of the Blog

Date: August 14, 2019

Goal:Pin a post at top of the blog. Use `hexo-generator-index-pin-top`

<img src='https://drive.google.com/uc?export=download&id=1u4yGI6rII6DmTNLY9Senibm9v--_-r6-'/>

Step 1:  install the plugin

```
$ npm uninstall hexo-generator-index --save
$ npm install hexo-generator-index-pin-top --save
```

Step 2: pin the post in markdown's front-matter

```markdown
title: postName
top: true
date: 
tags:
categories:
```

Step 3: Add Pin Icon. Open`post.swig` in `/blog/themes/next/layout/_macro`, locate`<div class="post-meta"> `  div and add the following script.

```
{% if post.top %}  
	<i class="fa fa-thumb-tack"></i>  
	<font color=7D26CD>PINNED</font>  
	<span class="post-meta-divider">|</span>
{% endif %}
```

# Font Color & Size



Date: August 14, 2019

Goal: customize font color & size in a post

  <font size=12>bigger font size </font>

<font color="red"> this is a line of red text </font>

```
<font size=12 > bigger font size </font>

<font color="red"> this is a line of red t </font>

```

# Asset Hosting

Date: August 20, 2019

Goal: settle down on asset hosting sites. NOT FOR MAINLAND CHINA!!! The ones I tested are all blocked in China. The Chinese services all rejected my registrations from U.S.

## Initial Hosting Site: Dropbox

**Limitation:** 2G only and require you to install Dropbox app to get the external link. Also I need to maintain an extra account outside Google...However, in general, it’s really good for the purpose of hosting assests of this blog. I just want to consolidate resources and reduce number of accounts and apps I use.

**How to Get Extneral Link?**

Step 1: Apply for a [Dropbox](https://www.dropbox.com) account

Step 2: Install the [Dropbox App](https://www.dropbox.com/install)

Step 3: From your sync folder or the Dropbox app, choose the file, right click and select ‘Copy Link’

<img src='https://drive.google.com/uc?export=download&id=1di6O2zHzLx375H2KKPTKdfSKLidr17v3'/>

Step 4: Modify the dropbox link

```
original Link: https://www.dropbox.com/s/xxxxxx/hexo-add-view-count-firestore_1.png?dl=0
modified Link: https://www.dropbox.com/s/xxxxxx/hexo-add-view-count-firestore_1.png?raw=1
```

Step 5: embed the modified link into the markdown post 

# Current Hosting Site: Google Drive

**Reason:** personal perference and it meets all my needs at the moment with 15G space and linked to my Google account smoothly. Also, no app is required to use it.

## How to Get External Link

I believe most pepole know how to upload files to Google Drive. Let’s skip this step.

Step 1: On your Google Drive, select the file you want to use for the blog. Right click and select ‘Get shareable link’

<img src='https://drive.google.com/uc?export=download&id=1wF4sNAQrwqZXkoVl6bc6SwfOvuv1h_Gw'/>

Step 2: Modify ‘Link sharing’ properties, by clicking `More...`

<img src='https://drive.google.com/uc?export=download&id=1c2ErYYgPTStbiY5QdHQs8dzIuQbLqr4F'/>

Step 3: Select `Public on the web`

<img src='https://drive.google.com/uc?export=download&id=17oiuJ2Mm1O_d_AReiIR5L8UBlqiFytwT'/>

Step 4: Modify the link

**Original Link Copied from Google Drive:**

https://drive.google.com/file/d/<font color='red'>stringAsFileID</font>/view?usp=sharing

**Modified Link**

https://drive.google.com/uc?export=download&id=<font color='red'>copyStringAsFileIDHere</font>

Step 5: embed the modified link into the markdown post 