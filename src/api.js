export const API_BASE_URL = "https://murmuring-tor-81614.herokuapp.com/api";
export const IMAGE_BASE_URL = "https://murmuring-tor-81614.herokuapp.com";

export const goodsAPI = {
  getGoods: async () => {
    const response = await fetch(`${API_BASE_URL}/goods`);
    return await response.json().then(data => data);
  }
};
