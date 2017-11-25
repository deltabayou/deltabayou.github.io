---
title: Books
permalink: /books/
---

<div class="container-fluid">
	<div class="row">
		<h2>Delta Bayou Adult Mysteries</h2>
		<p>This titillating novella series follows bisexual police detective Delta Robbins as she solves undercover cases as her alter ego, Delta Bayou. Strong, passionate, and impulsive, Delta will use any means at her disposal to solve a case, even if that means bending the rules or bending over backwards.</p>
		{% for item in site.books %}
				{% if item.imgpath %}
					{% if item.series == "deltabayou" %}
					<div class="col-lg-3" style="padding:0;">
						 <p style="font-size:12px; text-align: center;padding:0 2px;"><a href="{{site.url}}{{item.permalink}}">{{item.title}}</a><br /><i>{% if item.status == "Available Now!" %} <span style="color:red;">{{item.status}}</span> {% else %}{{item.status}}{% endif %}</i></p>
						 <p style="text-align: center; padding: 0 auto;">
						 	<a href="{{site.url}}{{item.permalink}}" title="{{item.title}}"><img width="157.500px" style="text-align: center; padding: 0 auto;" src="{{site.url}}{{item.imgpath}}" alt="{{item.title}}" title="{{item.title}}" /></a>
						 </p>
						 <hr />
					</div>
					{% endif %}
				{% endif %}
			{% endfor %}
</div>
</div>