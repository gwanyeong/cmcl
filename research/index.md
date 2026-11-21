---
title: Research
nav:
  order: 1
  tooltip: Research and Techniques
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

### Multi-scale modeling & simulation

Real-world materials are too complex to be described by a single modeling technique. We combine first-principles calculations, molecular dynamics, Monte Carlo sampling, and continuum models, augmented by machine learning and data informatics, into computational (virtual) experiments that bridge the atomistic and continuum levels through modeled interactions. This lets us follow physico-chemical phenomena across time and length scales.

<div class="multiscale" markdown="1">

{%
  include figure.html
  image="images/multi-scale_diagram.png"
  caption=""
  width="100%"
%}

<div class="method-ladder">
  <div class="method-row">
    <div class="method-card">
      <p class="method-name">DFT</p>
      <ul>
        <li>Electronic structure</li>
        <li>Atomic energy</li>
        <li>Reaction pathways</li>
      </ul>
    </div>
    <div class="method-card">
      <p class="method-name">MD</p>
      <ul>
        <li>Finite-temperature dynamics</li>
        <li>Diffusion / transport</li>
        <li>Phase transitions</li>
      </ul>
    </div>
    <div class="method-card">
      <p class="method-name">MC</p>
      <ul>
        <li>Statistical sampling</li>
        <li>Phase diagrams</li>
        <li>Dipole ordering</li>
      </ul>
    </div>
    <div class="method-card">
      <p class="method-name">Continuum physics</p>
      <ul>
        <li>Effective Hamiltonian</li>
        <li>Finite element modeling</li>
        <li>Microkinetic modeling</li>
      </ul>
    </div>
  </div>
  <div class="method-band">
    <p class="method-band-label">AI layer · across all scales</p>
    <p class="method-band-line"><b>Machine learning</b> · Property prediction · Feature selection · Dimensionality reduction</p>
    <p class="method-band-line"><b>Data informatics</b> · Data mining · Descriptors · Screening</p>
  </div>
</div>

</div>

{% include float.html
   clear = true
%}


### Energy materials

{% capture content %}
  {%
  include figure.html
  image="images/projects/energy_materials.jpg"
  class="framed"
  caption=""
  width="400px"
%}
{% endcapture %}

{%
  include float.html
  content=content
  flip=true
%}
In the field of energy materials, our group is dedicated to advancing the frontier of energy storage by designing core components for next-generation energy systems, such as post Li-ion batteries and supercapacitors. We employ advanced computational techniques to model complex electrochemical interfaces, focusing on the rational design of novel electrolytes, electrode materials, functional membranes, and additives. Our ultimate goal is to elucidate fundamental mechanisms to guide the development of highly stable, safe, and efficient energy storage devices tailored for future energy landscapes.

{% include float.html clear=false %}


### Catalysis

{% capture content %}
  {%
  include figure.html
  image="images/projects/catalysis.jpg"
  class="framed"
  caption=""
  width="400px"
%}
{% endcapture %}

{%
  include float.html
  content=content
  flip=false
%}

Our research in catalysis aims to advance eco-friendly energy conversion and chemical synthesis by identifying fundamental design principles for highly active, selective, and durable catalysts. By employing first-principles electronic structure calculations and data-driven informatics, we delve into the thermodynamics and kinetics at the electrochemical interface. This computational approach allows us to systematically identify active sites, elucidate intricate reaction pathways, and uncover the fundamental origins of catalytic performance, accelerating the transition from empirical discovery to the rational design of optimal catalysts. Our current research scope encompasses the chlorine evolution reaction, seawater splitting, and redox reactions for water electrolyzers and fuel cells.

{% include float.html clear=false %}

### Functional semiconductor

{% capture content %}
  {%
  include figure.html
  image="images/projects/functional_semiconductor.jpg"
  class="framed"
  caption=""
  width="400px"
%}
{% endcapture %}

{%
  include float.html
  content=content
  flip=true
%}

Driven by the demand for next-generation optoelectronics and quantum devices, our research focuses on the discovery and design of advanced functional semiconductors. By integrating first-principles calculations with physics modeling, we uncover the fundamental origins of emergent physical phenomena - encompassing novel electronic, optical, phononic, and topological properties - at the atomic level. Through these investigations, we aim to establish robust design principles that accelerate the development of functional semiconductors for advanced sensing, photonic computing and quantum information technologies.
{% include float.html clear=false %}
