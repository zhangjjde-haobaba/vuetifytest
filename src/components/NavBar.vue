<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top>
            <span>Awesome! you add a new project</span>
            <template v-slot:action="{ attrs }">
                <v-btn
                        color="red"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>


<!--        flat 消除阴影-->
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span class="font-weight-bold">Ninjia</span>
            </v-app-bar-title>
            <!-- drop down menu -->
<!--            <v-menu offset-y>-->
<!--                <template v-slot:activator="{ on, attrs }">-->
<!--                    <v-btn-->
<!--                            color="primary"-->
<!--                            dark-->
<!--                            v-bind="attrs"-->
<!--                            v-on="on"-->
<!--                    >-->
<!--                        Dropdown-->
<!--                    </v-btn>-->
<!--                </template>-->
<!--                <v-list>-->
<!--                    <v-list-item-->
<!--                            v-for="(item, index) in items"-->
<!--                            :key="index"-->
<!--                    >-->
<!--                        <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--                    </v-list-item>-->
<!--                </v-list>-->
<!--            </v-menu>-->
            <v-spacer></v-spacer>
            <!--            v-spacer 是一个基本而又通用的间隔组件，用于分配父子组件之间的剩余宽度。
                当一个 v-spacer 放置在子组件之前或之后时，组件将推到其容器的左右两侧。
                当多个组件之间使用多个v-spacer 时，剩余的宽度将均匀地分布在每个spacer之间-->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            color="grey"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            text
                    >
                        <v-icon left>mdi-arrow-expand</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                       <v-list-item-title>{{link.icon}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>



            <v-btn text color="grey">
                <span>Sign out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
<!--        侧边栏，使用v-model来控制 值为true的时候展示, false的时候关闭 跟v-app-bar-nav-icon进行绑定-->
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png">
                    </v-avatar>
                    <p class="white--text subtitle-1 mt-1">
                        The Net Ninjia
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded = "snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
<!--                :key要绑定具有唯一标识的内容-->
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{link.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import Popup from './Popup'

    export default {
        name: "NavBar",
        components:{Popup},
        data(){
            return{
                drawer:false,
                links:[
                    {icon:'mdi-view-dashboard',text:'Dashboard',route:'/'},
                    {icon:'mdi-folder',text:'My projects',route:'/projects'},
                    {icon:'mdi-human-greeting-variant',text:'Team',route:'/team'}
                ],
                snackbar: false,
            }
        }
    }
</script>

<style scoped>

</style>