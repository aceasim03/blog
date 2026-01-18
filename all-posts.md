---
layout: page
title: All Posts
permalink: /all-posts/
---

<ul class="timeline">
  {% for post in site.posts %}
    <li class="timeline-item">
      <div class="timeline-dot"></div>

      <div class="timeline-meta">
        <div class="timeline-date">{{ post.date | date: "%B %d, %Y" }}</div>
        {% if post.where %}
          <div class="timeline-where">{{ post.where }}</div>
        {% endif %}
      </div>

      <div class="timeline-body">
        <a class="timeline-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>

        <div class="timeline-excerpt">
          {{ post.excerpt | strip_html | truncate: 180 }}
        </div>

        <div class="timeline-links">
          <a href="{{ post.url | relative_url }}">Read →</a>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
