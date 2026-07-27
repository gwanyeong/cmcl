---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Meet the people who see the world through atoms and solve challenges through teamwork.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role != 'principal-investigator'" %}

{% include section.html background="images/background.jpg" dark=true %}



{% include section.html %}

{% capture content %}

{% include figure.html image="images/HJH.jpg" caption="undergraduate student<br>Hwang Jin Hyeon<br>2026.07~" %} 
{% include figure.html image="images/LYJ.jpg" caption="undergraduate student<br>Lee Yun Ju<br>2026.07~" %} 
{% include figure.html image="images/SCH.jpg" caption="undergraduate student<br>Son Chae Hyeok<br>2026.07~" %}
{% include figure.html image="images/KTW.jpg" caption="undergraduate student<br>Kim Tae Wan<br>2026.07~" %}


{% endcapture %}

{% include grid.html style="square" content=content %}
