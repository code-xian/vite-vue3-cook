interface swiperImgType {
  img: string
  route: string
  id: number
}
interface gourmetImgType {
  img: string
  id: number
  title: string
}
export const swiperImgList: swiperImgType[] = [
  {
    id: 1,
    img: '/@/assets/images/swiper/food1.jpg',
    route: 'Explore'
  },
  {
    id: 2,
    img: '/@/assets/images/swiper/food2.jpg',
    route: 'Message'
  },
  {
    id: 3,
    img: '/@/assets/images/swiper/food3.jpg',
    route: 'MyCenter'
  },
  {
    id: 4,
    img: '/@/assets/images/swiper/food4.jpg',
    route: 'MyCenter'
  }
]

export const gourmetImgList: gourmetImgType[] = Array.from({ length: 20 }, (v, i) => {
  return {
    img: `/@/assets/images/gourmet/gourmet${i + 1}.png`,
    id: i + 1,
    title: 'gourmet' + (i + 1)
  }
})
