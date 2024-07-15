import { Module } from "@nestjs/common";
import { JobUploadService } from "./jobupload.service";
import { JobUploadController } from "./jobupload.controller";
import { JobUploadResolver } from "./jobupload.resolver";

@Module({
  controllers: [JobUploadController],
  providers: [JobUploadService, JobUploadResolver],
  exports: [JobUploadService],
})
export class JobUploadModule {}
