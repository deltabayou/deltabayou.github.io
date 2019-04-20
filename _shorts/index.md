---
title: Short Stories
permalink: /shorts/
---

<div class="container-fluid">
	<div class="row">
		{% for item in site.shorts %}
				{% if item.imgpath %}
					
					<div class="col-lg-3" style="padding:0;">
						 <p style="font-size:12px; text-align: center;padding:0 2px;"><a href="{{site.url}}{{item.permalink}}">{{item.title}}</a><br /><i>{% if item.status == "Available Now!" %} <span style="color:red;">{{item.status}}</span> {% else %}{{item.status}}{% endif %}</i></p>
						 <p style="text-align: center; padding: 0 auto;">
						 	<a href="{{site.url}}{{item.permalink}}" title="{{item.title}}"><img width="157.500px" style="text-align: center; padding: 0 auto;" src="{{site.url}}{{item.imgpath}}" alt="{{item.title}}" title="{{item.title}}" /></a>
						 </p>
						 <hr />
					</div>
					 
				{% endif %}
			{% endfor %}
</div>
</div>