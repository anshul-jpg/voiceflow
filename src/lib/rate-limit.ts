interface RateLimitRecord {
  timestamps: number[];
}

const cache = new Map<string, RateLimitRecord>();
let lastCleanup = Date.now();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

function lazyCleanup() {
  const now = Date.now();
  // Run cleanup at most once every 5 minutes
  if (now - lastCleanup > 5 * 60 * 1000) {
    lastCleanup = now;
    for (const [ip, record] of cache.entries()) {
      // Keep only timestamps from the last 10 minutes
      const validTimestamps = record.timestamps.filter(t => now - t < 10 * 60 * 1000);
      if (validTimestamps.length === 0) {
        cache.delete(ip);
      } else {
        record.timestamps = validTimestamps;
      }
    }
  }
}

export function rateLimit(
  req: Request,
  options: { limit: number; windowMs: number }
) {
  lazyCleanup();

  const ip = getClientIp(req);
  const now = Date.now();

  if (!cache.has(ip)) {
    cache.set(ip, { timestamps: [] });
  }

  const record = cache.get(ip)!;

  // Filter timestamps to only keep ones inside the window
  record.timestamps = record.timestamps.filter(
    (t) => now - t < options.windowMs
  );

  if (record.timestamps.length >= options.limit) {
    const oldestTimestamp = record.timestamps[0];
    const resetTime = oldestTimestamp + options.windowMs;
    return {
      success: false,
      limit: options.limit,
      remaining: 0,
      reset: Math.ceil((resetTime - now) / 1000), // seconds until reset
    };
  }

  record.timestamps.push(now);
  return {
    success: true,
    limit: options.limit,
    remaining: options.limit - record.timestamps.length,
    reset: Math.ceil(options.windowMs / 1000),
  };
}
