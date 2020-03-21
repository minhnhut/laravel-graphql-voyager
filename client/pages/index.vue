<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        client
      </h1>
      <h2 class="subtitle">
        Frontend for laravel backend {{message}}
      </h2>
      <ul v-if="!$apollo.queries.users.loading && users">
        <li v-for="user in users.data">
          {{user.email}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import { Vue, Component} from 'vue-property-decorator'
import UsersQueryGQL from '~/support/apollo/queries/users.graphql'
import {UserPaginator} from "~/support/apollo/types/types"

@Component({
  components: {Logo},
  apollo: {
    users: {
      query: UsersQueryGQL
    }
  }
})
export default class extends Vue {
  users: UserPaginator | null = null;
  msg: string = 'hello';

  get message() : string {
    return this.msg;
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
