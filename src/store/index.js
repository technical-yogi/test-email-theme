import { createStore } from 'vuex'

export default createStore({
  state: {
    allMails: [
      {
        id: 1,
        title: 'Your 7-figure plan goes bye-bye at midnight',
        detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        isRead: false,
        isArchived: false
      },
      {
        id: 2,
        title: '[Weekend-Only] get this now before',
        detail: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        isRead: false,
        isArchived: false
      },
      {
        id: 3,
        title: 'Uh-oh, Your prescription is expiring',
        detail: `There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable.`,
        isRead: false,
        isArchived: false
      },
      {
        id: 4,
        title: 'Where can I get this plan ?',
        detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        isRead: false,
        isArchived: false
      }
    ]
  },
  getters: {
    getAllMails(state) {
      return state.allMails;
    },
    getArchivedMails(state) {
      let arMails = []
      state.allMails.forEach(el=> {
        if(el.isArchived) {
          arMails.push(el)
        }
      })
      return arMails;
    },
    getTotalMailsInInbox(state) {
      return state.allMails.length
    },
    getTotalMailsArchived(state) {
      let count = 0
      state.allMails.forEach(el=> {
        if(el.isArchived) {
          count++;
        }
      })
      return count
    }
  },
  mutations: {
    ARCHIVE_MAIL(state, payload) {
      payload.forEach(element=> {
        const alreadyArchived = state.allMails.some(el=> (el.id === element && el.isArchived))
        if(!alreadyArchived) {
          state.allMails.forEach(el=> {
            if(el.id === element) {
              el.isArchived = true
            }
          })
        }
      })
    },
    MARK_MAIL_READ(state, payload) {
      payload.forEach(element=> {
        state.allMails.forEach(el=> {
          if(el.id === element) {
            el.isRead = true
          }
        })
      })
    }
  },
  actions: { 
    archiveMail({commit}, payload) {
      commit('ARCHIVE_MAIL', payload);
    },
    markRead({commit}, payload) {
      commit('MARK_MAIL_READ', payload);
    }
  },
  modules: {
  }
})
