import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "fileUrl";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.fileUrl?.toString() || String(record.id);
};
