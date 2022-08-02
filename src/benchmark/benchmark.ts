/**
 * - file to run benchmarks
 */

import { benchmark } from "../deps.ts";
import { generateUUID } from "../utils/index.ts";

benchmark.bench({
    name: "run UUID generate function 1000times",
    runs: 1000,
    func: (b) => {
        b.start();
        generateUUID();
        b.stop();
    }
});

benchmark.runBenchmarks();