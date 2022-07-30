const container = document.querySelector('div.container');

function addFullSizeClass(target){
  removeFullSizeClass()
  target.classList.add('active');  //присваеваем класс полного размера элементу на который нажали
  backgroundImageReplacement()
}

function removeFullSizeClass() {
  let fullImg = document.querySelector('div.active'); //берем предыдущий элемент полного размера
  fullImg.classList.remove('active');  //удаляем у него тот самый класс который дает ему полный размер
}

function backgroundImageReplacement(){
  let imgBG = document.querySelector('div.active img').getAttribute('src'); //берем адресс картинки элемента full-size
  container.style.backgroundImage = `url(${imgBG})`; //присваеваем полученный адресс на бэк контэйнера
};

//делегирование
container.addEventListener('click', function (event) { //вешаем ивент на весь контэйнер
  let target = event.target.closest('.option'); //в таргет берем только элемент с классом min-size
  if(!target) return; //если не взяли то функция нечего не делает
  addFullSizeClass(target) //если взяли то вызов функции с отправлением того кто в таргете
})

backgroundImageReplacement()