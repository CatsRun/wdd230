const input = document.createElement('#favchap');
const list = document.createElement('list');
const button = document.createElement('button');



button.addEventListener('click', () => {
    if (input.value !=''){
        const li = document.createElement('li');
        const deleteButton = document.createElement ('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.focus;
            input.value = '';
        });



    }
    else (input.focus)






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