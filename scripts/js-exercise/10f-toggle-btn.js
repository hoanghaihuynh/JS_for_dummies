 // 10c
 let testBtn = document.querySelector('.js-btn');
 let isClass = testBtn.classList.contains('js-btn');
 console.log(isClass);
 // 10d, 10e
 let gamingBtn = document.querySelector('.js-gamingBtn');
 let musicBtn = document.querySelector('.js-musicBtn');
 let techBtn = document.querySelector('.js-techBtn');
 function toggleBtn(btn) {
     if (btn.classList.contains('is-toggled') === false) {
         btn.classList.add('is-toggled');
     }
     else {
         btn.classList.remove('is-toggled');
     }
 }

 