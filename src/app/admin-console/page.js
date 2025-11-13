import { Box, Container } from "@chakra-ui/react";
import { cookies } from "next/headers";
import AdminLogin from "../../components/admin/AdminLogin";
import AdminDashboard from "../../components/admin/AdminDashboard";
import { ADMIN_COOKIE_NAME } from "../../constants/admin";

export const metadata = {
  title: "Panou Administrare | Sicko Design",
  description: "Autentificare pentru proprietarul Sicko Design pentru a gestiona conținutul site-ului.",
};

export default function AdminPage() {
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get(ADMIN_COOKIE_NAME)?.value === "verified";

  return (
    <Box minH="100vh" bg="gray.900" py={{ base: 16, md: 24 }}>
      <Container maxW="960px">
        {isAuthenticated ? <AdminDashboard /> : <AdminLogin />}
      </Container>
    </Box>
  );
}
