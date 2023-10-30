async function readStream(stream) {
    const reader = stream.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        result += decoder.decode(value);
    }

    return JSON.parse(result);
}

export default readStream;