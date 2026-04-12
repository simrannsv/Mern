//Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
  //  1. filter() only "Sci-Fi" movies
  let movie=movies.filter((element)=>element.genre=="Sci-Fi")
  console.log(movie)
  //  2. map() to return:
           // "Inception (8.8)"
let mapMovie = movies.map((element) => {
    if(element.rating == 8.8) {
        return `${element.title} (${element.rating})`  
    }
})

console.log(mapMovie) 



   // 3. reduce() to find average movie rating
let avgMovieRating=movies.reduce((acc,element)=>acc+element.rating,0)
console.log(avgMovieRating)
   // 4. find() movie "Joker"

let findMovie=movies.find((element)=>element.title=="Joker")
console.log(findMovie)
   // 5. findIndex() of "Avengers"
let indexOfMovie=movies.findIndex((element)=>element.title=="Avengers")
console.log(indexOfMovie)



