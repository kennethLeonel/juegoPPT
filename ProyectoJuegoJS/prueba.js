gsap.registerPlugin(ScrollTrigger);
gsap.to(".logo", { duration: 2, x: 300, ease: "bounce" });
// gsap.to(".loco", { duration: 2, x: 300, ease: "bounce" });
gsap.to(".cuadro4", {
    scrollTrigger:{
        trigger: ".cuadro4",
        start : "top center",   
        end : "bottom center",
        //toggleActions: "restart pause reverse pause",
        toggleActions: "restart pause resume none",
       // markers: true,
    } ,
    x :500,
    duration: 6,
    rotation:360 ,

});
gsap.to(".cuadro3", {
    scrollTrigger:{ 
        trigger: ".cuadro3",
        start : "60px 80%",
       
        scrub: 5,
       // markers: true,
},
    x :500,
    duration: 6,
   
});
let tiempo = gsap.timeline({  scrollTrigger:{
    trigger: ".cuadro5",
    start : "top center",
    end : "top 100px",
    scrub : 6,
    markers: true,
},});
tiempo.to(".cuadro5", {
     duration: 6, x: 600, ease: "bounce" });
tiempo.to(".cuadro5", {
    backgroundColor: "red",
    // width : "800px",
     border : "10px solid black",
    duration: 6,
});
tiempo.to (".para", { 
    scrollTrigger:{
        trigger: ".para",
        start : "top center",
        end : "bottom center",
       // toggleActions: "restart pause reverse pause",
        
        pin : ".cuadro6",
        pinSpacing : true,
        scrub : 2,
        markers: true,
    } ,
    duration: 4,
    x: 50,

    // textAlign: "center", 
    fontSize: "20px",
 
    
});
tiempo.to(".loco", {
    scrollTrigger:{
        trigger: ".loco",
        start : "top center",
        end : "bottom center",
        //toggleActions: "restart pause reverse pause",
        scrub : 2,
        markers: true,
    } ,
    duration: 4,
    x :500,
    rotation:360 ,
    // width : "100px",
    // height : "100px",
    border : "10px solid black",
    boxShadow: "10px 10px 10px black",
    // scale: 2
});

