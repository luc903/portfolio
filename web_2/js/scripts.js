 $(document).ready(function(){ 
  
   $('#title').hide();
   $('#deslog').hide();
   $('#devlog').hide();
   $('#devlog2').hide();
   $("#title").fadeIn("slow"); 

   $('#deslink').click(function() {
    $('#deslog').show();
  });
   $('#devlink').click(function() {
    $('#devlog').show();
    $('#devlog2').show();
  });

   
   $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

   $('#javaLink').click(function() {
    var letterCount = setInterval(func, 20);
    count = -1;
    function func() {
      var text = "var sum = 0; for(var i = 0; i < 4000; i++); if(i % 3 === 0 || i % 5 === 0) { sum += i; }); console.log(sum); for(var i = 20; i <= 1e6; i++) { bool found = true; for(var e = 2; e <= 20; e++) { if(i % e != 0) { found = false; break; var text = 'say hello to Luc'; var results = []; for(i = 0; i <text.length -1; i++) {if(text[i] == name.substring(0, 1)) { results.push(name.length);";
      if(count < text.length -1){
        count += 1;
        document.getElementById('codeSec1').textContent += text[count];
        document.getElementById('codeSec2').textContent += text[count];
      }
    }

  });
 });