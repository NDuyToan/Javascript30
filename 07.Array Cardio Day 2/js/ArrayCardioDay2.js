document.addEventListener("DOMContentLoaded", function () {

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19?
  const isAdutl = people.some( person => {
    const currentYear  = (new Date()).getFullYear();
    return (currentYear- person.year) >=19;
  });
  console.log(isAdutl);
  // Array.prototype.every() // all person 19?
  const allAdult = people.every(person => {
    return (new Date()).getFullYear()- person.year >= 19;
  });
  console.log(allAdult);
   // Array.prototype.find() 
   //find the comment with the ID of 823423
   const comment = comments.find( item =>item.id ===823423);
   console.log(comment);

}, false)