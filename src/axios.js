import axios from "axios";

const API_ROOT = "https://conduit.productionready.io/api";

// {
//     "user":{
//        "id":102280,
//        "email":"erdemontas@hotmail.com",
//        "createdAt":"2020-06-17T13:15:56.789Z",
//        "updatedAt":"2020-06-17T13:15:56.794Z",
//        "username":"erondem",
//        "bio":null,
//        "image":null,
//        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAyMjgwLCJ1c2VybmFtZSI6ImVyb25kZW0iLCJleHAiOjE1OTc1ODM3NTZ9.s1NSF_P0k7JpU3FXPUypYSHS6EEoD-edRh9dsC7von0"
//        "*password": "12345674ii**"

//     }
//  }

axios.defaults.trailingSlash = true;
axios.defaults.baseURL = API_ROOT;
const api = {
  User: {
    // Done
    login(email, password) {
      return axios.post(`/users/login`, {
        user: {
          email,
          password,
        },
      });
    },
    // Done
    register(username, email, password) {
      return axios.post("/users", {
        user: {
          username,
          email,
          password,
        },
      });
    },
    getCurrent() {
      return axios.get("/user");
    },
    update() {},
  },
  Articles: {
    // Done
    getFeed() {
      return axios.get("/articles", {
        limit: 10,
        offset: 0,
      });
    },
    getBySlug(slug) {
      return axios.get(`/articles/${slug}`);
    },
    getByAuthor(author) {
      return axios.get(`/articles/${author}`);
    },
    getByTag(tag) {
      return axios.get(`/articles/${tag}`);
    },
    create(article) {
      return axios.post(`/articles`, { article });
    },
    delete(slug) {
      return axios.delete(`/articles/${slug}`);
    },
    favorite(slug) {
      return axios.post(`/articles/${slug}/favorite`)
    },
    // getFavoritedBy(author, page){
    //   return axios.get(`articles?favorited=${author}&${limit(5,page)}`)
    // },  
    unfavorite(slug) {
      return axios.delete(`/articles/${slug}/favorite`)
    },
    update(article) {},
  },
};

export default api;
