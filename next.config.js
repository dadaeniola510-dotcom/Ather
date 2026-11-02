// Sandbox-only: the preview proxy forwards requests with the sandbox host and the
// browser sends the public preview origin. Next warns about (and will later block)
// cross-origin /_next/* requests unless those origins are allowed. Gated on
// BASE44_PREVIEW_MODE === '1'; with the flag unset this config adds nothing.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1';
const publicSuffix = process.env.BASE44_PUBLIC_HOST_SUFFIX;
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;

const allowedDevOrigins = previewMode
  ? [
      publicSuffix && `3000-${publicSuffix}`,
      sandboxDomain && `3000-${sandboxDomain}`,
      sandboxDomain && `.${sandboxDomain}`,
    ].filter(Boolean)
  : [];

/** @type {import('next').NextConfig} */
module.exports = allowedDevOrigins.length ? { allowedDevOrigins } : {};
