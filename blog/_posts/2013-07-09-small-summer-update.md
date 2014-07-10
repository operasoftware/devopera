---
title: Small Summer Update
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Blink

### Added patches

PATCH-1148, Google translate sends O15 audio/mp3 for text-to-speech. Patch replaces audio element with the old Flash-equivalent.

## Presto

### Added patches

PATCH-1147, G+ — allow photo sharing. Site depends on window.URL.createObjectURL — not supported in Presto, but we can fake it.

### Added patches

PATCH-750, westelm.com — Fix compatibility with old mapquest. Updated script names.

### Removed patches

- PATCH-1068, amazon — avoid looping hash decode. Sub-site closed.
- PATCH-937, omv.cz: old iframe resize script. Site changed.
- PATCH-661, fintyre.it: work around sniffing. Site changed.

Only 12.1x updated this time, as G+ was broken in additional ways in earlier versions.
