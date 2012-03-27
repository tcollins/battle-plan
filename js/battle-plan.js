var bplan = {

	init:		function(){
					// Initialize Crafty
					Crafty.init(640, 480);
					
					Crafty.scene("main",function() {
					    Crafty.background("#ddd");
					    bplan.player = Crafty.e("2D, DOM, Color, Slide, hero1")
					         .color("red")
					         .attr({x:30, y:90, w:50, h:50});
					
  					});
  					  					
  					
  					Crafty.scene("main");
					
					
				}
}




