# Responsiva [version 1.0.0]

##Responsiva's updated docs & examples <a href="http://vol4ikman.github.io/responsiva/" target="_blank"><strong>HERE</strong></a>

###Open Source Responsive CSS Framework

- Simple and lightweight responsive CSS framework
- Built-in RTL support ([responsiva.rtl.css])
- Created by developers for developers
- Very clean grid system

[Created by developer for users and developers =)]

###Examples:

#####[Simple grid System]: <a href="http://vol4ikman.github.io/responsiva/responsiva-simple" target="_blank">DEMO Link</a>
#####[Simple grid RTL version]: <a href="http://vol4ikman.github.io/responsiva/responsiva-simple-rtl" target="_blank">RTL DEMO</a>
#####[Stuck grid system]: <a href="http://vol4ikman.github.io/responsiva/responsiva-stuck-grid" target="_blank">DEMO Link</a>

####Usage

- install with bower:
<pre>bower install responsiva</pre>
- install with npm:
<pre>npm install responsiva</pre>

- add responsiva.css to your HTML/Theme: 
```html
<link rel="stylesheet" type="text/css" href="responsiva.css">
```
- to add RTL support to your HTML/Theme add respondiva.rtl.css after the main responsiva.css file: 
```html
<link rel="stylesheet" type="text/css" href="responsiva.rtl.css">
```
- build your grid system (for example):
``` html
<div class="main_container">
	<div class="row">		
		<div class="col-12">col-12</div>
	</div>
	<div class="row">		
		<div class="col-6">col-6</div>
		<div class="col-6">col-6</div>
	</div>
	<div class="row">		
		<div class="col-5">col-5</div>
		<div class="col-7">col-7</div>
	</div>				
</div>
```
- example with specific mobile grid system:
```html
<div class="main_container">
	<div class="row">
		<div class="col-8 mob-6">desktop-8 mobile-6</div>
		<div class="col-4 mob-6">desktop-4 mobile-8</div>
	</div>
</div>
```
