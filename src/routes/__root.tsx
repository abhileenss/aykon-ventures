import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LoadOverlay } from "@/components/LoadOverlay";
import { Cursor } from "@/components/Cursor";
import { useReveal } from "@/hooks/useReveal";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <h1 className="editorial text-[15vw] sm:text-[10rem] leading-none text-foreground">404.</h1>
        <p className="mt-6 editorial text-2xl md:text-3xl text-foreground/70">
          This page doesn't exist.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="eyebrow text-foreground/55 hover:text-foreground transition-colors inline-flex items-center gap-2"
            data-hover
          >
            Return to the house →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <p className="eyebrow text-foreground/45">Something went wrong</p>
        <h1 className="editorial mt-6 text-4xl md:text-5xl text-foreground">
          This page didn't load.
        </h1>
        <p className="mt-6 text-foreground/60 leading-relaxed">
          Something went wrong on our end. Try again or return to the house.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="eyebrow px-8 py-4 bg-onyx text-limestone hover:bg-emerald transition-colors duration-500"
            data-hover
          >
            Try again
          </button>
          <a
            href="/"
            className="eyebrow text-foreground/55 hover:text-foreground transition-colors inline-flex items-center gap-2"
            data-hover
          >
            Return to the house →
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aykon Ventures" },
      { name: "description", content: "A Dubai based marketing and holding house." },
      { property: "og:title", content: "Aykon Ventures" },
      { property: "og:description", content: "A Dubai based marketing and holding house." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useReveal();

  return (
    <QueryClientProvider client={queryClient}>
      <LoadOverlay />
      <Cursor />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

