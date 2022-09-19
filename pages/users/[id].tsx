import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout pageTitle="User Detail Page">
      <p>This is User {id}</p>
    </Layout>
  );
}
