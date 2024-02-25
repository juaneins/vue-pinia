import { defineStore } from 'pinia';

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'jane.jones',
    status: 'active',
    avatar: '/avatars/avatar.jpg',
  }),
});
