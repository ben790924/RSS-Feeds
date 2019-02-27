<template>
    <div>
        <h2 class="mb-4">Articles</h2>
        <ul class="list-reset sticky pin-t border-b border-grey" v-if="articles && articles.length">
            <li v-for="item in articles" :key="item.title">
                <a href="#" @click="selectArticle(item)" class="no-underline p-2 block border-grey border-b-0 text-teal hover:bg-teal-lightest"> {{item.title}} </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['articles'],
    data(){
        return{

        }
    },
    methods:{
        selectArticle(article){
            this.$emit('onSelectArticle',article)
        }
    }
}
</script>
