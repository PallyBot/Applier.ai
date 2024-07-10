import * as graphql from "@nestjs/graphql";
import { JobUploadService } from "./jobupload.service";

export class JobUploadResolver {
  constructor(protected readonly service: JobUploadService) {}
}
