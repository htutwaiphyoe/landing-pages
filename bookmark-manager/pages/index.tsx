import type { NextPage } from "next";
import { HomeTemplate } from "@/components/template/HomeTemplate";
import { Layout } from "@/components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default Home;
