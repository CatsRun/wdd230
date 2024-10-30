const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList () || [];

chaptersArray.array.forEach(chapter => {
    displayList(chapter);
});




button.addEventListener('click', function () {
    if (input.value != '') {
        // const li = document.createElement('li');
        // const deleteButton = document.createElement('button');
        // li.textContent = input.value;
        // deleteButton.textContent = '❌';
        // li.append(deleteButton);
        // list.append(li);
        // deleteButton.addEventListener('click', function () {
        //     list.removeChild(li);
        // });
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = '';
        input.focus();

    }

    // else {
    //     input.focus();
    // }
});


