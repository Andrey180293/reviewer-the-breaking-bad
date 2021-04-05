//import { db } from "../../servises/firebase";
export const SET_DATA = "SET_DATA";
export const SET_LOAD = "SET_LOAD";

const setData = (payload) => ({ type: SET_DATA, payload });
const setLoad = (payload) => ({ type: SET_LOAD, payload });

//-----------------------------------------------------------
export const getData = (link) => {
  return async (dispatch) => {
    dispatch(setLoad(false));
    const response = await fetch(`https://www.breakingbadapi.com/api/${link}`);
    const data = await response.json();

    dispatch(setData(data));
    dispatch(setLoad(true));

    return data;
  };
};

//-----------------------------------------------------------
/*
export const setUpdateData = (item) => {
  return async (dispatch) => {
    await db
      .collection(`${item.category}`)
      .doc(`${item.id}`)
      .set(item)
      .then(() => {
        alert("Товар успішно додано!");
        dispatch(getProducts(item.category));
      })
      .catch((error) => {
        alert("Error : ", error);
      });
  };
};

//-----------------------------------------------------------

export const deleteDataItem = (item) => {
  return async (dispatch) => {
    let setStore = db.collection(`${item.category}`).doc(`${item.id}`).delete();
    await setStore
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        alert("Error removing document: ", error);
      });
    dispatch(getProducts(`${item.category}`));
  };
};
const setId = (payload) => ({ type: SET_ID, payload });

//-----------------------------------------------------------

export const newId = (category) => {
  return async (dispatch) => {
    const products = await dispatch(getProducts(category));

    const arrId = products.map((el) => +`${el.id}`.substr(1));
    let maxId = products.length === 0 ? 0 : Math.max(...arrId) + 1;
    if (category === "motorcycles") dispatch(setId("1" + maxId));
    if (category === "phones") dispatch(setId("2" + maxId));
    if (category === "qudrocopters") dispatch(setId("3" + maxId));

    if (category === "robots") dispatch(setId("4" + maxId));
  };
};
*/
