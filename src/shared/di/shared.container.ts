import { SHARED_TYPES } from "@/shared/di/types";
import { ILogger, PinoLogger } from "@/shared/log/logger";
import { ContainerModule } from "inversify";

export const sharedContainer = new ContainerModule((bind) => {
  bind<ILogger>(SHARED_TYPES.Logger).to(PinoLogger);
}); 