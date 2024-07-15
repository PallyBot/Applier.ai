import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { JobUploadService } from "./jobupload.service";

@swagger.ApiTags("jobUploads")
@common.Controller("jobUploads")
export class JobUploadController {
  constructor(protected readonly service: JobUploadService) {}
}
