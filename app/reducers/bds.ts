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
    image: 'https://static.chotot.com.vn/mob_thumbs_app/32/3216564769.jpg',
    price: 3000000000,
    time: '27-2-2017'
  },
  {
	id: 1,
    name: 'Nha nguyen van linh',
    image: 'https://static.chotot.com.vn/mob_thumbs_app/32/3216564769.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 2,
    name: 'Nha nguyen van linh',
    image: 'https://static.chotot.com.vn/mob_thumbs_app/32/3216564769.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 3,
    name: 'Nha nguyen van linh',
    image: 'https://static.chotot.com.vn/mob_thumbs_app/32/3216564769.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 4,
    name: 'Nha nguyen van linh',
    image: 'https://static.chotot.com.vn/mob_thumbs_app/32/3216564769.jpg',
    price: 5000000000,
    time: '27-2-2017'
  },
  {
	id: 5,
    name: 'Nha nguyen van linh',
    image: 'https://static.chotot.com.vn/mob_thumbs_app/32/3216564769.jpg',
    price: 5000000000,
    time: '27-2-2017'
  }
];

export interface BdsState extends Array<Bds> { };

export function bds(state: BdsState = [], action): BdsState {
  switch (action.type) {
  	case 'LOAD_BDS':
  		let bdsArr = action.bdsArr.map(item => { return {'id': item.list_id, 'name': item.subject, 'image': item.image, 'price': item.price_string, 'time': item.date, 'account_name': item.account_name}});
  		return bdsArr;
    default:
      return state;
  }
};