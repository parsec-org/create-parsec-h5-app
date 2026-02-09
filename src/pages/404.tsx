import { SmileOutline } from 'antd-mobile-icons';
import { Result } from 'antd-mobile';

export default ()=>{
  return (
    <Result
      icon={<SmileOutline />}
      status="error"
      title="404"
      description="找不到您访问的页面"
    />
  );
}