let requestCount = 1

export default defineEventHandler((event) => {
    const formatMemoryUsage = (data: number) => `${Math.round((data / 1024 / 1024) * 100) / 100} MB`
    const memoryData = process.memoryUsage()

    const memoryUsage = {
        rss: `${formatMemoryUsage(memoryData.rss)}`,
        heapTotal: `${formatMemoryUsage(memoryData.heapTotal)}`,
        heapUsed: `${formatMemoryUsage(memoryData.heapUsed)}`,
        external: `${formatMemoryUsage(memoryData.external)}`,
    }

    // rss -> Resident Set Size - total memory allocated for the process execution
    // heapTotal -> total size of the allocated heap
    // heapUsed -> actual memory used during the execution
    // external -> V8 external memory

    console.log(
        requestCount++ +
            '. Request: ' +
            new Date().toISOString() +
            ' ' +
            getRequestURL(event) +
            ' ' +
            JSON.stringify(memoryUsage)
    )
})
