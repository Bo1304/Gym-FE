import {https,https_pt} from "./config.jsx";


export const gYMServices = {
  getlistCLB() {
    const url = '/API-GYM';
    return https.get(url);
  },

  deleteListCLB(id){
    const url = `${id}`;
    return https.delete(url);
},
  getListPT(){
    const urlPT = '/api/pts';
    return https_pt.get(urlPT);
  },
  deleteListPT(id){
    const url = `${id}`;
    return https_pt.delete(url);
  }
};

export const gYMServices1 = {
  getListPT(){
    const urlPT = '/api/pts';
    return https_pt.get(urlPT);
  },
  deleteListPT(id){
    const url = `${id}`;
    return https_pt.delete(url);
  }
};

