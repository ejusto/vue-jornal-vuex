<template>
    <div>
        <div class="entry-container mb-3 pointer p-2"
        v-on:click="$router.push({ name:'entry', params: { id:10 } })">
            <div class="entry-title d-flex">
                <span>15</span>
                <span>Julio</span>
                <span>2021</span>
            </div>
        </div>  
        <div class="entry-description">
            Consectetur dolor nostrud consectetur consequat fugiat mollit incididunt consequat voluptate aute dolor tempor in sint. Eu deserunt dolore reprehenderit deserunt tempor ex labore. Veniam enim sunt labore excepteur incididunt sunt do dolore aliqua commodo nulla minim nisi magna.
        </div>     
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description{
            font-size: 12px;
        }
    }
</style>