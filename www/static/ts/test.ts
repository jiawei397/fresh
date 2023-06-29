/**
 * test esbuild target to see if it works
 */
function testEsbuildTarget() {
    const obj = {
        a: {
            b: 1
        }
    };
    return obj?.a?.b;
}

console.info("Hello, world!", testEsbuildTarget());