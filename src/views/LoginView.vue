<template>
  <div class="card">
    <h1>Welcome!</h1>
    <form
      ref="form"
      class="form"
    >
      <TextInput
        v-model="email"
        label="E-mail"
        type="email"
        required
      />
      <TextInput
        v-model="password"
        label="Password"
        type="password"
        required
      />
      <BaseButton
        text="Login"
        @click="handleLogin"
      >
        Login
      </BaseButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/TextInput.vue';
import { userService } from '@/services/userService';
import router from '@/router';
import BaseButton from '@/components/BaseButton.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    TextInput,
    BaseButton,
  },
  data: () => {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleLogin: async function(): Promise<void> {
      this.$refs.form.checkValidity();
      const loginIsSuccesful = await userService.login(this.email, this.password);

      if (loginIsSuccesful) {
        router.push({ name: 'home'});
      }
    }
  }
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 28px;
  padding: 16px;
  background-color: var(--var-c-secondary-yellow);
}

.form {
  display: contents;
}
</style>
