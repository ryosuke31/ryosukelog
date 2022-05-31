import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  console.log(props);

  return (
    <div>
      <ul>
        {props.contents.map((content) => {
          return <li key={content.id}>{content.title}</li>;
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default Home;
