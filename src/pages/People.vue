<template>
  <Layout page="people">
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">the craftsmen</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 flex items-center justify-center people-card-section">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <div
          v-for="{ node } in data"
          :key="node.username"
          @click="$router.push(`/me/${node.username}`)"
          class="shadow-xl transform transition duration-500 hover:scale-105"
        >
          <div
            class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg height-100"
          >
            <div
              class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"
            >
              <img :src="node.avatar" alt="" class="h-full w-full" />
            </div>

            <h2 class="mt-4 font-bold text-xl">{{ node.name }}</h2>

            <p class="text-xs text-gray-500 text-center mt-3 ellipsis">
              {{ node.quote }}
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  v-if="node.email"
                  target="_blank"
                  :href="node.email"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fas', 'envelope']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.github_handle"
                  target="_blank"
                  :href="node.github_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.linkedin_handle"
                  target="_blank"
                  :href="node.linkedin_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'linkedin']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.twitter_handle"
                  target="_blank"
                  :href="node.twitter_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'twitter']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "People",
      bodyAttrs: {
        style: `background-color: ${this.data.background_color}; color: ${this.data.text_color}`,
      },
    }
  },
  computed: {
    data() {
      if (this.$page && this.$page.allPeople && this.$page.allPeople.edges) {
        return this.$page.allPeople.edges
      } else {
        return {}
      }
    },
  },
  watch: {
    data(val) {
      if (!val) {
        this.$router.push("/")
      }
    },
  },
}
</script>

<page-query>
query {
	allPeople {
    edges {
      node {
        name
        email
        avatar
        quote
        github_handle
        linkedin_handle
        twitter_handle
        username
      }
    }
  }
}
</page-query>

<style lang="scss">
.people-card-section {
  background-color: #e2e8f0;
  min-height: calc(100vh - 153.31px);

  .ellipsis {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .height-100 {
    height: 100%;
  }
}
</style>
