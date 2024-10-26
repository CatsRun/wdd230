const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
// const herolable = document.querySelector('.herolable');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});