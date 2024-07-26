<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
<!--    <p class="red white&#45;&#45;text">Lorem jiangyiwei zui niubi sun xiaowen shi ge xiao zhuzhu</p>-->
<!--    <p class="pink lighten-4 red&#45;&#45;text text&#45;&#45;darken-4">Lorem jiangyiwei zui niubi sun xiaowen shi ge xiao zhuzhu</p>-->
<!--    <h1 class="display-4">Massive display</h1>-->
<!--    <h4 class="display-1">Smaller display</h4>-->
<!--    <p class="headline text-uppercase">This is a headline</p>-->
<!--    <p class="subheading font-weight-bold">This is a subheading</p>-->
<!--    <p class="caption text-capitalize">This is a caption</p>-->
<!--    <v-btn class="pink white&#45;&#45;text">click me</v-btn>-->
<!--    <v-btn dark color="pink">click me</v-btn>-->
<!--    <v-btn depressed color="pink">click me</v-btn>-->
<!--    <v-btn text color="pink">click me</v-btn>-->
<!--    <v-btn depressed class="pink white&#45;&#45;text">-->
<!--      <v-icon left>mdi-card-account-mail-outline</v-icon>-->
<!--      <span>Email me</span>-->
<!--    </v-btn>-->

    <!-- 给按钮和图标添加small属性 让按钮和图标都变小 -->
<!--    <v-btn depressed small class="pink white&#45;&#45;text">-->
<!--      <v-icon left small>mdi-card-account-mail-outline</v-icon>-->
<!--      <span>Email me</span>-->
<!--    </v-btn>-->
    <!-- 给按钮和图标添加large属性 让按钮和图标都变大 -->
<!--    <v-btn depressed large class="pink white&#45;&#45;text">-->
<!--      <span>Email me</span>-->
<!--      &lt;!&ndash; 在变大状态下 图标要放在文字的右边 &ndash;&gt;-->
<!--      <span> &nbsp;</span>-->
<!--      <v-icon large right >mdi-card-account-mail-outline</v-icon>-->
<!--    </v-btn>-->

    <!--    添加fab 使按钮变圆-->
<!--    <v-btn fab depressed small dark color="purple">-->
<!--      <v-icon>mdi-cards-heart</v-icon>-->
<!--    </v-btn>-->

<!--    <br>-->
<!--    当screen 的size小于medium的时候 button会被隐藏-->
<!--    <v-btn class="hidden-md-and-down">click me</v-btn>-->
    <!--    当screen 的size大于medium的时候 button会被隐藏-->
<!--    <v-btn class="hidden-md-and-up">click me</v-btn>-->
<!--    当screen 为small screen的时候隐藏按钮-->
<!--    <v-btn class="hidden-sm-only">click me</v-btn>-->

      <v-container class="my-8">
<!--           其中v-layout就是对应栅格中的一行，而v-flex对应的就是一列-->
<!--          <v-layout row wrap>-->
<!--&lt;!&ndash;              Vuetify拥有一个12点的栅格系统 Extra small device占一整行 Medium device占半行&ndash;&gt;-->
<!--              <v-flex xs12 md6>-->
<!--                <v-btn outlined block class="primary">1</v-btn>-->
<!--              </v-flex>-->
<!--              <v-flex xs4 md2>-->
<!--                  <v-btn outlined block class="primary">2</v-btn>-->
<!--              </v-flex>-->
<!--              <v-flex xs4 md2>-->
<!--                  <v-btn outlined block class="primary">2</v-btn>-->
<!--              </v-flex>-->
<!--              <v-flex xs4 md2>-->
<!--                  <v-btn outlined block class="primary">2</v-btn>-->
<!--              </v-flex>-->
<!--          </v-layout>-->

<!--          <v-layout row wrap justify-space-between>-->
<!--              <v-flex xs4 md3>-->
<!--                  <v-btn outlined block class="success">1</v-btn>-->
<!--              </v-flex>-->
<!--              <v-flex xs4 md3>-->
<!--                  <v-btn outlined block class="success">2</v-btn>-->
<!--              </v-flex>-->
<!--          </v-layout>-->



          <v-layout row class="mb-3">
              <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                      <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
                          <v-icon small left>mdi-folder</v-icon>
                          <span class="caption text-lowercase">By Project Name</span>
                      </v-btn>
                  </template>
                  <span>Sort projects by project name</span>
              </v-tooltip>

              <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                      <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
                          <v-icon small left>mdi-human</v-icon>
                          <span class="caption text-lowercase">By Person</span>
                      </v-btn>
                  </template>
                  <span>Sort projects by person name</span>
              </v-tooltip>
          </v-layout>

          <v-card flat height="5rem"  v-for="project in projects" :key="project.title">
              <v-layout row wrap :class="`pa-3 project ${project.status} `">
                  <v-flex xs12 md6>
                      <div class="caption grey--text">Project Title</div>
                      <div>{{project.title}}</div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                      <div class="caption grey--text">Person</div>
                      <div>{{project.person}}</div>
                  </v-flex>
                  <v-flex xs6 sm4 md2>
                      <div class="caption grey--text">Due by</div>
                      <div>{{project.due}}</div>
                  </v-flex>
                  <v-flex xs2 sm4 md2>
<!--                      <div class="caption grey&#45;&#45;text">Status</div>-->
<!--                      <div>{{project.status}}</div>-->
                      <div class="float-right">
                          <v-chip id="chip-container" small :class="`${project.status} white--text my-2 caption` " >{{project.status}}</v-chip>
                      </div>
                  </v-flex>
              </v-layout>
            <v-divider></v-divider>
          </v-card>
      </v-container>

  </div>
</template>

<script>
  import db from '@/fb.js'
  import { collection, getDocs } from "firebase/firestore";
  export default {

    name: 'Home',
    data(){
        return{
            projects:[
                // {title:'Design a new website', person:'the net ninjia', due:'1st jan 2022', status:'ongoing'},
                // {title:'Code on the homepage', person:'chun li', due:'1st jan 2022', status:'complete'},
                // {title:'Design video thumbnails', person:'Ryu', due:'1st jan 2022', status:'complete'},
                // {title:'Create a community forum', person:'Gouken', due:'1st jan 2022', status:'overdue'}
            ]
        }
    },
    methods:{
        sortBy(prop){
            this.projects.sort((a,b)=> a[prop]<b[prop] ? -1 : 1)
        //    -1代表维持当前顺序 1代表需要调换顺序
        }
    },
     async created() {
        console.log(db)
        const querySnapshot = await getDocs(collection(db.db, "projects"));
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            this.projects.push({
                ...doc.data(),
                id: doc.id
            })
        });


    }

  }
</script>

<style>
    .project.complete{
        border-left: 4px solid #3cd1c2;
    }
    .project.ongoing{
        border-left: 4px solid orange;
    }
    .project.overdue{
        border-left: 4px solid tomato;
    }
    #chip-container.v-chip.complete{
        background: #3cd1c2;
    }
    #chip-container.v-chip.ongoing{
        background: #ffaa2c;
    }
    #chip-container.v-chip.overdue{
        background: #f83e70;
    }
</style>