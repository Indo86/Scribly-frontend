import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Ubah URL sesuai dengan struktur API yang telah dibuat

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


  toggleTodoComplete(id) {
    return axios.patch(`${API_URL}/todos/${id}/toggle`);
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


  toggleNotePin(id) {
    return axios.patch(`${API_URL}/notes/${id}/pin`);
  },


  toggleNoteBookmark(id) {
    return axios.patch(`${API_URL}/notes/${id}/bookmark`);
  },

  toggleNoteArchive(id) {
    return axios.patch(`${API_URL}/notes/${id}/archive`);
  },
};

export default api;