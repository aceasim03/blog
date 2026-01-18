---
layout: home
title: Home
---

<div class="front-dek">
  Essays and field notes on <strong>AI ethics</strong>, <strong>culture</strong>, and <strong>travel</strong>.
</div>

<div class="front-rule"></div>

{% assign latest = site.posts.first %}

{% if latest %}
<section class="front-section">
  <div class="front-kicker">Featured</div>

  <div class="featured-card">

{% if latest.image %}
<div class="featured-media">
  <a href="{{ latest.url | relative_url }}">
    <img class="featured-img" src="{{ latest.image | relative_url }}" alt="{{ latest.title }}">
  </a>

  {% if latest.image_caption %}
    <div class="featured-caption">{{ latest.image_caption }}</div>
  {% endif %}
</div>
{% endif %}

    <div class="featured-text">
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
</section>
{% endif %}

<section class="front-section">
  <div class="front-kicker">Latest</div>

  <ul class="front-list">
    {% for post in site.posts offset: 1 limit: 3 %}
      <li class="front-item">
        <div class="front-item-meta">
          <span class="front-item-date">{{ post.date | date: "%b %d, %Y" }}</span>
        </div>
        <a class="front-item-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div class="front-item-excerpt">
          {{ post.excerpt | strip_html | truncate: 140 }}
        </div>
      </li>
    {% endfor %}
  </ul>

  <div class="front-more">
    <a href="{{ '/all-posts/' | relative_url }}">View all posts →</a>
  </div>
</section>
