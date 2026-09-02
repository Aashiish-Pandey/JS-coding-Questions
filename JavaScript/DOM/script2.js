// const div1 = document.createElement("div");

// div1.className = "alert";
// div1.id ='green'
// div1.innerHTML = `<strong>Hi there!</strong> You've read an important message. `;
// // const textElement = document.createTextNode('Hello Bro')

// document.body.append(div1);


// console.log('script2 loaded')


// create the ul list 

// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>


const createList = ()=>{
    const ul = document.createElement('ul')
    const lists =[]

    for(let i=0 ;i<5;i++) {
        let listItem = document.createElement('li')
        listItem.textContent=i
        lists.push(listItem)

    }
    return lists
}
console.log(createList())

document.body.append(...createList())