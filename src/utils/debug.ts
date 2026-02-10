// @ts-ignore
import ImportCDNJS from 'import-cdn-js';

export default () =>
  new Promise<void>((resolve, reject) => {
    if (window.location.href.includes('isDebug=true')) {
      ImportCDNJS('//cdn.bootcss.com/eruda/1.4.4/eruda.min.js', 'eruda').then((eruda: any) => {
        eruda.init();
        resolve();
      });
    } else {
      reject();
    }
  });
