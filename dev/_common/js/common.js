import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	
	t1a: 3.3,
	t1b: 4.5	
}

const {w, h} = bannerSize




function init(){	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	return tl
}



function standard(heros){	
	const tl = init()	
	tl.from(".t1", {duration:.5, opacity:0}, "+=.5")	
	tl.to([".t1"], {duration:.3, opacity:0}, `+=${read.t1a}`)


	tl.from(".t1b", {duration:.5, opacity:0}, "+=.1")
	tl.to([".t1b", ".wedge"], {duration:.2, opacity:0}, `+=${read.t1b}`)
	tl.from(".hero", {duration:.6, opacity:0, ease:"power1.out"})
	
	// tl.from(".hero", {duration:.5, opacity:0}, "+=.1")
	
	tl.add("heros")
	tl.from(".bg-news", {duration:.8, opacity:0, ease:"power1.out"}, `"heros"`)
	if(heros){
		tl.add(heros, "heros")
	}
	
	tl.from(".tint", {duration:.5, opacity:0}, "+=.2")
	tl.from(".end", {duration:.3, opacity:0}, "+=.2")
	// tl.from([".tint", ".end"], {duration:.5, opacity:0}, "+=.2")
	
	return tl
}

function withHeros(){
	const tl = new TimelineMax()
	tl.from(".hero-0", {duration:.3, opacity:0, ease:"power1.out"}, "+=.1")
	tl.from(".hero-1", {duration:.3, opacity:0, ease:"power1.out"})
	standard(tl)
}

function b_970x250(){
	withHeros()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	withHeros()
	
}

function b_300x600(){		
	withHeros()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){
	standard()
}

function b_320x50(phoneDuration=.29){	
	withHeros()

}

function b_728x90(text1){	
	withHeros()
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin }