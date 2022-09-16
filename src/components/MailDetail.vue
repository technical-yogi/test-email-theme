<template>
  <div class="mailDetailContainer detailBox" v-if="isVisible" @click="closeDetail()">
  <div class="detailBox__left"></div>
  <div class="detailBox__right ">
    <div class="detail" id="detail" @click.stop="preventPropagation()">
        <div class="detail--close" @click="closeDetail()">Close (Esc)</div>
        <div class="action">
            <div class="action--btn" @click="markMailRead()">Mark as read (r)</div>
            <div class="action--btn" @click="archiveMail()">Archive (a)</div>
        </div>
        <div class="detail--title">{{mailDetail.title}}</div>
        <div class="detail--desc">{{mailDetail.detail}}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false
        }
    },
    props:{
        showModal: {
            type: Boolean,
            default: false
        },
        mailDetail: {
            type: Object,
            default() {
              return {}
            }
        }
    },
    watch: {
        showModal(){
            if(this.showModal) {
              this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'r') {
                this.markMailRead();
            } else if (e.key === 'a') {
                this.archiveMail();
            } else if (e.key === 'Escape') {
                this.closeDetail();
            }
        });
    },
    methods: {
        closeDetail() {
            this.$emit('modal-closed');
            this.isVisible = false;
        },
        async archiveMail() {
            let payload = [];
            payload.push(this.mailDetail.id);
            await this.$store.dispatch('archiveMail', payload);
        },
        async markMailRead() {
            let payload = [];
            payload.push(this.mailDetail.id);
            await this.$store.dispatch('markRead', payload);
        },
        preventPropagation() {
            // stop event propagation to close this component
        }
    }

}
</script>

<style scoped>
.mailDetailContainer{
    position: fixed;
    right:5px;
    left: 5px;
    top:5px;
    bottom: 5px;
}
.detailBox {
    display: flex;
    flex-wrap: wrap;
}
.detailBox__left{
    width: 60%;
    background-color: black;
    opacity: 0.6;
}
.detailBox__right {
    width: calc(40%-30px);
    padding: 15px;
    background-color: white;
}
.detail--close {
  text-decoration: underline;
  color: #325b8a;
  cursor: pointer;
}
.action {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
}
.action--btn {
    min-width: 85px;
    font-size: 12px;
    padding: 6px 10px;
    margin-right: 16px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f5f7f7;
    border: 1px solid #ccc;
}
.detail--title {
    width: calc(40%-60px);
    font-size: 20px;
    font-weight: bolder;
    margin: 20px 0;
}
.detail--desc {
    max-width: 530px;
    font-size: 14px;
    line-height: 24px;
}
</style>