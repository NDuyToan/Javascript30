document.addEventListener("DOMContentLoaded", function () {
   
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

      //Array prototype.filter()
      //1.Filter the list of inventors for those who was  born in the 1500's
      const fifteen = inventors.filter( function(inventor){
        if( inventor.year >=1500 && inventor.year <=1599)
        {
          return true;
        }
      });
      const fifteen2 = inventors.filter( inventor => (inventor.year >= 1500 && inventor.year< 1600));
      console.table(fifteen);
      console.table(fifteen2);
      //Array prototype.map()
      //2.Give us an array of the inventors firts and last name
      const fullName = inventors.map( inventor => inventor.first + " "+ inventor.last);
      const fullName2 = inventors.map( function(inventor){
        return inventor.first + " "+ inventor.last
      });
      console.log(fullName);
      console.log(fullName2);
      //Array prototype.sort()
      //3.Sort the inventors by birthday, oldest to youngest
      const ordered = inventors.sort( function(person1,person2){
        return person2.year - person1.year;
      });
      const ordered2 = inventors.sort( (a,b)=> b-a);
      console.table(ordered);
      console.table(ordered2);
      //Array prototype.reduce()
      //4. How many year did all the inventors live
      const totalYear = inventors.reduce( (total,inventor)=>total + (inventor.passed-inventor.year),0 );
      console.log(totalYear);
      //5.Sort the inventor by year live
      const oldest = inventors.sort( function(a,b){
        return   (b.passed - b.year) -(a.passed- a.year) ;
      });
      console.table(oldest);
      //6.Create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // const category = document.querySelector('.mw-category-group');
      // const links = Array.from(category.querySelectorAll('a')) ;
      // const de = links
      //           .map( link => link.textContent)
      //           .filter(streetName => streetName.includes('de'));
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const alpha = people.sort( function(person1,person2){
        
        const [P1Last,P1First] = person1.split(',');
        const [P2Last,P2First] = person2.split(',');
        return P1Last > P2Last? 1:-1;
      });
      console.log(alpha);
     // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    const transpotation = data.reduce( function( obj,item){
      if( !obj[item]){
        obj[item] =0;
      }
      obj[item]++;
      return obj;
    },{});
    console.log(transpotation);


}, false)