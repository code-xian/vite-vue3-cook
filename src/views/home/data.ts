import {SwiperImgType,GourmetImgType} from './type'
export const swiperImgList: SwiperImgType[] = [
  {
    id: 1,
    img: '/@/assets/images/swiper/food1.jpg',
    route: 'Explore',
    title: '热干面',
    info: '劲道十足，咬都咬不动',
    avatar: '/@/assets/images/avatar/avatar1.png',
    name: '艾莉丝'
  },
  {
    id: 2,
    img: '/@/assets/images/swiper/food2.jpg',
    route: 'Message',
    title: '北京烤鸭',
    info: '老北京烤鸭，烤得就是贵',
    avatar: '/@/assets/images/avatar/avatar2.png',
    name: '阿德利娜'
  },
  {
    id: 3,
    img: '/@/assets/images/swiper/food3.jpg',
    route: 'MyCenter',
    title: '小龙虾',
    info: '宵夜必备，吃了你就停不下',
    avatar: '/@/assets/images/avatar/avatar3.png',
    name: '艾琳'
  },
  {
    id: 4,
    img: '/@/assets/images/swiper/food4.jpg',
    route: 'MyCenter',
    title: '螃蟹煲',
    info: '岳阳大闸蟹，贵到飞起',
    avatar: '/@/assets/images/avatar/avatar4.png',
    name: '安娜'
  }
]

export const gourmetImgList: GourmetImgType[] = Array.from({ length: 20 }, (v, i) => {
  return {
    img: `/@/assets/images/gourmet/gourmet${i + 1}.png`,
    id: i + 1,
    title: 'gourmet' + (i + 1),
    description: 'Sausage & Peppers Group'
  }
})
