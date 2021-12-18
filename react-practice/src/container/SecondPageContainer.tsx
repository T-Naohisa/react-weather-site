import axios, { AxiosResponse } from "axios";

import store from "store/store";
import { closeDialog } from "store/dialogState";
import { setCurrentWeather, Datatype } from "store/currentWeather";

/**
 * 検索ボタン押下時の処理
 *
 *
 */
export const click = async (cityName: string) => {
  await getWeatherAPI(cityName)
    .then((res) => {
      store.dispatch(setCurrentWeather(res.data));
    })
    .catch((e) => {
      if (e.response.status === 400) {
        console.log("bad request");
      } else if (e.response.status === 404) {
        console.log("認証エラー");
      } else {
        console.log("その他");
      }
    })
    .finally(() => {
      store.dispatch(closeDialog({ state: false }));
    });
};

//天気情報を取得する非同期通信部分（仮置き）
export const getWeatherAPI = async (cityName: string) => {
  const url = process.env.REACT_APP_WEATHER_API_URL!;
  const params = {
    q: cityName,
    appid: process.env.REACT_APP_WEATHER_API_KEY!,
  };

  const response: AxiosResponse<Datatype> = await axios.get(url, {
    params,
  });
  return response;
};
