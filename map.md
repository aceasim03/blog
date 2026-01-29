---
layout: page
title: Map
permalink: /map/
---

<p class="map-intro">A small atlas of where these notes were written.</p>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div id="post-map"></div>

<script>
  const posts = [
    {% for post in site.posts %}
      {% if post.lat and post.lng %}
        {
          title: {{ post.title | jsonify }},
          url: {{ post.url | relative_url | jsonify }},
          date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
          where: {{ post.where | default: "" | jsonify }},
          lat: {{ post.lat }},
          lng: {{ post.lng }}
        },
      {% endif %}
    {% endfor %}
  ];

  const map = L.map("post-map", {
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: true,
    doubleClickZoom: false,
    attributionControl: false
  }).setView([25, 10], 2);

  // Option 1: very light, almost flat basemap
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    maxZoom: 10
  }).addTo(map);

  // Minimalist red dot marker
  const dotIcon = L.divIcon({
    className: "post-dot",
    iconSize: [10, 10]
  });

  const bounds = [];
  posts.forEach(p => {
    const m = L.marker([p.lat, p.lng], { icon: dotIcon }).addTo(map);

    // click goes straight to the post
    m.on("click", () => {
      window.location.href = p.url;
    });

    // optional: simple tooltip on hover
    m.bindTooltip(
      `${p.title}${p.where ? " · " + p.where : ""}`,
      { direction: "top", offset: [0, -8], opacity: 0.9 }
    );

    bounds.push([p.lat, p.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
</script>
