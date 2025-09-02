import Logo from "@/components/logo";
import { DiscordLogo } from "@/components/social-logos";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  return (
    <div className="mx-auto flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <Logo className="md:size-12" />
        </div>
        <h1 className="font-semibold text-gray-900 dark:text-gray-50 text-2xl md:text-3xl">
          Log in to your account
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <Button
          variant="secondary"
          size="lg"
          iconLeading={DiscordLogo}
          className="gap-3 [&>svg]:size-6"
          onClick={async () =>
            await authClient.signIn.social({
              provider: "discord",
              fetchOptions: {
                onSuccess: () => {
                  router.invalidate();
                },
              },
            })
          }
        >
          Continue with Discord
        </Button>
      </div>
    </div>
  );
}
