import {SwiperImgType,GourmetImgType} from './type'
import food1 from '@/assets/images/swiper/food1.jpg'
import food2 from '@/assets/images/swiper/food2.jpg'
import food3 from '@/assets/images/swiper/food3.jpg'
import food4 from '@/assets/images/swiper/food4.jpg'
import avatar1 from '@/assets/images/avatar/avatar1.png'
import avatar2 from '@/assets/images/avatar/avatar2.png'
import avatar3 from '@/assets/images/avatar/avatar3.png'
import avatar4 from '@/assets/images/avatar/avatar4.png'

export const swiperImgList: SwiperImgType[] = [
  {
    id: 1,
    img: food1,
    route: 'Explore',
    title: '热干面',
    info: '劲道十足，咬都咬不动',
    avatar: avatar1,
    name: '艾莉丝'
  },
  {
    id: 2,
    img: food2,
    route: 'Message',
    title: '北京烤鸭',
    info: '老北京烤鸭，烤得就是贵',
    avatar: avatar2,
    name: '阿德利娜'
  },
  {
    id: 3,
    img: food3,
    route: 'MyCenter',
    title: '小龙虾',
    info: '宵夜必备，吃了你就停不下',
    avatar: avatar3,
    name: '艾琳'
  },
  {
    id: 4,
    img: food4,
    route: 'MyCenter',
    title: '螃蟹煲',
    info: '岳阳大闸蟹，贵到飞起',
    avatar: avatar4,
    name: '安娜'
  }
]

export const gourmetImgList: { img: string; description: string; id: number; title: string }[] = Array.from({ length: 20 }, (v, i) => {
  return {
  // @ts-ignore
    img: new URL(`../../assets/images/gourmet/gourmet${i+1}.png`, import.meta.url).href,
    id: i + 1,
    title: 'gourmet' + (i + 1),
    description: 'Sausage & Peppers Group'
  }
})
