<template>
  <div class="mailBox">
    <div class="mailBox__title">Emails Selected (2)</div>
    {{isArchivePage}}
    <div class="mailBox__list">
      <input type="checkbox" class="mailBox__list--checkbox">
      <div class="mailBox__list--btn mailBox--grey">Mark as read (r)</div>
      <div class="mailBox__list--btn mailBox--grey" v-if="showArchiveButton">Archive (a)</div>
    </div>
    <div class="mailBox__list mailBox--grey">
        <input type="checkbox" class="mailBox__list--checkbox">
        <div class="mailBox__list--text" @click="showDetail()">This is first mail</div>
    </div>
    <div class="mailBox__list mailBox--grey">
        <input type="checkbox" class="mailBox__list--checkbox">
        <div class="mailBox__list--text">This is first mail</div>
    </div>
    <div class="mailBox__list mailBox--grey">
        <input type="checkbox" class="mailBox__list--checkbox">
        <div class="mailBox__list--text">This is first mail</div>
    </div>
  </div>
  <MailDetail :showModal="openDetail" @modalClosed="detailClosed" />
</template>

<script>
import MailDetail from '@/components/MailDetail.vue'
export default {
  data() {
    return {
        openDetail: false
    }
  },
  components: {
    MailDetail
  },
  computed: {
    showArchiveButton(){
        return this.$route.name !== 'Archive';
    }
  },
  methods: {
    showDetail () {
        this.openDetail = true
    },
    detailClosed() {
        this.openDetail = false
    }
  }
}
</script>

<style scoped>
.mailBox {
    width: 100%;
    height: auto;
}
.mailBox--grey {
    background-color: #f5f7f7;
}
.mailBox__title {
    font-size: 32px;
    font-weight: bolder;
    color: black;
    margin-bottom: 20px;
}
.mailBox__list {
    width: calc(100%-30px);
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    border-radius: 7px;
}
.mailBox__list--btn {
  min-width: 85px;
  font-size: 12px;
  padding: 6px 10px;
  margin-right: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
}
.mailBox__list--checkbox {
    height: 24px;
    width: 24px;
    margin-right: 16px;
}
.mailBox__list--text {
    font-size: 14px;
    margin-top: 7px;
}
</style>