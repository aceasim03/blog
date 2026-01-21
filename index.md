---
layout: home
title: Home
---

{% assign featured = site.posts.first %}

{% if featured %}
<section class="hero">
  <a class="hero-link" href="{{ featured.url | relative_url }}">

    {% if featured.image %}
      <img class="hero-img" src="{{ featured.image | relative_url }}" alt="{{ featured.title }}">
      <div class="hero-overlay">
        <div class="hero-kicker">Fragments</div>
        <div class="hero-title">{{ featured.title }}</div>
        <div class="hero-sub">
          {{ featured.date | date: "%B %d, %Y" }}{% if featured.where %} · {{ featured.where }}{% endif %}
        </div>
      </div>
    {% else %}
      <div class="hero-blank">
        <div class="hero-kicker">Fragments</div>
        <div class="hero-title">{{ featured.title }}</div>
        <div class="hero-sub">
          {{ featured.date | date: "%B %d, %Y" }}{% if featured.where %} · {{ featured.where }}{% endif %}
        </div>
        <div class="hero-cta">Read →</div>
      </div>
    {% endif %}

  </a>
</section>
{% endif %}

<div class="front-rule"></div>

<section class="front-section">
  <div class="front-kicker">More</div>

  {%- assign pick_travel = nil -%}
  {%- for post in site.posts -%}
    {%- if featured and post.url == featured.url -%}
      {%- continue -%}
    {%- endif -%}
    {%- if post.tags contains "Travel" -%}
      {%- assign pick_travel = post -%}
      {%- break -%}
    {%- endif -%}
  {%- endfor -%}

  {%- assign pick_reflection = nil -%}
  {%- for post in site.posts -%}
    {%- if featured and post.url == featured.url -%}
      {%- continue -%}
    {%- endif -%}
    {%- if pick_travel and post.url == pick_travel.url -%}
      {%- continue -%}
    {%- endif -%}
    {%- if post.tags contains "Reflection" -%}
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
    <a href="{{ '/topics/' | relative_url }}">Topics →</a>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="{{ '/all-posts/' | relative_url }}">All posts →</a>
  </div>
</section>
