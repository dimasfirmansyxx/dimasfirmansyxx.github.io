function sourcecode(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("https://github.com/dimasfirmansyxx/dimasfirmansyxx.github.io");
    return false;
  }
}
document.onkeydown = sourcecode;

$(document).ready(function(){
	$("#loading").delay(2000).fadeOut();
})


var quote = new Array(5);
quote[0] = "The programmers of tomorrow are the wizards of the future. You're going to look like you have magic powers compared to everybody else. <br> -Gaben";
quote[1] = "Everyone should know how to program a computer, because it teaches you how to think! -Steve Jobs";
quote[2] = "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. <br> -Linus Torvalds"
quote[3] = "The second stream of material that is going to come out of this project is a programming environment and a set of programming tools where we really want to focus again on the needs of the newbie. This environment is going to have to be extremely user-friendly <br> -Guido van Rossum";
quote[4] = "Truth is coming, and it cannot be stopped. <br> -Ed Snowden"
var n = Math.floor(Math.random() * 5);
