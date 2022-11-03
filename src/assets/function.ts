import { CartItem } from '../redux/slices/cartSlice';
import { ClothingItems } from '../redux/slices/clothingSlice';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce(
    (sum, obj) => (obj.newprice ? obj.count * obj.newprice + sum : obj.count * obj.price + sum),
    0,
  );
};

export const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};

export const windowScroll = () => {
  return window.scrollTo(0, 0);
};

export function getImg(arr: ClothingItems[]) {
  const img: string[] = [];
  // eslint-disable-next-line array-callback-return
  arr.map((obj) => {
    img.push(obj.img);
    if (obj.img1) {
      img.push(obj.img1);
      if (obj.img2) {
        img.push(obj.img2);
        if (obj.img3) {
          img.push(obj.img3);
        }
      }
    }
  });
  return img;
}
