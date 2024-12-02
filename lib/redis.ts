import Redis from 'ioredis'

export const redis = new Redis({
  port: parseInt(process.env.REDIS_PORT!),
  host: process.env.REDIS_HOST!,
})

export const setKv = async (key: string, value: string) => {
  await redis.set(key, value)
}
