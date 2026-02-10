import { isWx } from '@/utils';
import debug from '@/utils/debug';
import storage from '@/utils/storage';
import initWx from '@/utils/wx';

const isProd = process.env.NODE_ENV === 'production' && isWx;

const initWxFn = () =>
  initWx({
    isNeedLogin: false,
    title: '这里是全局的默认分享标题',
    imgUrl: '',
    // imgUrl: `${window.location.origin}${require('../images/icon.jpg')}`,
    desc: '这里是全局的默认分享具体描述信息',
  });

export const initWechatSDK = async () => {
  storage.set('appid', 'wx179573d3bf2fedb7');
  await debug().then(async () => {
    if (isProd) {
      await initWxFn();
    } else {
      storage.set('openid', 'oAl2A0pBmpYrqL6oYdbz8YJGlRbU');
      storage.set('third_token', 'Z5RZB5tIhO337pqP8AHO');
    }
  });
};
