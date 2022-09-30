import { useMemo, ChangeEvent } from "react";
import { debounce } from "lodash";

const useDebouceChange = (
  callback: (event: ChangeEvent<HTMLInputElement>) => void,
  wait: number,
  deps: unknown[]
) => {
  return useMemo(() => debounce(callback, wait), [deps]);
};

export default useDebouceChange;
