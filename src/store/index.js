import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    init_flag: false,
    blogs: [],
    blog: ''
  },
  mutations: {
    set_status(state, status) {
			state.status = status
    },
    set_flag(state) {
      state.init_flag = true
    },
    set_blogs(state, data) {
      state.blogs = []
      data.forEach(element => {
        state.blogs.push({
          id: element.id,
          thumb_img: element.thumb_img,
          origin_img: element.origin_img,
          title: {
            en: element.title,
            ar: element.title_ar
          },
          description: {
            en: element.description,
            ar: element.description_ar
          },
          content: {
            en: element.content,
            ar: element.content_ar
          },
          blog_date: element.blog_date,
          comment: element.comment,
          favorite: element.cnt_like,
        })
      })
      state.blog = ''
    },
    set_comment(state, data) {
      // let cur_blog = state.blogs.find(element => element.id === data.blog_id)
      state.blog.comments.unshift(data)
    },
    set_like(state, data) {
      // let cur_blog = state.blogs.find(element => element.id === data.blog_id)
      state.blog.favorite = data.favorite
    },
    set_blog(state, data) {
      state.blog = {
        id: data.id,
        thumb_img: data.thumb_img,
        origin_img: data.origin_img,
        title: {
          en: data.title,
          ar: data.title_ar
        },
        description: {
          en: data.description,
          ar: data.description_ar
        },
        content: {
          en: data.content,
          ar: data.content_ar
        },
        blog_date: data.blog_date,
        comment: 0,
        favorite: data.cnt_like,
        comments: data.comments
      }
    },
    empty_blog(state) {
      state.blog = ''
    }
  },
  actions: {
    setStatus({commit}, status) {
			commit('set_status', status)
    },
    setFlag({commit}) {
      commit('set_flag')
    },
    getBlogs({commit}) {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('action', 'blogs')
        axios.post('/blog.php', formData)
          .then((response) => {
            console.log(response)
            if (response.data.status === "ok") {
              commit('set_blogs', response.data.data)
              resolve(response)
            }
          })
          .catch((err) => {
            console.log(err)
            commit('set_blogs', '')
            reject(err)
          })
      })
    },
    getBlog({commit}, blog_id) {
      return new Promise((resolve, reject) => {
        commit('empty_blog')
        const formData = new FormData()
        formData.append('action', 'blog')
        formData.append('blog_id', blog_id)
        axios.post('/blog.php', formData)
          .then((response) => {
            console.log(response)
            if (response.data.status === "ok") {
              commit('set_blog', response.data.data)
              resolve(response)
            }
          })
          .catch((err) => {
            console.log(err)
            commit('set_blog', '')
            reject(err)
          })
      })
    },
    saveComment({commit}, payload) {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('action', 'add')
        formData.append('blog_id', payload.blog_id)
        formData.append('user_name', payload.user_name)
        formData.append('email', payload.email)
        formData.append('comment', payload.comment)
        axios.post('/blog.php', formData)
          .then((response) => {
            console.log(response)
            if (response.data.status === "ok") {
              commit('set_comment', response.data.data)
              resolve(response)
            }
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    saveLike({commit}, payload) {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('action', 'like')
        formData.append('blog_id', payload.blog_id)
        formData.append('direction', payload.is_like ? 'inc' : 'dec')
        axios.post('/blog.php', formData)
          .then((response) => {
            console.log(response)
            if (response.data.status === "ok") {
              commit('set_like', response.data.data)
              resolve(response)
            }
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
