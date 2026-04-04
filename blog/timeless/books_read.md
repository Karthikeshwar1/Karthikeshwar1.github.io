---
---
<h1 align="center"> Books read </h1>

<link rel="stylesheet" href="{{ '/assets/css/books.css' | relative_url }}">


<br>

### Cosmos-level

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Cosmos" %}
    {% include book-card.html book=b %}
  {% endif %}
{% endfor %}
</div>

<br>

### Society-level

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Society" %}
    {% include book-card.html book=b %}
  {% endif %}
{% endfor %}
</div>

<br>

### Human-level

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Human" %}
    {% include book-card.html book=b %}
  {% endif %}
{% endfor %}
</div>

<br>

### Micro-level

---

<div class="books-grid">
{% for b in site.data.books.books %}
  {% if b.category == "Micro" %}
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

<details role="note" aria-label="Reading note" style="margin:1rem 0; border-left:3px solid #ddd; padding:0.6rem 1rem; border-radius:6px;">
  <summary style="cursor:pointer; font-weight:600; margin-bottom:0.4rem;">Algorithm for selecting what to read.</summary>
  <p style="margin:0.25rem 0 0; line-height:1.5; color:#333;">
    
    I choose the book, if one or more of these are true:
    
    1) It's a high quality book that is aligned to my goal.
    
    2) It is recommended by people I follow (friends/famous people).

    3) or it just caught my attention or something.

  </p>
</details>


<br>
