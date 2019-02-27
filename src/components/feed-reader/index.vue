<template>
    <div>
        <h1 class="mb-6 text-center mb-8">RSS FEEDS</h1>
        <div class="feed-container">
            <FeedLists :feeds='feeds' @onSelectFeed='handleSelectFeed' />
            <ArticleList :articles='articles' @onSelectArticle='handleSelectArticle' />
            <SingleArticle :article='selectedArticle' />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import FeedLists from './FeedLists.vue'
import ArticleList from './ArticleList.vue'
import SingleArticle from './SingleArticle.vue'
export default {
    components:{
        FeedLists,ArticleList,SingleArticle
    },
    data(){
        return{
            feeds:[],
            articles:[],
            selectedArticle:null
        }
    },
    created(){
        this.getFeeds()
    },
    methods:{
        async getFeeds(){
            let { data } = await axios.get('/.netlify/functions/feeds')
            this.feeds = data
        },
        handleSelectFeed(feed){
            this.articles = feed.items
        },
        handleSelectArticle(article){
            this.selectedArticle = article
        }
    }
}
</script>

<style>
.feed-container{
    display:grid;
    grid-template-columns: 15% 15% auto;
    grid-gap: 20px;
}
</style>
