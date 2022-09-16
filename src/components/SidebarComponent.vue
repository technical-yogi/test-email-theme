<template>
  <div class="menu">
    <router-link to="/inbox"><div class="menu__item">Inbox ({{totalInboxMails}})</div></router-link>
    <router-link to="/archive"><div class="menu__item">Archive ({{totalArchivedMails}})</div></router-link>
    <div class="menu__item menu--bottom">Logout</div>
  </div>
</template>

<script>
export default {
  computed: {
    totalInboxMails() {
      return this.$store.getters.getTotalMailsInInbox;
    },
    totalArchivedMails() {
      return this.$store.getters.getTotalMailsArchived;
    }
  }
}
</script>

<style>
.menu {
    height: 100%;
    width: 100%;
    position: relative;
}
a{
    text-decoration: none;
}
.menu__item {
    width: calc(100%-30px);
    padding: 7px 15px;
    font-size: 15px;
    background-color: white;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
}
.menu--bottom {
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
    margin-bottom: 0;
}
</style>