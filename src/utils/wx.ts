import { isWx } from '@/utils/index';
import storage from '@/utils/storage';
import { request } from '@umijs/max';
import QueryString from 'qs';
import wx from 'weixin-js-sdk';

const isProd = process.env.NODE_ENV === 'production' && isWx;
let resolveReady: (() => void) | null = null;

const readyPromise = new Promise<void>((resolve) => {
  resolveReady = resolve;
});

/**
 * 分享配置（支持重复调用）
 */
export async function share(
  title: string,
  desc: string,
  link: string,
  imgUrl: string,
  success: () => void,
) {
  await readyPromise;

  const config = { title, desc, link, imgUrl, success };

  wx.updateTimelineShareData({
    title,
    link,
    imgUrl,
    success,
  });

  wx.updateAppMessageShareData(config);
}

/**
 * 清理 URL 参数
 */
function cleanUrlParams(keys: string[]) {
  const url = new URL(location.href);

  let changed = false;
  keys.forEach((key) => {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  if (changed) {
    location.replace(url.toString());
  }
}

/**
 * 登录 & openid 处理
 */
async function handleLogin({
  openid,
  appId,
  isNeedLogin,
}: {
  openid?: string;
  appId: string;
  isNeedLogin: boolean;
}) {
  if (!openid && isNeedLogin && isProd) {
    const formdata = new FormData();
    formdata.append('appid', appId);
    formdata.append('redirect_uri', location.href);

    const {
      data: { url },
    } = await request('https://games.parsec.com.cn/user_auth_url', {
      method: 'post',
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data;' },
    });

    location.href = url;
    return;
  }

  if (openid) {
    storage.set('openid', openid);
    cleanUrlParams(['openid', 'appid']);
  }
}

/**
 * 获取 wx config
 */
async function getWxConfig(appId: string) {
  const {
    data: { result },
  } = await request('https://games.parsec.com.cn/js_ticket', {
    method: 'get',
    params: {
      appId,
      t: 4,
      url: location.href,
    },
  });

  return result;
}

/**
 * 初始化微信分享
 */
export default async function initWx({
  title = document.title,
  desc = title,
  link = location.href,
  imgUrl = '',
  openid = QueryString.parse(window.location.search).openid || storage.get('openid'),
  appId = 'wxa040c2edf31a93d0',
  isNeedLogin = false,
}: {
  title?: string;
  desc?: string;
  link?: string;
  imgUrl?: string;
  openid?: string;
  appId?: string;
  isNeedLogin?: boolean;
} = {}) {
  await handleLogin({ openid, appId, isNeedLogin });

  const config = await getWxConfig(appId);

  wx.config({
    debug: !isProd,
    jsApiList: Object.keys(wx),
    ...config,
  });

  wx.error((e) => {
    console.error('[wx sdk error]', e);
  });

  wx.ready(() => {
    resolveReady?.();
    resolveReady = null;
    share(title, desc, link, imgUrl, () => {});
  });
}
