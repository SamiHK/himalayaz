import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";

import {
  useForm,
  type UseFormProps,
} from "react-hook-form";

export function useZodForm<TSchema extends ZodType>(
  props: Omit<UseFormProps<TSchema["_input"]>, "resolver"> & {
    schema: TSchema;
  },
) {
  const form = useForm<TSchema["_input"]>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  });

  return form;
}
