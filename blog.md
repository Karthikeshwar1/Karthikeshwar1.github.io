---
layout: page
title: Blog
permalink: /blog/
---

<br>

<style>
#search-input {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-size: 1em;
}

@media (max-width: 600px) {
  #search-input {
    font-size: 1em;
    padding: 0.7em;
  }
  #search-results {
    font-size: 1em;
  }
}
</style>

<input id="search-input" placeholder="Search blogs..." style="width:100%;padding:6px;">
<ul id="search-results"></ul>
<script>

function clean(str) {
  // Remove Unicode replacement character, carriage returns, and newlines, then trim
  return str.replace(/\uFFFD/g, '').replace(/[\r\n]+/g, '').trim();
}
  
let docs = [];
fetch('/search_index.json')
  .then(r => r.json())
  .then(data => docs = data);

document.getElementById('search-input').addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  const results = docs.filter(doc =>
    doc.title.toLowerCase().includes(q) ||
    (doc.tags && doc.tags.join(' ').toLowerCase().includes(q)) ||
    doc.content.toLowerCase().includes(q)
  );
  document.getElementById('search-results').innerHTML = 
  results.slice(0,15).map(doc =>
    `<li><a href="${doc.url}">${clean(doc.title)}</a> <small>[${(doc.tags || []).join(', ')}]</small></li>`
  ).join('');
});

</script>


<br>

## Abstract & Software

- [AI in 2025 ⭐](https://karthikeshwar1.github.io/blog/2025/AI_in_2025)

- [How We The Humans Build](https://karthikeshwar1.github.io/blog/2025/How_We_The_Humans_Build)

- [Emergence and Meaning](https://karthikeshwar1.github.io/blog/2025/Emergence_and_Meaning)

- [Security Systems: The Flaw and The Ultimate Solution](https://karthikeshwar1.github.io/blog/2023/security-systems-the-flaw-and-the-ultimate-solution)

- [Software Architecture Foundations](https://karthikeshwar1.github.io/blog/2024/Software_Architecture_Foundations_1)

- [Why Different Domains Require Different Approaches](https://karthikeshwar1.github.io/blog/2023/Why%20Different%20Domains%20Require%20Different%20Approaches)

- [Truth in Myths](https://karthikeshwar1.github.io/blog/2026/Truth_in_Myths)

<details>


  <summary>More</summary>

  <br>


- [Fuzzy Settings](https://github.com/Karthikeshwar1/Karthikeshwar1.github.io/blob/main/blog/2024/Fuzzy_Settings.md)

- [Is God Dying?](https://Karthikeshwar1.github.io/blog/2024/Is_God_Dying)

- [Emotional Design - By Don Norman - Book Notes](https://karthikeshwar1.github.io/blog/2023/Emotional%20Design%20-%20By%20Don%20Norman%20-%20Book%20Notes)

- [Words Weigh](https://karthikeshwar1.github.io/blog/2024/Words_weigh)

- [AI in 2022](https://karthikeshwar1.github.io/blog/2022/AI_in_2022)

<br>

</details>

<br>


## Books

- [Books read ⭐](https://karthikeshwar1.github.io/blog/timeless/books_read)

- [Deep Medicine by Eric Topol](https://karthikeshwar1.github.io/blog/2025/Deep_Medicine)

- [The Practicing Mind by Thomas M. Sterner](https://karthikeshwar1.github.io/blog/2025/The_Practicing_Mind_by_Thomas_M_Sterner)

- [The Vital Question by Nick Lane](https://karthikeshwar1.github.io/blog/2025/The_Vital_Question_by_Nick_Lane)

- [What's the book GEB all about](https://karthikeshwar1.github.io/blog/2023/What%27s%20the%20book%20GEB%20all%20about)

<br>

## Non-blog stuff

- [Software architecture plans](https://github.com/Karthikeshwar1/Software-architectures)

- [Research papers written by me](https://github.com/Karthikeshwar1/Karthikeshwar1/tree/main/papers)

<br>

## On Healthcare

- [The Healthcare and Life Sciences Industry (A series of 6 articles)](https://karthikeshwar1.github.io/blog/2022/The%20Healthcare%20and%20Life%20Sciences%20Industry)

- [Best Medical Information Resources](https://karthikeshwar1.github.io/blog/2022/Best_Medical_Resources)

<br>


## Resources

- [Resources in Learning AI](https://Karthikeshwar1.github.io/blog/2025/Essential_Resources_in_learning_AI)

- [Essential Software For Computers](https://karthikeshwar1.github.io/blog/2021/Essential_Software_For_Computers)

- [Essential Software For Smartphones](https://karthikeshwar1.github.io/blog/2021/Essential_Software_For_Smartphones)

- [Recommended Books On Computers And Tech](https://karthikeshwar1.github.io/blog/2022/Recommended_Books_On_Computers_And_Tech)

- [Best Medical Information Resources](https://karthikeshwar1.github.io/blog/2022/Best_Medical_Resources)

<br>

<br>
