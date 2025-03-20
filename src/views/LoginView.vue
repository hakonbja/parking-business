<template>
  <TextInput
    v-model="email"
    label="E-mail"
  />
  <TextInput
    v-model="password"
    label="Password"
    type="password"
  />
  <button
    @click="handleLogin"
  >
    Login
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/TextInput.vue';
import { userService } from '@/services/userService';
import router from '@/router';

export default defineComponent({
  name: 'LoginView',
  components: {
    TextInput,
  },
  data: () => {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleLogin: async function(): Promise<void> {
      const loginIsSuccesful = await userService.login(this.email, this.password);

      if (loginIsSuccesful) {
        router.push({ name: 'home'});
      }
    }
  }
});
</script>
