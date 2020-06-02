
<script>
import defaultClass from '@/assets/defaultClass.png';
import topic from '@/assets/topic.png';
import time from '@/assets/time.png';
export default {
    name: 'allclass',
    components: {
        
    },
    data() {
        return {
            defaultClass,
            topic,
            time,
            results: 13,
            cardData: [
                {
                    id: 1,
                    title: 'title1',
                    topics: 5,
                    content: 'content1',
                    time: 5,
                    img: ''
                },
                {
                    id: 2,
                    title: 'title2',
                    topics: 10,
                    content: 'content2',
                    time: 5,
                    img: ''
                },
                {
                    id: 2,
                    title: 'title2',
                    content: 'content2',
                    topics: 15,
                    time: 5,
                    img: `https://scontent-tpe1-1.xx.fbcdn.net/v/t1.15752-9/101595173_237761764188877_5514067787007393792_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=D8nl_qvFHqkAX8MmmRO&_nc_ht=scontent-tpe1-1.xx&oh=8c9a645782af594cbf5d2e4cb4e963de&oe=5EFB8570`
                },
                {
                    id: 2,
                    title: 'title2',
                    content: 'content2',
                    topics: 20,
                    time: 4,
                    img: `https://scontent-tpe1-1.xx.fbcdn.net/v/t1.15752-9/101595173_237761764188877_5514067787007393792_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=D8nl_qvFHqkAX8MmmRO&_nc_ht=scontent-tpe1-1.xx&oh=8c9a645782af594cbf5d2e4cb4e963de&oe=5EFB8570`
                }
            ],
            category: [
                {

                }
            ]
        }
    },
    methods: {
        
    }
}
</script>
<template lang="pug">
    #allclass.allclass
        .left fokgojr
        .right
            Col(v-for="(item, index) in cardData" :key='item.id')
                Card.card(:boardered='11')
                    img(v-if='item.img != "" ' :src="item.img" )
                    img(v-else :src="defaultClass") 
                    .title {{item.title}} 
                    .topics
                        img(:src='topic') 
                        |主題：{{item.topics}}
                    .time
                        img(:src='time') 
                        |時間（小時）：{{item.time}}
                    .content {{item.content}}
                        

        
</template>
<style lang='scss' scoped>
.allclass {
    display: flex;
    justify-content: center;
    text-align: center;
    .left {
        flex: 1;
    }
    .right {
        display: flex;
        flex: 3;
        .card{
            flex: 1;
            margin: 15px;
            width: 200px;
            height: 300px;
            img{
                width: 75px;
            }
            .title{
                font-size: 20px;
            }
            .topics, .time{
                img{
                    width: 18px;
                }
                font-size: 10px;
                text-align: left;
                margin: 5px;
            }
        }
    }
}
</style>