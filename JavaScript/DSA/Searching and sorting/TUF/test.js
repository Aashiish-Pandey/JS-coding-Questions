// Book allocation problem

const n = 5;
const students = 4;
const books = [25, 46, 28, 49, 24];

const canAllocateBooks = (maxPages, books) => {
  let studentCount = 1;
  let pageAllocated = 0;

  for (let i = 0; i < books.length; i++) {
    pageAllocated += books[i];
    if (pageAllocated > maxPages) {
      studentCount++;
      pageAllocated = books[i];
    }
  }
  return studentCount;
};

const findMaxBooksAllocated = (books, students) => {
//   books.sort((a, b) => a - b);
  let n = books.length;
  let min = Math.max(...books)
  let max = books.reduce((acc, cv) => acc + cv)

  for (let i = min; i <= max; i++) {
    let studentsRequired = canAllocateBooks(i, books);
    if (studentsRequired === students) {
      return i;
    }
  }
};

console.log(findMaxBooksAllocated(books, students));
