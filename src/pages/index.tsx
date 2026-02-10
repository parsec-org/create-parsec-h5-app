import yayJpg from '@/assets/yay.jpg';
import { share } from '@/utils/wx';
import { history } from '@umijs/max';
import { Button } from 'antd-mobile';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="100%" alt="" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <div className="text">这里是文本</div>
      <Button color="primary">Button</Button>
      <Button
        color="primary"
        onClick={() => {
          history.push('/button');
        }}
      >
        go to button
      </Button>
      <Button
        color="primary"
        onClick={() => {
          history.push('/dialog');
        }}
      >
        go to dialog
      </Button>
      <Button
        color="primary"
        onClick={() => {
          history.push('/icon');
        }}
      >
        go to icon
      </Button>
      <Button color="primary">Button</Button>
      <Button block color="primary" size="large">
        Block Button
      </Button>
      <Button
        block
        color="primary"
        size="large"
        onClick={() => {
          share(
            'ddd',
            'dddddd',
            'dddddd',
            'dddddd',
            () => {},
            () => {},
          );
        }}
      >
        Share
      </Button>
    </div>
  );
}
