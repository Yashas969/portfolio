/**
 * Centralized Cloud File & Storage Helper Utility
 * Normalizes Google Drive (Files & Docs), OneDrive, Dropbox, S3, and Cloudinary URLs.
 */

export function extractGoogleDriveId(url: string): { id: string; isDoc: boolean } | null {
  if (!url) return null;

  // Match /document/d/DOC_ID/
  const matchDocD = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
  if (matchDocD && matchDocD[1]) {
    return { id: matchDocD[1], isDoc: true };
  }

  // Match /file/d/FILE_ID/
  const matchFileD = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchFileD && matchFileD[1]) {
    return { id: matchFileD[1], isDoc: false };
  }

  // Match id=FILE_ID
  const matchId = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchId && matchId[1]) {
    return { id: matchId[1], isDoc: false };
  }

  return null;
}

/**
 * Returns an embeddable preview URL for Google Drive files and documents.
 */
export function getEmbedUrl(url: string): string {
  const info = extractGoogleDriveId(url);
  if (info) {
    if (info.isDoc) {
      return `https://docs.google.com/document/d/${info.id}/preview`;
    }
    return `https://drive.google.com/file/d/${info.id}/preview`;
  }
  return url;
}

/**
 * Returns a direct view URL for Google Drive, Google Docs, or external file references.
 */
export function getViewUrl(url: string): string {
  const info = extractGoogleDriveId(url);
  if (info) {
    if (info.isDoc) {
      return `https://docs.google.com/document/d/${info.id}/edit`;
    }
    return `https://drive.google.com/file/d/${info.id}/view`;
  }
  return url;
}
