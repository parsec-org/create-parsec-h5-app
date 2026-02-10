import { Result } from 'antd-mobile';
import { SmileOutline } from 'antd-mobile-icons';

export default () => {
  return (
    <Result icon={<SmileOutline />} status="error" title="404" description="找不到您访问的页面" />
  );
};
