---
title: Hexo - Add Customized Leaflet Map
tags: Hexo
categories: nerdyNotes
abbrlink: ddb3530
date: 2019-07-24 22:51:54
---

Tips & steps to add Leaflet map to Hexo. This also discusses how to add html file & javascript to Hexo Blog!

<!-- more -->

Day 15 with Hexo...

Lots of things have happened over the past 6 days. On July 20, 2019, I went to my first US Major League Baseball game (Diamondbacks vs Brewers). We lost the game but it was very dramatic which deserves a standalone post on it (probably, I will not write a post on it). Also, July 22, 2019, first monsoon followed by dust storm hit Phoenix. We lost the power in my neighborhood that night. NO AC and temperature was about 33C (95F).  And of course, gym, endless house cleaning & errands etc. kept me busy.



# My Initial Travel Plan to South America

I have added several places I would like to visit for my South America trip. This is just for demonstration purpose. Actually I don't have any fixed itineraries yet. Also, it only has very basic features. Hopefully, I will continue working on the javascript to add more interactive features & information on my trip.

<div class="iframe-container">
  <iframe src="https://lanVoyager.github.io/myLeafMap/index.html" allowfullscreen></iframe>
</div>

#  An Uncommon Hexo Approach

Ok, yes, Hexo has a plugin ([hexo-tag-leaflet](https://github.com/ender74/hexo-tag-leaflet)). I have to admit probably I am not smart enough to use it plus many other plugins (like the audio player which I will discuss it in another post). Fast forward to the conclusion, after hours of trail-and-error, to be accurate, mostly errors, I gave up on the plugin and decided to just use HTML & JAVASCRIPT for this map. Assume you know how that is done. This section, we will only focus on how to add the HTML & JAVASCRIPT of the map to HEXO.

Short answer is to use `iframe` to embed your HTML. Sounds simple, right? NO!!! At least, I was not the lucky person. So the long answer is the following:

Step 1: Have your leaflet map ready in HTML & Javascript. My structure for the demo map is the following:

```
|-----myLeafMap

   |----index.html

   |----main.js 

   |----geoData (where the geoJson data is stored)
```

Step 2: Put the above folder (myLeafMap) under {yourBlog}\source

Step 3: Add the iframe in the MarkDown (the post where you want to display the map)

```html
<iframe src="https://yourGithubID.github.io/myLeafMap/index.html" width="700" height="800"></iframe>
```

**Important:** include `https://` when you provide the URL for the HTML. I was lazy and omitted that since I was manually typing them. This is a bloody error which I spent hours to figure out why it was not working. 

*The issue:* 

The map will display on the landing page but if you click the post, you will encounter 404 page (resource not found).

*The reason:*

~~It's due to HEXO's dir structure. If you don't provide complete URL, it looks for the files in relative path which is  yourPost/yourGithubID.github.io/myLeafMap/index.html. However, if you follow Step 3, when you deploy, everything is under public folder. Many users reported difficulties to upload local imgages. That is mainly due to Hexo's understanding of dir structures. A common solution is to use `asset` folder (https://hexo.io/docs/asset-folders.html).~~

<span class='lanComment'>

Correction on August 1, 2019: I should not blame HEXO structure. The issue is more related to absolute path vs. relative path in HTML. If the complete URL is not provided, HTML thinks it's relative path and that's the reason why it would try to find the embedded leaflet scripts under the post folder when the post page is opened. 

</span>

*The solution:*

Tried several things and decided the best is just use your URL hosted in github as in Step 3. Just remember to include `https://`

Step 4: Deploy and Wish You Success!!!

# Further Advanced Improvements

Yes, the map is up & working. But not perfectly. We want to make the map (iframe) to be automatically re-size depends on the device your reader is using. Otherwise, it just looks ugly.

OK to do it, we will move on to a new era of HEXO. Once I succeeded this task, I believed that I have the freedom of customizing most of the items I want on this blog. Also, please check out my post on audio player there I plan to add customized JS file. With these two, we can do anything in the way we want! I believe I can say goodbye to most of the HEXO plugins very soon.

So how? The trick is to add customized CSS file for iframe, actually the iframe container. Don't challenge my knowledge in HTML. I believe we can't change iframe.

The example is based on `next` theme.

Step 1: Create a new folder say `_myCSS `under `{yourBlog}\themes\next\source\css`

Step 2: Create a new file say `newCSS.styl` and use the following code. (Refer: https://benmarshall.me/responsive-iframes/)

```stylus
.iframe-container {
  overflow: hidden;
  // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}

```

Step 3: Add the new CSS to the theme. Go to `{yourBlog}\themes\next\source\css `and open `main.styl`. Add the following:

```stylus
 // Newly Defined CSS
  @import "_myCSS/newCSS"
```

Step 4: Deploy & test it out on your PC, iPAD and/or smart phone!

# Another Step Further

Now, you understand why it took me so long to write this post...

Yes, the map (iframe) on your blog is responsive to the viewer (device). But the Leaflet map is NOT. Or at least, my initial leaflet map was not viewer responsive. I set it to fit my computer screen with fixed zoom level and center location. But your frame size changes. So you may see something like this:

<img src='https://www.dropbox.com/s/j0zfcirr1me8dmo/wrongMapZoom.png?raw=1'  width="500" height="333"/>

What we want is no matter where the blog is read, when the map is loaded it will display entire itineraries (show all geojson locations). To make this work, we will change the HTML.

Here is the official leaflet tutorial on this. It is pretty straightforward to follow. Yes, only the HEXO world is complex to me. 

https://leafletjs.com/examples/mobile/

END of this post and let's celebrate Day 16 with Hexo. Another long night of working...