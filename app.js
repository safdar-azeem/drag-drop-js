const boxs = document.querySelectorAll('.box');
const lists = document.querySelectorAll('.list-group li');

let dragStartIndex;

boxs.forEach((box) => {
	box.addEventListener('dragstart', (e) => {
		dragStartIndex = +e.target.closest('li').getAttribute('data-index');
	});
});

lists.forEach((element) => {
	element.addEventListener('dragover', (e) => {
		e.preventDefault();
	});

	element.addEventListener('drop', (e) => {
		const dragEndtIndex = e.currentTarget.getAttribute('data-index');

		const one = lists[dragStartIndex - 1].querySelector('.box');
		const two = lists[dragEndtIndex - 1].querySelector('.box');

		lists[dragStartIndex - 1].appendChild(two);
		lists[dragEndtIndex - 1].appendChild(one);
	});
});
