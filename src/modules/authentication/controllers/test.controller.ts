import { Controller } from "@atomicdesign/atomic-origin";
import { RandomService } from "../services/random.service";

@Controller({name: "Haha"})
export class TestController {
  constructor(
    public randomService: RandomService
  ) {

  }
}