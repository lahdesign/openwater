       // init controller
var controller = new ScrollMagic.Controller();
 

// build scene top header portion
		var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1", triggerHook: '0', duration: 1200
        })
        .setTween("#animate1", 0.5, {backgroundColor: "#022B4C", scale: 1}) // trigger a TweenMax.to tween
        .setPin("#animate1")
        .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

           // init controller
var controller = new ScrollMagic.Controller();
 
        
// build scene button and blue bar
var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger2", triggerHook: '900', duration: 700
})
.setTween("#animate2", 0.5, {backgroundColor: "#008CBA"}) // trigger a TweenMax.to tween
.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);


// fadein 
var fadein_tween = TweenMax.from( '#animate3', 1, {autoAlpha:0, y: 100} );

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

// fadein 
var fadein_tween = TweenMax.from( '#animate4', 1, {autoAlpha:0, y: -100} );

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger1',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

// fadein 
var fadein_tween = TweenMax.from( '#animate5', 1, {autoAlpha:0, y: 100} );

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger2',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

// fadein 
var fadein_tween = TweenMax.from( '#animate6', 1, {autoAlpha:0, y: -100} );

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger3',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

// fadein 
var fadein_tween = TweenMax.from( '#animate7', 1, {autoAlpha:0, y: 100} );

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger4',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

// sections background color
          // init controller
          var controller = new ScrollMagic.Controller();
 
        
          // build scene button and blue bar
          var scene = new ScrollMagic.Scene({
              triggerElement: "#trigger3", triggerHook: 1000, duration: 2000
          })
          .setTween("#info", 0.5, {backgroundColor: "#051522"}) // trigger a TweenMax.to tween
          .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
          .addTo(controller);

          // fadein 
var fadein_tween = TweenMax.from( '#animate8', 1, {autoAlpha:0, y: 100} );

var controller = new ScrollMagic.Controller();

var fadein_scene = new ScrollMagic.Scene({
  triggerElement: '#fadein-trigger5',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);
          



          