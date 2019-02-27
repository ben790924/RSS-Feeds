<template>
    <div v-if="article">
        <h2 class="mb-4"> {{article.title}} </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus repellendus dolor dolorem libero! Consequatur fugit magnam commodi laudantium ut, doloribus inventore suscipit obcaecati provident soluta tempore veniam possimus! Iste?</p>
        <div class="mb-4" v-html="article.content"></div>


        <a :href="article.link" target="_blank" rel='noopener' class="inline-block bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 no-underline">View original</a>
    </div>
</template>
<script>
export default {
    props:['article']
}
</script>
