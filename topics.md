---
layout: page
title: Topics
permalink: /topics/
---

# Topics

Click on a topic to jump to all posts that use that tag.

<ul>
{% assign all_tags = site.tags | sort %}
{% for tag in all_tags %}
  <li>
    <a href="#{{ tag[0] | slugify }}">#{{ tag[0] }}</a> ({{ tag[1].size }})
  </li>
{% endfor %}
</ul>

---

{% for tag in all_tags %}
  <h2 id="{{ tag[0] | slugify }}">#{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span> — {{ post.date | date: "%Y-%m-%d" }}</span>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
