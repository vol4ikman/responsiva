# Responsiva [beta]
###Open Source Responsive CSS Framework

- Simple and lightweight responsive CSS framework
- Built-in RTL support (under development [responsiva.rtl.css])
- Reset.css included

[Created by developer for users and developers =)]

####Usage

- add responsivo.css to your HTML / Template: 
```html
<link rel="stylesheet" type="text/css" href="responsiva.css">
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

####Extra helper classes

- class "end": removes "margin-bottom" after row, code example:
```html
<div class="row end"></div>
```
- class "stuck": removes columns margin (gutter), code example:
```html
<div class="row stuck">
  <div class="col-5">col-5</div>
  <div class="col-7">col-7</div>
</div>
```
- error
- warning
- success
- bold
- italic
- underline
- align-center
- align-left
- align-right
- h1
- h2
- h3
- h4
- h5
- h6


#####Notice

this version under development
