<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    color="success"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    text
            >
                Add new project
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-inner-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-inner-icon="mdi-account-edit-outline" :rules="inputRules"></v-textarea>

                    <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    v-model="date"
                                    label="Due date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="inputRules"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="date"
                                no-title
                                scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>

                    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import format from 'date-fns/format'
    import db from '@/fb.js'
    import { collection, addDoc, getFirestore } from "firebase/firestore";
    export default {
        name: "Popup",
        data(){
            return{
                title:'',
                content:'',
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                menu: false,
                inputRules:[
                    v => v.length >= 3 || 'Minimum length is 3 characters'
                ],
                loading:false,
                dialog:false
            }
        },
        methods:{
            async submit(){
                if(this.$refs.form.validate()){
                    // console.log(this.title, this.content, this.date)
                    this.loading = true
                    const project = {
                        title:this.title,
                        content:this.content,
                        due: this.date,
                        person:'The Net ninjia',
                        status:'ongoing'
                    }
                    try {
                        const docRef =  await addDoc(collection(db.db, "projects"),
                            project
                        );
                        console.log("add to db");
                        this.loading = false
                        this.dialog = false
                        this.$emit('projectAdded')
                    } catch (e) {
                        console.error("Error adding document: ",e);
                    }

                }

            }
        }
    }
</script>

<style scoped>

</style>