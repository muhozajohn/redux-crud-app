import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/read");
  }

  get(id) {
    return http.get(`/read/${id}`);
  }

  create(data, token) {
    return http.post("/create", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }


  update(id, data, token) {
    return http.put(`/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  delete(id, token) {
    return http.delete(`/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
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