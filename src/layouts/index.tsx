import { UserOutlined, GithubOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  ProLayout,
  SettingDrawer,
  DefaultFooter,
} from '@ant-design/pro-components';
import { Avatar } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

// const content = (
//   <Descriptions size="small" column={2}>
//     <Descriptions.Item label="创建人">张三</Descriptions.Item>
//     <Descriptions.Item label="联系方式">
//       <a>421421</a>
//     </Descriptions.Item>
//     <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
//     <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
//     <Descriptions.Item label="备注">中国浙江省杭州市西湖区古翠路</Descriptions.Item>
//   </Descriptions>
// );

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
  });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        {/* <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer> */}
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
      <DefaultFooter
        copyright="@2019 蚂蚁金服体验技术部出品"
        links={[
          {
            key: 'Ant Design Pro',
            title: 'Ant Design Pro',
            href: 'https://pro.ant.design',
            blankTarget: true,
          },
          {
            key: 'github',
            title: <GithubOutlined />,
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true,
          },
          {
            key: 'Ant Design',
            title: 'Ant Design',
            href: 'https://ant.design',
            blankTarget: true,
          },
        ]}
      />
      ;
    </div>
  );
};
