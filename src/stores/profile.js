import { defineStore } from 'pinia';

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'indiana.jones',
    status: 'active',
    avatar: '/avatars/avatar-03.jpg',
  }),
});
