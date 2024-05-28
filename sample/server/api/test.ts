import { useCompiler } from '#vue-email'

export default defineEventHandler(async () => {
    return await useCompiler('test.vue')
})
