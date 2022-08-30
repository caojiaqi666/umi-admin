import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const access = useAccess();

  //   const requ = async () => {
  //     const { data, error, loading } = useRequest(() => {
  //         // return API.getUserList('/api/test');
  //       });
  //       if (loading) {
  //         return <div>loading...</div>;
  //       }
  //       if (error) {
  //         return <div>{error.message}</div>;
  //       }
  //       return <div>{data.name}</div>;
  //   }
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
