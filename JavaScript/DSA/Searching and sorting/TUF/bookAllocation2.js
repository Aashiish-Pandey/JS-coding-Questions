// Book Allocation problem :
// https://takeuforward.org/data-structure/allocate-minimum-number-of-pages/

// Input: books = [10, 20, 30, 40], students = 2
// Output: 60


// Approch 2 using binary search 

const books = [10, 20, 30, 40]
const students =2


const getRequiredStudents =(books ,maxPage)=>{

    let students =1
    let pageAllocatedPerStu =0

    for(let i=0;i<=books.length;i++) {
        pageAllocatedPerStu+=books[i]
        if(pageAllocatedPerStu>maxPage) {
            students++
            pageAllocatedPerStu=books[i]
        }
    }
    return students
}


const allocateBooks =(books ,students)=>{

let maxAllocated = Math.max(...books)
const totalPages = books.reduce((acc,cv)=>acc+cv)

let low = maxAllocated
let high = totalPages
let mid =-1
let result =-1

while(low<=high) {
mid = Math.floor(low+(high-low)/2)

let reqStduents = getRequiredStudents(books,mid)

if(reqStduents<students) {
    high = mid-1

} else if(reqStduents===students) {
    result = mid
    high = mid-1
} else {
    low=mid+1
}

 
}
return result;

}

console.log(allocateBooks(books,students))