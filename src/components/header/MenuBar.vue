<template lang="pug">
    .TitleBar
        Menu(mode="horizontal" :theme="theme" active-name="1" @on-select='route')
            MenuItem(name='1')
                | {{ barItems.userClass }}
            MenuItem(name='2')
                Icon(type="ios-paper")
                | {{ barItems.onlineClass }} 
            Submenu(name='3')
                template(slot='title')
                    Icon(type='ios-construct')
                    |{{ barItems.setting }}
                MenuGroup(:title=`barItems.setitem.title`)
                    MenuItem(name='3-1') {{ barItems.setitem.userinfo }}
                    MenuItem(name='3-2') {{ barItems.setitem.logout }}
            
</template>
<script>
export default {
    name: 'TitleBar',
    data(){
        return {
            theme: 'light',
            barItems: {
                onlineClass: `線上課程`,
                userClass: `我的課程`,
                setting: `設定`,
                setitem: {
                    title: `個人`,
                    logout: `登出`,
                    userinfo:`個人資訊`
                }
            }
           
        }
    },
    methods: {
        route(n) {
            console.log(n);
            switch (n) {
                case `1`:
                    this.$router.push('dashboard/myclass')
                break;
                default:
                    this.$router.push('/');
                break;
            }
            
        }
    }
    
}
</script>
<style scoped>
.TitleBar{

}
</style>