---
title: Hexo - Add Word Count
tags: Hexo
categories: nerdyNotes
abbrlink: 3f6d8e38
date: 2019-08-13 22:43:52
---

Showing word counts and reading time initially seemed to be a fancy feature.  Easy to implement but may cause the title block a little bit too congested. Actually, tonight I also added view count via Google Firebase, which is pretty cool feature! This will be documented tomorrow night...it's getting really late or you can say early at the moment.

<!-- more -->

Day 34 with Hexo.

Goal: Add word count & reading time. **Please note, the stats displayed by the plugin is only ESTIMATES, not actual data...**

# Google Review

My current theme `nexT` version is v7.2.0 and it supports `hexo-symbols-count-time` plugin. Previously, `hexo-wordcount` was a very popular plugin for this feature. Since the theme _config.yml and post.swig have embedded hexo-symbols-count-time. This post will describe how to enable this plugin.

# Implementation

Step 1: Install plugin

```
npm install hexo-symbols-count-time --save
```

Step 2: check the theme `_config.yml` in yourBlog\themes\next\ folder

```yaml
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: true
  awl: 4
  wpm: 275
```

Step 3: if you want you can edit the `post.swig` in yourBlog\themes\next\layout\ folder. (I changed the labelForWordCountEst & labelForTimeEst)

```
{% raw %}
          {% if theme.symbols_count_time.separated_meta %}<br/>{% endif %}
          {% if config.symbols_count_time.symbols %}
            <span class="post-meta-item">
              <span class="post-meta-item-icon">
                <i class="fa fa-file-word-o"></i>
              </span>
              {% if theme.symbols_count_time.item_text_post %}
              	 <span class="post-meta-item-text">labelForWordCountEst:</span>
              {% endif %}
              <span title="{{ __('symbols_count_time.count') }}">{#
              #}{{ symbolsCount(post) }}{#
            #}</span>
            </span>
          {% endif %}

          {% if config.symbols_count_time.time %}
            <span class="post-meta-item">
              <span class="post-meta-item-icon">
                <i class="fa fa-clock-o"></i>
              </span>
              {% if theme.symbols_count_time.item_text_post %}
                 <span class="post-meta-item-text">labelForTimeEst &asymp;</span>
              {% endif %}
              <span title="{{ __('symbols_count_time.time') }}">{#
              #}{{ symbolsTime(post, theme.symbols_count_time.awl, theme.symbols_count_time.wpm, __('symbols_count_time.time_minutes')) }}{#
            #}</span>
            </span>
          {% endif %}
{% endraw %}`
```



Step 4: Deploy. You will find the word count & time estimate.

<img src='https://drive.google.com/uc?export=download&id=1b62Us98lrOQQbGX61DpThmiLidaJFG7i'/>

# Some Nerdy Complaints

According to hexo-symbols-count-time's document on github ([here](https://github.com/theme-next/hexo-symbols-count-time)). The word count is an estimated number.

```yaml
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: false
  awl: 4
  wpm: 275
  suffix: mins.
```

where,

awl: Average Word Length (chars count in word). Default: `4`. You can check this [here](https://charactercounttool.com/).

- CN ≈ `2`
- EN ≈ `5`
- RU ≈ `6`

wpm: Words Per Minute. Default: `275`. You can check this [here](https://wordcounter.net/).

- Slow ≈ `200`
- Normal ≈ `275`
- Fast ≈ `350`

**Note for Chinese users:** because in Chinese language average word length about `~1.5` and if you at most cases write posts in Chinese (without mixed English), recommended to set `awl` to `2` and `wpm` to `300`.
But if you usualy mix your posts with English, `awl` to `4` and `wpm` to `275` will be nice.

<span class='lanComment'>

Lan: I actually compared its word count with counts from WORD. The estimate on the lower side is much far off (~5 times higher than actual for words under 10). But as the actual number of words increases, the estimation error tends to decrease to an acceptable range. Or maybe my default awl=4 is not a good choice. OK, no rigorous numerical tests on this yet. If I getting too bored, I will do some tests on it. Later in another country and hopefully during the day...For the moment, we just need to know it's estimated. BTW, why counting word is difficult? I thought it's an easy task from an NON-EXPERT view. On the other hand, reading time is a tough number to get. 

</span>

OK, again I ended this post with the celebration of Day 35...I did much more than adding one plugin LAST night. Nerdy posts will be continued...