---
---
<h1 align="center"> Books read </h1>

<link rel="stylesheet" href="{{ '/assets/css/books.css' | relative_url }}">

<br>

Books I've read and recommend.

<br>



### Non-fiction

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Non-fiction" %}
    {% include book-card.html book=b %}
  {% endif %}
{% endfor %}
</div>

<br>

### Fiction

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Fiction" %}
    {% include book-card.html book=b %}
  {% endif %}
{% endfor %}
</div>

<br>

### Crux or Some Parts Only

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Crux" %}
    {% include book-card.html book=b %}
  {% endif %}
{% endfor %}
</div>

<br>

<details role="note" aria-label="Reading note" style="margin:1rem 0; border-left:3px solid #ddd; padding:0.6rem 1rem; border-radius:6px;">
  <summary style="cursor:pointer; font-weight:600; margin-bottom:0.4rem;">Note</summary>
  <p style="margin:0.25rem 0 0; line-height:1.5; color:#333;">
    This page does not imply agreement with every idea in every book listed. Thank you.
  </p>
</details>

<br>
