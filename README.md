# Bedrock Documentation Generator

## Overview

This repository generates documentation for different versions of Bedrock. The generated docs are stored in the `./metadata` directory. Additionally we generate types under `./types` folder Before fetching any data, ensure that the data is generated in the specific branch by checking the `exist.json` file in the root directory.

## Changes made to generate docs
We try to omit build version from each JSON file so we can generate more reliable changelogs.

## Checking Generated Data

The `exist.json` file is crucial for determining if the necessary data has been generated for a specific branch. This file must be fetched first to verify the existence of the repository and the availability of the required data. It contains:

- **version**: The version of the documentation (e.g., x.x.x or x.x.x.x).
- **build-version**: The version of BDS used to generate the documentation.

Example of `exist.json`:

```json
{
   "version": "x.x.x",
   "build-version": "x.x.x.x"
}
```

## Versioning
You can target specific versions via the following branches:

- **Latest Stable**: `stable`
- **Latest Preview**: `preview`
- **Specific Stable**: `stable-x.x.x` (e.g., `stable-1.20.10`)