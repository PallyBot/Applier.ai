import { Module } from "@nestjs/common";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { CandidateModule } from "./candidate/candidate.module";
import { RecruiterModule } from "./recruiter/recruiter.module";
import { InterviewModule } from "./interview/interview.module";
import { JobPositionModule } from "./jobPosition/jobPosition.module";
import { MessageModule } from "./message/message.module";
import { InteractionModule } from "./interaction/interaction.module";
import { VoiceRecordingModule } from "./voiceRecording/voiceRecording.module";
import { JobRequirementModule } from "./jobRequirement/jobRequirement.module";
import { AttachmentModule } from "./attachment/attachment.module";
import { CandidateScoreModule } from "./candidateScore/candidateScore.module";
import { RankingAlgorithmModule } from "./rankingAlgorithm/rankingAlgorithm.module";
import { CandidateApplicationModule } from "./candidateApplication/candidateApplication.module";
import { ResumeModule } from "./resume/resume.module";
import { ProductModule } from "./product/product.module";
import { OrderModule } from "./order/order.module";
import { NotificationModule } from "./notification/notification.module";
import { UserModule } from "./user/user.module";
import { ApplicationModule } from "./Application/application.module";
import { AtsModule } from "./Ats/ats.module";
import { CandidateRankingModule } from "./CandidateRanking/candidateranking.module";
import { JobUploadModule } from "./JobUpload/jobupload.module";
import { TaskSchedulerModule } from "./TaskScheduler/taskscheduler.module";
import { UserInteractionModule } from "./UserInteraction/userinteraction.module";
import { UserManagementModule } from "./UserManagement/usermanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    LoggerModule,
    CandidateModule,
    RecruiterModule,
    InterviewModule,
    JobPositionModule,
    MessageModule,
    InteractionModule,
    VoiceRecordingModule,
    JobRequirementModule,
    AttachmentModule,
    CandidateScoreModule,
    RankingAlgorithmModule,
    CandidateApplicationModule,
    ResumeModule,
    ProductModule,
    OrderModule,
    NotificationModule,
    UserModule,
    ApplicationModule,
    AtsModule,
    CandidateRankingModule,
    JobUploadModule,
    TaskSchedulerModule,
    UserInteractionModule,
    UserManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    OpenTelemetryModule.forRoot({
      serviceName: "My New Service",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
  ],
  providers: [],
})
export class AppModule {}
