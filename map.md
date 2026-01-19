---
layout: page
title: Map
permalink: /map/
---

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div id="post-map" style="height: 520px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08);"></div>

<script>
  // Build an array of posts that have lat/lng
  const posts = [
    {% for post in site.posts %}
      {% if post.lat and post.lng %}
        {
          title: {{ post.title | jsonify }},
          url: {{ post.url | relative_url | jsonify }},
          where: {{ post.where | default: "" | jsonify }},
          date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
          lat: {{ post.lat }},
          lng: {{ post.lng }}
        },
      {% endif %}
    {% endfor %}
  ];

  // Init map
  const map = L.map("post-map", { scrollWheelZoom: false }).setView([25, 10], 2);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

  // Add markers
  const bounds = [];
  posts.forEach(p => {
    const marker = L.marker([p.lat, p.lng]).addTo(map);
    marker.bindPopup(`
      <div style="font-family: system-ui; line-height: 1.4;">
        <div style="font-weight: 700; margin-bottom: 4px;">
          <a href="${p.url}">${p.title}</a>
        </div>
        <div style="opacity: 0.85;">${p.date}${p.where ? " · " + p.where : ""}</div>
      </div>
    `);
    bounds.push([p.lat, p.lng]);
  });

  // Fit map to markers (if we have any)
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
</script>
