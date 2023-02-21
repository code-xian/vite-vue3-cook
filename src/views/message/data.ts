import moment from "moment";


export const messageList: { badge: number; description: string; avatar: any; time: string; title: string }[] = Array.from({ length: 4 }, (v, i) => {
    return {
    // @ts-ignore
        avatar:  new URL(`../../assets/images/avatar/avatar${i+1}.png`, import.meta.url).href,
        title: titleFilter(i+1),
        description: '来找你了'+i,
        time: moment().format('yyyy-MM-DD'),
        badge: i + 1
    }
})

function titleFilter(val) {
    switch (val) {
        case 1:
            return '爱丽丝';
        case 2:
            return '马丽';
        case 3:
            return '安娜';
        case 4:
            return '汤姆';
        default:
            return 'xxx'
    }
}
