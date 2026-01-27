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
    zoomControl: false,        // remove +/-
    scrollWheelZoom: false,    // no “map app” scrolling
    dragging: true,            // allow gentle dragging
    doubleClickZoom: false
  }).setView([25, 10], 2);

  // Minimal basemap (Carto Positron)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
  }).addTo(map);

  const dotIcon = L.divIcon({ className: "post-dot", iconSize: [14, 14] });

  const bounds = [];
  posts.forEach(p => {
    const m = L.marker([p.lat, p.lng], { icon: dotIcon }).addTo(map);
    m.bindPopup(`
      <div class="map-popup">
        <div class="map-popup-title"><a href="${p.url}">${p.title}</a></div>
        <div class="map-popup-meta">${p.date}${p.where ? " · " + p.where : ""}</div>
      </div>
    `);
    bounds.push([p.lat, p.lng]);
  });

  if (bounds.length) map.fitBounds(bounds, { padding: [30, 30] });
</script>
