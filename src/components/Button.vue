<template>
    <div>
        <a-button type="primary" @click="changePerson">BUTTONb</a-button>
        <!-- <span>{{person.a.b.c.d.f.e.g.h}}</span> -->
        <!-- <p>{{person.b || '---'}}</p> -->
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created!!!')
        console.log('list parent',this.list);
    },
    data(){
        return {
            person: {
                a:{
                    b: {
                        c:{
                            d: {
                                f:{e:{
                                    g: {
                                        h:123
                                    }
                                }}
                            }
                        }
                    }
                }
            },
            buonname:'我是b'

        }
    },
    methods: {
        changePerson: function(){
            console.log(this.person);
            this.person.a.b.c.d.f.e.g.h = 456;
            this.person.b = 'new 123';
            this.$emit('setValue',{name: 'zhangsan',num: 20})
            this.$EventBus.$emit('btn-B',this.buonname);        }
    }
    
}
</script>
<style>

</style>