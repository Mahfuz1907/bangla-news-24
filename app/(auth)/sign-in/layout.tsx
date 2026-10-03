import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Bangla News 24",
  description: "Create an account on Bangla News 24",
  icons: {
    icon: "/logo.png",
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}