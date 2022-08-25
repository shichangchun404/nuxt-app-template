export const state = () => ({
  locales: ['cn','en'],
  locale: 'cn',
  isMobile: false
});

export const mutations = {
  SET_LANG(state: any, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  SET_ISMOBILE(state: any, val: boolean){
    state.isMobile = val;
  },
  
};

export const actions = {
  // @ts-ignore
  async nuxtServerInit({ commit }, { req, res, route, redirect }) {
    let u = (req.headers && req.headers["user-agent"]) || "";
    commit("SET_ISMOBILE", isMobile(u));
  }
};

// 是否是小程序
export const isMiniProgram = (u: string) => {
  return !!(u.match(/micromessenger/i) && u.match(/miniprogram/i));
};

// 是否是移动端
export const isMobile = (u: string) => {
  let browser = {
    versions: (function() {
      return {
        // 移动终端浏览器版本信息
        trident: u.indexOf("Trident") > -1, // IE内核
        presto: u.indexOf("Presto") > -1, // opera内核
        webKit: u.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, // android终端或者uc浏览器
        iPhone: u.indexOf("iPhone") > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, // 是否iPad
        webApp: u.indexOf("Safari") == -1, // 是否web应该程序，没有头部与底部
        weixin: u.indexOf("MicroMessenger") > -1, // 是否微信
      };
    })()
  };
  if (
    browser.versions.mobile ||
    browser.versions.ios ||
    browser.versions.android ||
    browser.versions.iPhone ||
    browser.versions.iPad
  ) {
    return true;
  } else {
    return false;
  }
};