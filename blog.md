---
layout: default
title: Blog
permalink: /blog/
---

# Blog Yazıları

{% for post in site.posts %}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%d %B %Y" }}
      </time>
    </p>
    {% if post.description %}
      <p>{{ post.description }}</p>
    {% endif %}
  </article>
  <hr>
{% endfor %}

