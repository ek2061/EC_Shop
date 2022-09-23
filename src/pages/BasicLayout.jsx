import { HeaderMenu, HeaderSearch } from "@/views/Header";
import { Layout, Typography } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export const BasicLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div style={{ position: "fixed", width: "100%" }}>
        <Header style={{ color: "#F2F2F7" }}>
          <HeaderMenu />
        </Header>
        <HeaderSearch />
      </div>
      <Layout style={{ paddingTop: "128px" }}>
        <Content>
          <Outlet />
        </Content>
        <Footer
          style={{
            background: "#222222",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "#AEAEB2",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Typography>
        </Footer>
      </Layout>
    </Layout>
  );
};
