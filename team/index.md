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

{% include section.html %}

## Undergraduate Researchers

{% capture content %}
{% for student in site.data.undergrads %}
{% capture caption %}**{{ student.name }}**<br>Undergraduate Researcher<br>{{ student.since }} –{% endcapture %}
{% include figure.html image=student.image caption=caption %}
{% endfor %}
{% endcapture %}

{% include grid.html style="square" content=content %}
