type Film = {
  id: number,
  name: string,
  price: number,
  translateName: string,
  image: string,
  year: number,
  slogan: string,
  country: string,
  ganre: string[],
  time: string[],
}

const film: Film = {
  id: 1527,
  name: 'Мстители',
  price: 300,
  translateName: 'The Avengers',
  image: './src/base/images/avengers.jpg',
  year: 2012,
  slogan: 'Avengers Assemble!',
  country: 'США',
  ganre: ['фантастика', 'боевик', 'приключения', 'фентези'],
  time: ['./src/base/images/time.jpg', '137 мин/02:17']
}

const film1: Film = {
  id: 1538,
  name: 'Люди x',
  price: 250,
  translateName: 'The X-man',
  image: './src/base/images/x-man.jpg',
  year: 2011,
  slogan: 'Super-puper',
  country: 'США',
  ganre: ['фантастика', 'боевик', 'приключения', 'фентези'],
  time: ['./src/base/images/time.jpg', '120 мин/02:00']
}

export {film, film1}
