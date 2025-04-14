// Book Allocation problem :
// https://takeuforward.org/data-structure/allocate-minimum-number-of-pages/

// Input: books = [10, 20, 30, 40], students = 2
// Output: 60

const books = [10, 20, 30, 40];
const students = 2;

// Approch1 Brute force Approach
const findTotalStudent = (books, maxPage) => {
  let students = 1;
  let pageAllocated = 0;

  for (let i = 0; i < books.length; i++) {
    pageAllocated += books[i];
    if (pageAllocated > maxPage) {
      students++;
      pageAllocated = books[i];
    }
  }
  return students;
};
const allocatePages = (books, students) => {
  let maxReadPage = Math.max(...books);
  let totalPages = books.reduce((acc, cv) => acc + cv);
  if (students >books.length) {
    return -1;
  }

  for (let i = maxReadPage; maxReadPage <= totalPages; i++) {
    const reqStudents = findTotalStudent(books, i);

    if (reqStudents === students) {
      return i;
    }
  }
};

console.log(allocatePages(books, students));
