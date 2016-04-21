$(document).ready(function(){
	
	$("#content").append( "<h1>PORK RESTAURANT</h1>" );
	
	$("<div></div>").attr("id","wrapper").appendTo("#content"); //add wrapper to content div, for formatting tabs/img


	$("<div></div>").attr("class","tabsLeft").appendTo("#wrapper");  //creates the tabsLeft div/wrapper
			$("<div>Menu</div>").attr("id","l1").appendTo("div.tabsLeft"); // three buttons
			$("<div>About</div>").attr("id","l2").appendTo("div.tabsLeft"); 
			$("<div>Directions</div>").attr("id","l3").appendTo("div.tabsLeft"); 

	$("<img src='pork.jpg' />").appendTo("#wrapper");

	$("<div></div>").attr("class","tabsRight").appendTo("#wrapper"); // same as left but on the right
			$("<div>We Only</div>").attr("id","r1").appendTo("div.tabsRight"); 
			$("<div>Serve</div>").attr("id","r2").appendTo("div.tabsRight"); 
			$("<div>Pork</div>").attr("id","r3").appendTo("div.tabsRight"); 

	$("div").after("<p></p>"); //for space between buttons

	$("<div></div>").attr("id","wrapper2").appendTo("#content"); // the div where the text will go when a button is clicked

	$("#l1").click(function() { //here and below, listeners for button clicks, puts text in wrapper2 div below main content
		$("#wrapper2").html("<p>Crispy Pork: $12</p><p>Baked Pork: $12</p><p>Roasted Pork: $12</p><p>Fried Pork: $12</p>");
	});

	$("#l2").click(function() {
		$("#wrapper2").html("<p>We are the best PORK RESTAURANT that ever was. Our pork is the most delicious, you better believe it. Come to us, eat our pork, chew it up, and leave us a good tip.</p>");
	});

	$("#l3").click(function() {
		$("#wrapper2").html("<p>Go that way. Really fast. If something gets in your way, turn!</p>");
	});

	$("#r1").click(function() {
		$("#wrapper2").html("<p>Look, we just really like PORK. And we think you should too. PORK is nutritious, delicious, and will allow you to win all boxing matches, just like Rocky.</p>");
	});

	$("#r2").click(function() {
		$("#wrapper2").html("<p>Please just come to our restaurant. We must share this PORK.</p>");
	});

	$("#r3").click(function() {
		$("#wrapper2").html("<p>PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK PORK</p>");
	});
	
});
