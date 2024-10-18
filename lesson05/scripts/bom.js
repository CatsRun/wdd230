// input.value = '';
// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('list');


// button.addEventListener('click', function() {
//     if (input.value !=''){
//         const li = document.createElement('li');
//         const deleteButton = document.createElement ('button');
//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         li.append(deleteButton);
//         list.append(li);
//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
            
//         });
//         input.focus();
//         input.value = '';
//     }
//     else {input.focus;}

//   });


const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });
        input.value = '';
        input.focus();

    }

    else {
        input.focus();
    }
});


// console.log (print)
    //   const chapter = input.value;
    // input.value = '';
    // const listItem = document.createElement('li');
    // const listText = document.createElement('span');
    // const listBtn = document.createElement('button');

    // listItem.appendChild(listText);
    // listText.textContent = chapter;
    // listItem.appendChild(listBtn);
    // listBtn.textContent = 'Delete';
    // list.appendChild(listItem);

    // listBtn.addEventListener('click', () => {
    //   list.removeChild(listItem);
    // });

    // input.focus();