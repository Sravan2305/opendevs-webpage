<template>
  <header class="header">

    <nav class="nav">

      <g-link to="/" exact v-if="routerLink === '/'">
        <h1>{{ $static.metadata.siteName }}</h1>
      </g-link>

      <div class="back-button" v-else @click="hasHistory() ? $router.go(-1) : $router.push('/')">
        <font-awesome :icon="['fas', 'arrow-left']"/> <h1> {{ $static.metadata.siteName }}</h1>
      </div>

      <div>
        <h2>
          <g-link to="/blogs">
            blogs
          </g-link>
        </h2>
      </div>

      <div @click="toggleDarkMode" v-if="browserName !== 'Firefox'">
        <font-awesome class="theme-change" v-if="!activeColor" :icon="['fas', 'sun']"/>
        <font-awesome class="theme-change" v-else :icon="['fas', 'moon']"/>
      </div>

      <div>
        <h2>
          <g-link :to="'/people'">
            people
          </g-link>
        </h2>
      </div>
    </nav>
  </header>
</template>

<script>
import Bowser from 'bowser'

export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },

  data: () => ({
    isDark: false,
    browserName: null
  }),

  computed: {

    activeColor() {
      return this.isDark
    },

    routerLink () {
      return this.$route.path
    },

    pageName () {
      return this.$route.name
    }
  },

  mounted() {
    this.isDark = document.documentElement.classList.contains('dark-mode')
    this.browserName = Bowser.getParser(window.navigator.userAgent).parsedResult.browser.name
  },

  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle('dark-mode')
      this.isDark = document.documentElement.classList.contains('dark-mode')
    },

    hasHistory () { return window.history.length > 2 }

  }
}
</script>

<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>

<style lang="scss">
.header h1 {
  margin-bottom: 0;
}

.back-button {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    margin: 1.17em 0;
    margin-bottom: 0;
    margin-right: 10px;
  }
}

.theme-change {
  cursor: pointer;
  font-size: 1.5rem;
}

.nav {
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.nav img {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .header {
    height: calc(100vh - 65px);
    position: fixed;
    left: 0;
    top: 0;
  }

  .nav {
    padding: 2rem;
    width: 20vw;
    height: 100%;
    border-right: 1px solid #ebebeb;
    border-bottom: none;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 768px) {
  .header {
    h1 {
      margin: 0;
    }
  }

  .back-button {
    svg {
      margin: 0;
      margin-right: 10px;
    }
  }

}
</style>
