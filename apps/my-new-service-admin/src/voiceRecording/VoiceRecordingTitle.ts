import { VoiceRecording as TVoiceRecording } from "../api/voiceRecording/VoiceRecording";

export const VOICERECORDING_TITLE_FIELD = "fileUrl";

export const VoiceRecordingTitle = (record: TVoiceRecording): string => {
  return record.fileUrl?.toString() || String(record.id);
};
