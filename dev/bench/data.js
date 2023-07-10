window.BENCHMARK_DATA = {
  "lastUpdate": 1688993022228,
  "repoUrl": "https://github.com/domsleee/ForceOps",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "name": "domsleee",
            "username": "domsleee"
          },
          "committer": {
            "name": "domsleee",
            "username": "domsleee"
          },
          "id": "a0778d615bd53646d7b0a5aaca2d603306e75941",
          "message": "Add benchmark",
          "timestamp": "2023-07-04T14:19:23Z",
          "url": "https://github.com/domsleee/ForceOps/pull/14/commits/a0778d615bd53646d7b0a5aaca2d603306e75941"
        },
        "date": 1688991806384,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeletionBenchmark.Deleter(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: False)",
            "value": 136588185.45454547,
            "unit": "ns",
            "range": "± 5777585.290215147"
          },
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeletionBenchmark.BuiltIn(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: False)",
            "value": 113641236.90476191,
            "unit": "ns",
            "range": "± 5956885.68913664"
          },
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeletionBenchmark.Deleter(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: True)",
            "value": 285864692.85714287,
            "unit": "ns",
            "range": "± 4885202.826663123"
          },
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeletionBenchmark.BuiltIn(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: True)",
            "value": 218069579.78723404,
            "unit": "ns",
            "range": "± 14533836.599737408"
          }
        ]
      }
    ],
    "ForceOps Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "domsleee",
            "username": "domsleee"
          },
          "committer": {
            "name": "domsleee",
            "username": "domsleee"
          },
          "id": "026e8a2116daecf58dd6eaa4d53225e7aa90ca17",
          "message": "Add benchmark",
          "timestamp": "2023-07-04T14:19:23Z",
          "url": "https://github.com/domsleee/ForceOps/pull/14/commits/026e8a2116daecf58dd6eaa4d53225e7aa90ca17"
        },
        "date": 1688993016141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeleterBenchmark.Deleter(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: False)",
            "value": 136771185.7142857,
            "unit": "ns",
            "range": "± 3867889.705780745"
          },
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeleterBenchmark.DirectoryDelete(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: False)",
            "value": 115334387.6923077,
            "unit": "ns",
            "range": "± 5304200.043082242"
          },
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeleterBenchmark.Deleter(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: True)",
            "value": 298002892.85714287,
            "unit": "ns",
            "range": "± 4766964.649255619"
          },
          {
            "name": "ForceOps.Benchmarks.FileAndDirectoryDeleterBenchmark.DirectoryDelete(NUM_FILES: 1000, FILE_SIZE: 10, IsInsideDirectory: True)",
            "value": 216989072.2222222,
            "unit": "ns",
            "range": "± 3997921.4515068075"
          }
        ]
      }
    ]
  }
}