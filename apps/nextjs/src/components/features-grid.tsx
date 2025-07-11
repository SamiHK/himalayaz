import { Card } from "@saasfly/ui/card";
import * as Icons from "@saasfly/ui/icons";

export function FeaturesGrid({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row md:flex-row xl:flex-row">
      <Card className="w-full rounded-3xl p-3 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Icons.Blocks className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.monorepo_title}</h2>
          </div>
          <p className="font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            {dict?.monorepo_desc}
          </p>
        </div>
      </Card>

      <Card className="w-full rounded-3xl p-3 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Icons.Languages className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.i18n_title}</h2>
          </div>
          <p className="font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            {dict?.i18n_desc}
          </p>
        </div>
      </Card>

      <Card className="w-full rounded-3xl p-3 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Icons.Billing className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.payments_title}</h2>
          </div>
          <p className="font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            {dict?.payments_desc}
          </p>
        </div>
      </Card>

      <Card className="w-full rounded-3xl p-3 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Icons.ShieldCheck className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold">{dict?.nextauth_title}</h2>
          </div>
          <p className="font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            {dict?.nextauth_desc}
          </p>
        </div>
      </Card>
    </div>
  );
}
