---
layout: post
title: "ADDRESSING BIAS IN AI: AN ETHICAL IMPERATIVE"
date: 2023-05-12
where: "Takasaki, Japan"
lat: 36.3221
lng: 139.0034
tags: [AI Ethics]
---

We all know it, or at least, we all should know it. AI has the potential to change the world. Changing, however, means good and bad, and that's the main takeaway from what I've learned about AI. AI can improve outcomes and make processes more efficient, but as with any technology, it's not immune to bias. Bias via AI can have serious negative consequences such as perpetuating racial injustice to compromising safety and security. What do we do?

First, let me define what I mean by AI bias. Bias is the unjustified preference for or against people or things. It can depend on race, gender, economic status, ethnicity, and a multitude of things.

The AI variable comes in via biased training data, algorithms, and biased decision-making. AI can be trained on really anything, including being trained on historical discrimination which can make decisions to perpetuate discrimination.

Not only can AI bias perpetuate discrimination, it can also result in unjustified profiling, and compromise safety. An example here is the 2018 accident with a self-driving Uber that failed to recognize a pedestrian due to biased training (BBC News 2019).

This is an issue that is seen at the intersection between computer science and social science. Bias in AI is not only a technical challenge but also an ethical one as well.


We must give the ethics that are programmed into AI a second look, and to acknoleege the several ethical consideratios that must be taken into account when developing and deploying such as the following:

Fairness: Treat all equally.
Transparency: AI systems should be transparent and explainable so we know the rationale.
Accountability: Developers of AI systems should be held accountable for any negative consequences of biased decisions or actions. Many times, this is dismissed as a tech problem or an ethics problem, but it's both.
Diversity: AI development teams should be diverse so a variety of perspectives and experiences can be incorporated into the design process.

Where do we go from here? What do we need?

Diverse and representative training data: AI systems should be trained on diverse and representative datasets that reflect the real-world diversity of individuals and groups.
Fair and unbiased algorithms: Algorithms should be designed to mitigate the potential for bias and ensure fair and impartial decision-making.
Human oversight and review: AI systems should be subject to human oversight and review, to identify and correct any biases that may arise often. AI learns, and we need to learn the advantages and dangers of that skill.
Ethical guidelines and standards: Developers and operators of AI systems should adhere to ethical guidelines and standards, such as the IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems, to ensure that AI is developed and deployed ethically and responsibly (IEEE SA 2019).

Bias in AI is a critical ethical issue that must be addressed to ensure that AI is developed and deployed ethically and responsibly. By taking into account the ethical considerations for addressing bias in AI and implementing strategies to mitigate bias, we can work towards creating AI systems that are fair, transparent, and accountable, and that promote social justice and equality.


## REFERENCES:

BBC NEWS. 2019. “UBER IN FATAL CRASH HAD SAFETY FLAWS SAY US INVESTIGATORS,” NOVEMBER 6, 2019. HTTPS://WWW.BBC.COM/NEWS/BUSINESS-50312340.

IEEE SA. 2019. “THE IEEE GLOBAL INITIATIVE ON ETHICS OF AUTONOMOUS AND INTELLIGENT SYSTEMS.” SA MAIN SITE. 2019. HTTPS://STANDARDS.IEEE.ORG/INDUSTRY-CONNECTIONS/EC/AUTONOMOUS-SYSTEMS/.

 
---

{% if page.tags %}
<div class="tag-row">
  {% for tag in page.tags %}
    <a class="tag-chip" href="{{ '/topics/' | relative_url }}#{{ tag | slugify }}">#{{ tag }}</a>
  {% endfor %}
</div>
{% endif %}
