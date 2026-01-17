---
layout: page
title: All Posts
permalink: /all-posts/
---

<ul class="archive-list">
  {% for post in site.posts %}
    <li class="archive-item">
      <a class="archive-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="archive-date">{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
