---
---
<h1 align="center"> Books read </h1>

<link rel="stylesheet" href="{{ '/assets/css/books.css' | relative_url }}">

<br>

<p align="center">Books I've read and recommend.</p>

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

<details role="note" aria-label="Reading note" style="margin:1rem 0; border-left:3px solid #ddd; padding:0.6rem 1rem; border-radius:6px;">
  <summary style="cursor:pointer; font-weight:600; margin-bottom:0.4rem;">Algorithm for selecting what to read.</summary>
  <p style="margin:0.25rem 0 0; line-height:1.5; color:#333;">
    
    I choose the book, if one or more of these are true:
    
    1) It's a high quality book that helps me with my goal.
    
    2) It is recommended by people I follow (friends/famous people).

    2) or it just caught my attention or something.

  </p>
</details>


<br>
