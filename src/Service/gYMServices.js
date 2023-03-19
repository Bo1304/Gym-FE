import https from "./config.jsx";

export const gYMServices = {
  getlistCLB() {
    const url = '';
    return https.get(url);
  },

  deleteListCLB(id){
    const url = `${id}`;
    return https.delete(url);
}


};
