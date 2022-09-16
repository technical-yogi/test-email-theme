<template>
  <div>
    <div class="pageName">Archive</div>
    <MailComponent :mails="archivedMails" />
  </div>
</template>

<script>
import MailComponent from '@/components/MailComponent.vue'
export default {
  components: {
    MailComponent
  },
  computed: {
    archivedMails() {
      return this.$store.getters.getArchivedMails;
    }
  }
}
</script>

<style>

</style>