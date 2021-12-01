  const menuBody = document.getElementById("menu__body");
  const menuBody1 = document.getElementById("categoric");
  const menuIcon = document.getElementById("menu_icon");
 function addClass() {

   document.body.classList.toggle('_lock');
   menuBody.classList.toggle("_active");
   
   menuIcon.classList.toggle("_active");
    menuBody1.classList.toggle("_active");    }

 function remClass() {

   document.body.classList.remove('_lock');
   menuBody.classList.remove("_active");
  
   menuIcon.classList.remove("_active");
       menuBody1.classList.remove("_active");  }

   function show() {
      document.getElementById('sh').style.visibility = 'visible';
      document.getElementById('sg').style.visibility = 'hidden';
      // body...
   }
      function hide() {
      document.getElementById('sh').style.visibility = 'hidden';
      // body...
   }
      function show1() {
      document.getElementById('sg').style.visibility = 'visible';
      document.getElementById('sh').style.visibility = 'hidden';
      // body...
   }
      function hide1() {
      document.getElementById('sg').style.visibility = 'hidden';
      // body...
   }