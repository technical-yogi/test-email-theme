<template>
  <div>
   <div class="pageName">Inbox</div>
   <MailComponent :mails="inboxMails" />
  </div>
</template>

<script>
import MailComponent from '@/components/MailComponent.vue'
export default {
  components: {
    MailComponent
  },
  computed: {
    inboxMails() {
      return this.$store.getters.getAllMails;
    }
  }
}
</script>

<style>

</style>