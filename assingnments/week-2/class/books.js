class Book{
    title
    author
    pages
    isAvailable=true

  constructor(title,author,pages,isAvailable)
  {
    this.title=title
    this.author=author
    this.pages=pages
    this.isAvailable=isAvailable
  }

  borrow()
  {
    if(!this.isAvailable)
    {
       return(`${this.title}is not available`)
    }
    this.isAvailable =false;
        return `${this.title} has been borrowed`;
  }


  returnBook()
  {
    if(this.isAvailable){
      return `${this.title} is already available.`;
    }

     this.isAvailable = true;
        return `${this.title} is now available`;
  }


  getInfo()
{
    return(`${this.title} by ${this.author} has ${this.pages} pages`)
}

isLongBook()
{
    if(this.pages > 300)
    {
        return true
    }
    return false
}
}
let book1=new Book('HarryPotter','JK.Rowling',2780,true)
/*console.log(book1)
console.log(book1.borrow())
console.log(book1.getInfo())
//console.log(book1.returnBook())
console.log(book1.borrow())
console.log(book1.isLongBook())
let book2=new Book('The Hobbit','J.R.R',5780,false)
console.log(book2)
console.log(book2.borrow())
console.log(book2.getInfo())
console.log(book2.returnBook())
console.log(book2.borrow())
console.log(book2.isLongBook())*/

console.log(book1)
console.log(book1.isAvailable)
console.log(book1.borrow())
console.log(book1.isAvailable)
console.log(book1.returnBook())
console.log(book1.isAvailable)







