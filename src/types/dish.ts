import type { Diet } from "@/types/diet";
import type { RecommendedStatus } from "@/types/recommendedStatus";
export interface Dish {
  name?: string;
  diet?: Diet;
  status?: RecommendedStatus;
}
