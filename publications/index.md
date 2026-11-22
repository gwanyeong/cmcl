---
title: Publications
nav:
  order: 4
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-book-open" %}Publications


{% assign pubs = site.data.citations | sort: "date" %}
<p class="center"><strong><span id="pub-count">{{ pubs.size }}</span> <span id="pub-scope" data-default="peer-reviewed papers since {{ pubs.first.date | date: "%Y" }}">peer-reviewed papers since {{ pubs.first.date | date: "%Y" }}</span></strong> · browse by topic:</p>


{% include tags.html tags="battery, catalysis, functional-semiconductor, functional-materials" link="publications" %}

{% include button.html icon="fa-brands fa-google" text="Full publication records" link="https://scholar.google.com/citations?user=kThOHD4AAAAJ&hl=en" %}

{% include section.html %}
## Journal Covers

<style>
  .cover-wrapper {
    width: 100%;
    overflow: hidden;
    margin: 30px 0;
  }
  .cover-scroll {
    display: flex;             /* 요소들을 가로로 배치 */
    overflow-x: auto;          /* 가로 스크롤 허용 */
    gap: 25px;                 /* 이미지 사이 간격 */
    padding: 10px 5px 20px 5px;
    scroll-snap-type: x mandatory; /* 스크롤 시 이미지 단위로 멈춤 */
    -webkit-overflow-scrolling: touch;
  }
  .cover-item {
    flex: 0 0 auto;            /* 크기가 줄어들지 않도록 고정 */
    width: 200px;              /* 커버 이미지 너비 조절 */
    scroll-snap-align: start;
    text-align: center;
  }
  /* 스크롤바 디자인 */
  .cover-scroll::-webkit-scrollbar { height: 7px; }
  .cover-scroll::-webkit-scrollbar-thumb { background: #ddd; border-radius: 10px; }
</style>

<div class="cover-wrapper">
  <div class="cover-scroll">
    <div class="cover-item">
      {% include figure.html image="images/cover/EES_2019.png" width="400px" caption="Energy Environ. Sci. 2019" link="https://doi.org/gj7d28" %}
    </div>
    <div class="cover-item">
      {% include figure.html image="images/cover/AM_2015.png" width="400px" caption="Adv. Mater. 2015" link="https://doi.org/f2x6gr" %}
    </div>
    <div class="cover-item">
      {% include figure.html image="images/cover/AEM_2020.png" width="400px" caption="Adv. Energy Mater. 2020" link="https://doi.org/ggrgrk" %}
    </div>
    <div class="cover-item">
      {% include figure.html image="images/cover/AFM_2016.png" width="400px" caption="Adv. Funct. Mater. 2016" link="https://doi.org/f3rc7q" %}
    </div>
    <div class="cover-item">
      {% include figure.html image="images/cover/NL_2019.png" width="400px" caption="Nano Lett. 2019" link="https://doi.org/hbzpq4" %}
    </div>
    <div class="cover-item">
      {% include figure.html image="images/cover/AFM_2019.png" width="400px" caption="Adv. Funct. Mater. 2019" link="https://doi.org/gfv5cf" %}
    </div>
    <div class="cover-item">
      {% include figure.html image="images/cover/Chem_Sci_2020.png" width="400px" caption="Chem. Sci. 2020" link="https://doi.org/ghm7qh" %}
    </div>
    
  </div>
</div>

{% include section.html %}
## All Publications

{% include search-box.html %}
{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}



