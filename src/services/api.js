import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

const api = {

  getTodos() {
    return axios.get(`${API_URL}/todos`);
  },


  addTodo(todo) {
    return axios.post(`${API_URL}/todos`, todo);
  },


  deleteTodo(id) {
    return axios.delete(`${API_URL}/todos/${id}`);
  },

  updateTodo(id, updatedData) {
    return axios.put(`${API_URL}/todos/${id}`, updatedData);
  },


  getNotes() {
    return axios.get(`${API_URL}/notes`);
  },


  addNote(note) {
    return axios.post(`${API_URL}/notes`, note);
  },


  deleteNote(id) {
    return axios.delete(`${API_URL}/notes/${id}`);
  },


  updateNote(id, updatedData) {
    return axios.put(`${API_URL}/notes/${id}`, updatedData);
  },

};

export default api;