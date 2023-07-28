import { LayoutProps } from "$fresh/server.ts";

export default function RootLayout({ Component }: LayoutProps) {
  return (
    <div class="root-layout">
      <Component />
    </div>
  );
}
