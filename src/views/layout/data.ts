export var tabBar:any[] = [
  {
    title: '首页',
    to: {
      name: 'Home'
    },
    icon: {
      active: require('/@/assets/images/layout/home-active.png'),
      inactive: require('/@/assets/images/layout/home-inactive.png')
    }
  },
  {
    title: '发现',
    to: {
      name: 'ProductList'
    },
    icon: {
      active: require('/@/assets/images/layout/explore-active.png'),
      inactive: require('/@/assets/images/layout/explore-inactive.png')
    }
  },
  {
    title: '',
    to: {
      name: ''
    },
    icon: 'apps-o'
  },
  {
    title: '消息',
    to: {
      name: 'Cart'
    },
    icon: {
      active: require('/@/assets/images/layout/message-active.png'),
      inactive: require('/@/assets/images/layout/message-inactive.png')
    }
  },
  {
    title: '我的',
    to: {
      name: 'MyCenter'
    },
    icon: {
      active: require('/@/assets/images/layout/mine-active.png'),
      inactive: require('/@/assets/images/layout/mine-inactive.png')
    }
  }
]
