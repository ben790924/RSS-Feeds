<template>
    <div>
        <h2 class="mb-4">FeedLists</h2>

        <ul v-if="feeds && feeds.length" class="sticky p-top list-reset border-b border-grey">
            <li v-for="feed in feeds" :key="feed.title">
                <a href="#" class="no-underline p-2 block border-grey border-b-0 text-teal hover:bg-teal-lightest" @click="selectFeed(feed)">
                    {{ feed.title }}
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props:['feeds'],
    methods:{
        selectFeed(feed){
            this.$emit('onSelectFeed',feed)
        }
    }
}
</script>
