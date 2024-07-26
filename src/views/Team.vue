<template>
   <div class="team">
       <h1 class="subtitle-1 grey--text">Team</h1>
       <v-container class="my-5">
           <v-layout row wrap>
               <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                   <v-card flat class="text-center ma-3">
<!--                       v-responsive 组件可用于将任何部分固定到特定的宽高比。-->
                       <v-responsive class="pt-4">
                           <v-avatar size="100" class="grey lighten-2">
                               <img :src="person.avatar">
                           </v-avatar>
                       </v-responsive>
                       <v-card-text>
                           <div class="text-lg-subtitle-1 font-weight-bold">{{person.name}}</div>
                           <div class="grey--text">{{person.role}}</div>
                       </v-card-text>
                       <v-card-actions class="ml-16">
                           <v-btn text color="grey">
                               <v-icon small left>mdi-message-arrow-right</v-icon>
                               <span>Message</span>
                           </v-btn>
                       </v-card-actions>
                   </v-card>
               </v-flex>
           </v-layout>
       </v-container>
   </div>
</template>

<script>
    export default {
        name: "Team",
        data(){
            return{
                team:[
                    {name:'The Net Ninjia', role:'Web developer', avatar:'/avatar-1.png'},
                    {name:'Ryu', role:'Graphic designer',avatar:'/avatar-2.png'},
                    {name:'Chun li', role:'Web developer',avatar:'/avatar-3.png'},
                    {name:'Gouken', role:'Social media maverick',avatar:'/avatar-4.png'},
                    {name:'Yoshi', role:'Sales guru',avatar:'/avatar-5.png'}

                ]
            }
        }
    }
</script>

<style scoped>

</style>