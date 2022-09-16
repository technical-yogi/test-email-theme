<template>
  <div class="mailBox">
    <div class="mailBox__title">Emails Selected ({{selecteMailLength}})</div>
    <div class="mailBox__list">
      <input type="checkbox" class="mailBox__list--checkbox" :checked="allMailSelected" v-model="allMailSelected">
      <div class="mailBox__list--btn mailBox--grey" @click="markMailRead()">Mark as read (r)</div>
      <div class="mailBox__list--btn mailBox--grey" v-if="showArchiveButton" @click="archiveMail()">Archive (a)</div>
    </div>
    <div class="mailBox__list mailBox--grey" v-for="(mail, index) in mails" :key="index+1" :class="mail.isRead? 'mailBox--read' : ''">
        <input type="checkbox" class="mailBox__list--checkbox" :id="mail.id" :value="mail.id" v-model="selectedMails">
        <div class="mailBox__list--text" @click="showDetail(mail)">{{mail.title}}</div>
    </div>
  </div>
  {{mailToShowDetail}}
  <MailDetail :showModal="openDetail" @modalClosed="detailClosed" :mailDetail="mailToShowDetail"/>
</template>

<script>
import MailDetail from '@/components/MailDetail.vue'
export default {
  components: {
    MailDetail
  },
  data() {
    return {
        allMailSelected: false,
        openDetail: false,
        mailToShowDetail: null,
        selectedMails: []
    }
  },
  props: {
    mails: {
        type: Array,
        default() {
            return []
        }
    }
  },
  watch: {
    selectedMails() {
        this.allMailSelected = this.selectedMails.length === this.mails.length
    },
    allMailSelected(value) {
      if(value) {
        this.selectedMails = this.mails.map(x=> x.id);
      } else {
        this.selectedMails = []
      }
    }
  },
  computed: {
    showArchiveButton(){
        return this.$route.name !== 'Archive';
    },
    selecteMailLength() {
        return this.selectedMails.length;
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'r') {
        this.markMailRead();
      } else if (e.key === 'a') {
        this.archiveMail();
      }
    });
  },
  methods: {
    showDetail (mail) {
        this.mailToShowDetail = mail;
        this.openDetail = true
    },
    detailClosed() {
        this.mailToShowDetail = null;
        this.openDetail = false
    },
    async archiveMail() {
        if(this.selectedMails.length) {
            await this.$store.dispatch('archiveMail', this.selectedMails)
            this.selectedMails = []
        }
    },
    async markMailRead() {
        if(this.selectedMails.length) {
            await this.$store.dispatch('markRead', this.selectedMails)
            this.selectedMails = []
        }
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
.mailBox--read {
    opacity: 0.5;
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
    cursor: pointer;
}
</style>