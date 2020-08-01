var quotes = ['"Genius is one percent inspiration and ninety-nine percent perspiration."',
 '"You can observe a lot just by watching."',
 '"A house divided against itself cannot stand."',
 '"Difficulties increase the nearer we get to the goal."',
 '"Fate is in your hands and no one elses."',
 '"Be the chief but never the lord."',
 '"Nothing happens unless first we dream."',
 '"Well begun is half done."',
'"Life is a learning experience, only if you learn." ',
'"Self-complacency is fatal to progress."',
'"Peace comes from within. Do not seek it without."',
'"What you give is what you get."',
'"We can only learn to love by loving."',
'"Life is change. Growth is optional. Choose wisely."'
]
      function newQuote(){
        let index=Math.floor(Math.random()*quotes.length);
          document.getElementById('quoteDisplay').innerHTML = quotes [index];
        
      }