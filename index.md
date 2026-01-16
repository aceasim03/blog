---
layout: home
title: Home
---

Welcome — essays and field notes on **AI ethics, culture, and travel**.

{% assign latest = site.posts.first %}

{% if latest %}
<div class="featured-card">

  {% if latest.image %}
  <a href="{{ latest.url | relative_url }}">
    <img class="featured-img" src="{{ latest.image | relative_url }}" alt="{{ latest.title }}">
  </a>
  {% endif %}

  <div class="featured-text">
    <div class="featured-kicker">Latest</div>
    <h2 class="featured-title">
      <a href="{{ latest.url | relative_url }}">{{ latest.title }}</a>
    </h2>
    <div class="featured-date">{{ latest.date | date: "%B %d, %Y" }}</div>
    <p class="featured-excerpt">
      {{ latest.excerpt | strip_html | truncate: 260 }}
    </p>
    <a class="featured-link" href="{{ latest.url | relative_url }}">Read more →</a>
  </div>

</div>
{% endif %}

---

## Recent Posts
<ul class="recent-list">
  {% for post in site.posts limit: 10 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="recent-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
