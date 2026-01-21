---
layout: home
title: Home
---
{% assign featured = site.posts.first %}

{% if featured and featured.image %}
<section class="hero">
  <a class="hero-link" href="{{ featured.url | relative_url }}">
    <img class="hero-img" src="{{ featured.image | relative_url }}" alt="{{ featured.title }}">
    <div class="hero-overlay">
      <div class="hero-kicker">Fragments</div>
      <div class="hero-title">{{ featured.title }}</div>
      <div class="hero-sub">
        {{ featured.date | date: "%B %d, %Y" }}{% if featured.where %} · {{ featured.where }}{% endif %}
      </div>
    </div>
  </a>
</section>
{% endif %}


<div class="front-dek">
  Essays and field notes on <strong>AI ethics</strong>, <strong>culture</strong>, and <strong>travel</strong>.
</div>

<div class="front-rule"></div>

{% assign featured = site.posts.first %}

{% if featured %}
<section class="front-section">
  <div class="front-kicker">Featured</div>

  <div class="featured-card">

    {% if featured.image %}
    <div class="featured-media">
      <a href="{{ featured.url | relative_url }}">
        <img class="featured-img" src="{{ featured.image | relative_url }}" alt="{{ featured.title }}">
      </a>

      {% if featured.image_caption %}
        <div class="featured-caption">{{ featured.image_caption }}</div>
      {% endif %}
    </div>
    {% endif %}

    <div class="featured-text">
      <h2 class="featured-title">
        <a href="{{ featured.url | relative_url }}">{{ featured.title }}</a>
      </h2>

      <div class="featured-date">{{ featured.date | date: "%B %d, %Y" }}</div>

      <p class="featured-excerpt">
        {{ featured.excerpt | strip_html | truncate: 260 }}
      </p>

      <a class="featured-link" href="{{ featured.url | relative_url }}">Read more →</a>
    </div>

  </div>
</section>
{% endif %}

<section class="front-section">
  <div class="front-kicker">More</div>

  {%- assign pick_travel = nil -%}
  {%- for post in site.posts -%}
    {%- if post.url != featured.url and post.tags contains "Travel" -%}
      {%- assign pick_travel = post -%}
      {%- break -%}
    {%- endif -%}
  {%- endfor -%}

  {%- assign pick_reflection = nil -%}
  {%- for post in site.posts -%}
    {%- if post.url != featured.url and post.url != pick_travel.url and post.tags contains "Reflection" -%}
      {%- assign pick_reflection = post -%}
      {%- break -%}
    {%- endif -%}
  {%- endfor -%}

  <ul class="front-list">

    {% if pick_travel %}
      <li class="front-item">
        <div class="front-item-meta">
          <span class="front-item-date">{{ pick_travel.date | date: "%b %d, %Y" }}</span>
          <span class="front-item-pill">Travel</span>
        </div>

        <a class="front-item-title" href="{{ pick_travel.url | relative_url }}">{{ pick_travel.title }}</a>

        <div class="front-item-excerpt">
          {{ pick_travel.excerpt | strip_html | truncate: 140 }}
        </div>
      </li>
    {% endif %}

    {% if pick_reflection %}
      <li class="front-item">
        <div class="front-item-meta">
          <span class="front-item-date">{{ pick_reflection.date | date: "%b %d, %Y" }}</span>
          <span class="front-item-pill">Reflection</span>
        </div>

        <a class="front-item-title" href="{{ pick_reflection.url | relative_url }}">{{ pick_reflection.title }}</a>

        <div class="front-item-excerpt">
          {{ pick_reflection.excerpt | strip_html | truncate: 140 }}
        </div>
      </li>
    {% endif %}

  </ul>

  <div class="front-more">
    <a href="{{ '/topics/' | relative_url }}">Browse by topic →</a>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="{{ '/all-posts/' | relative_url }}">All posts →</a>
  </div>
</section>
