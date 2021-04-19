import axios from "axios";

//yelp api
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Af71K92rldnQYejEiN1iDiOG9rxuYUPW3L7gCAU-y6T3aj9OolgctqxcECQNPJVzH-s5XqgGH_Bng6XvS_KB7obqK4XCvZZ_iqHn4ALI4hWMgRgRnjO_Qj9q-Ql5YHYx",
  },
});
