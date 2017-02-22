export interface Bds {  
  id: number;
  name: string;
  image: string;
  price: number;
  time: string;
}

export const BDS_INITIAL_STATE = [
  {
    id: 0,
    name: 'Nha biet thu khu dao xanh',
    image: 'http://orig00.deviantart.net/c0e6/f/2011/278/a/9/200x200_icon__horse_by_tearsofablackwolf-d4bwnab.jpg',
    price: 3000000000,
    time: '27-2-2017'
  },
  {
	id: 1,
    name: 'Nha nguyen van linh',
    image: 'http://orig00.deviantart.net/c0e6/f/2011/278/a/9/200x200_icon__horse_by_tearsofablackwolf-d4bwnab.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 2,
    name: 'Nha nguyen van linh',
    image: 'http://orig00.deviantart.net/c0e6/f/2011/278/a/9/200x200_icon__horse_by_tearsofablackwolf-d4bwnab.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 3,
    name: 'Nha nguyen van linh',
    image: 'http://orig00.deviantart.net/c0e6/f/2011/278/a/9/200x200_icon__horse_by_tearsofablackwolf-d4bwnab.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 4,
    name: 'Nha nguyen van linh',
    image: 'http://orig00.deviantart.net/c0e6/f/2011/278/a/9/200x200_icon__horse_by_tearsofablackwolf-d4bwnab.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 5,
    name: 'Nha nguyen van linh',
    image: 'http://orig00.deviantart.net/c0e6/f/2011/278/a/9/200x200_icon__horse_by_tearsofablackwolf-d4bwnab.jpg',
    price: 5000000000,
    time: '27-2-2017'
  }
];

export interface BdsState extends Array<Bds> { };

export function bds(state: BdsState = [], action): BdsState {
  switch (action.type) {
    default:
      return state;
  }
};