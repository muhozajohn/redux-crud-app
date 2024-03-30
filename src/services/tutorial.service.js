import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/read");
  }

  get(id) {
    return http.get(`/read/${id}`);
  }

  create(data) {
    return http.post("/create", data);
  }

  update(id, data) {
    return http.put(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/delete`);
  }

  findByTitle(title) {
    return http.get(`/read?title=${title}`);
  }
}

const tutorialService = new TutorialDataService();
export default tutorialService;