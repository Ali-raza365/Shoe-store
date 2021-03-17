import {
  GET_Id,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  Change_Quantity,
  GET_TOTAL,
} from "./actionTypes";

const initialState = {
  Total: 0,
  products: [
    {
      id: 1,
      title: "Nike Shoes",
      price: 50,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "white"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dd65ce3-3743-47b5-978b-d24f4dc53f94/nikecourt-lite-2-hard-court-tennis-shoe-XmD9s0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
    {
      id: 2,
      title: "green shoes",
      price: 55,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "white"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cea04014-d698-42a2-86ec-7cba29ce024a/air-max-bella-tr-4-training-shoe-kc4VqW.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Vk7VJip38Oe3ARNtFHfcYOmrny3IAkdREA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
    {
      id: 3,
      title: "Nike Shoes 3",
      price: 33,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "white"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Vk7VJip38Oe3ARNtFHfcYOmrny3IAkdREA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
      ],
    },
    {
      id: 4,
      title: "Nike Shoes 4",
      price: 90,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "white"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c021552c-3298-4fdc-9e07-f417bcd4bd2e/juniper-trail-trail-shoe-dlbhKl.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Vk7VJip38Oe3ARNtFHfcYOmrny3IAkdREA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
      ],
    },
    {
      id: 8,
      title: "Nike Shoes 8",
      price: 100,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "lightbloue"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Vk7VJip38Oe3ARNtFHfcYOmrny3IAkdREA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
    {
      id: 9,
      title: "Nike Shoes 9",
      price: 95,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "yellow"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Vk7VJip38Oe3ARNtFHfcYOmrny3IAkdREA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
    {
      id: 10,
      title: "Nike Shoes 10",
      price: 30,
      heading: "Nike Air Max Plus ",
      colors: ["red", "blue", "white"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/334fab2b-04eb-4747-9b3b-146af81150af/legend-essential-2-training-shoe-Tpzvzp.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
    {
      id: 11,
      title: "Nike Shoes 11",
      price: 54,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "gray"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caa14a7a-7781-432a-b593-b93514460c7b/quest-3-running-shoe-bCShkB.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
    {
      id: 12,
      title: "Nike Shoes 12",
      price: 55,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "gray", "pink"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46090a3c-91c1-4b30-9ab9-555dffce7826/air-max-90-shoe-W1jPJZ.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
  ],
  Select: null,
  Cart: [
    {
      id: 12,
      title: "Nike Shoes 12",
      price: 55,
      heading: "Nike Air Max Plus ",
      colors: ["red", "green", "gray", "pink"],
      count: "1",
      desciption: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with`,
      src: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46090a3c-91c1-4b30-9ab9-555dffce7826/air-max-90-shoe-W1jPJZ.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLr_A-HwW76rRrseLK54uHhutpP_PmaqbAA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_W7E5RisQySJiQxGhWqlLxSFwU2f_xjvrA&usqp=CAU",
      ],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_Id: {
      let arr = state.products.filter((item) => {
        return item.id == action.payload;
      });
      arr = arr.values();
      for (let item of arr) {
        arr = item;
      }
      return {
        ...state,
        Select: arr,
      };
    }
    case ADD_TO_CART: {
      let check = state.Cart.every((item) => {
        return item.id !== action.payload;
      });
      console.log(check, "check outside");
      if (check) {
        console.log(check, "check inside");

        let add = state.products.filter((items) => {
          return items.id == action.payload;
        });
        add = add.values();
        for (let itm of add) {
          add = itm;
        }
        return {
          ...state,
          Cart: [add, ...state.Cart],
        };
      } else {
        alert("product is already added in Cart");
        return {
          ...state,
          Cart: [...state.Cart],
        };
      }
    }

    case REMOVE_FROM_CART: {
      let remove = state.Cart.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        Cart: remove,
      };
    }
    case Change_Quantity: {
      state.Cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.count = action.payload.qty;
        }
      });
      console.log(state.Cart);
      return {
        ...state,
        Cart: state.Cart,
      };
    }
    case GET_TOTAL: {
      const res = state.Cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      return {
        ...state,
        Total: res,
      };
    }
    default:
      return state;
  }
};
