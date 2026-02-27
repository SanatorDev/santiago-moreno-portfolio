const truthyValues = new Set(["1", "true", "yes", "on"]);

export function isFullSiteEnabled(): boolean {
  const raw = process.env.ENABLE_FULL_SITE ?? process.env.NEXT_PUBLIC_ENABLE_FULL_SITE;

  if (!raw) {
    return false;
  }

  return truthyValues.has(raw.toLowerCase());
}
