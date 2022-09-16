<template>
  <div class="mailDetailContainer detailBox" v-if="isVisible">
  <div class="detailBox__left"></div>
  <div class="detailBox__right ">
    <div class="detail">
        <div class="detail--close" @click="closeDetail()">Close (Esc)</div>
        <div class="action">
            <div class="action--btn">Mark as read (r)</div>
            <div class="action--btn">Archive (a)</div>
        </div>
        <div class="detail--title">Lorem Ipsum is simply dummy text of </div>
        <div class="detail--desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
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
    methods: {
        closeDetail() {
            this.$emit('modal-closed');
            this.isVisible = false;
        }
    }

}
</script>

<style scoped>
.mailDetailContainer{
    z-index: 999;
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
    max-width: 100%;
    font-size: 20px;
    font-weight: bolder;
    margin: 20px 0;
}
.detail--desc {
    max-width: 550px;
    font-size: 14px;
    line-height: 24px;
}
</style>