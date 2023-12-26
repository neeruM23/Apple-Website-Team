import axios from "axios";

const params = {
  headers: {
    Authorization:
      "bearer " +
      "b386839b0e4ebaf940cfe972141355e2acd28fb07a14698262e1ed3e67979fc93d02cdbde9068be3a0d15fd8b2a4caad86d7d17d7eb7f23d3ef2337822d264a2f7a049553f11978ee9132053b462b06cd439785cb6b520bc6f31a399550350ae006c585c83a7dff26a64e8535a16b4cb2173aa249919bf93669fd99229712ab2",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, params);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// export const makePaymentRequest = axios.create({
//   baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
//   headers: {
//     Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
//   },
// });
